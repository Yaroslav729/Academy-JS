"use strict"

const title = document.getElementsByTagName("h1")[0]
const buttonPlus = document.querySelector(".screen-btn")
const otherItemsPercent = document.querySelectorAll(".other-items.percent")
const otherItemsNumber = document.querySelectorAll(".other-items.number")

let inputRange = document.querySelector(".rollback input")
const inputRangeValue = document.querySelector(".rollback .range-value")

const startBtn = document.getElementsByClassName("handler_btn")[0]
const startBtnReset = document.getElementsByClassName("handler_btn")[1]
startBtn.setAttribute('disabled', "true")
const resetBtn = document.getElementsByClassName("handler_btn")[1]

const total = document.getElementsByClassName("total-input")[0]
const totalCount = document.getElementsByClassName("total-input")[1]
const totalCountOther = document.getElementsByClassName("total-input")[2]
const fullTotalCount = document.getElementsByClassName("total-input")[3]
const totalCountRollback = document.getElementsByClassName("total-input")[4]
let screens = document.querySelectorAll(".screen")
let init_select = document.querySelector(".screen select")
let init_input = document.querySelector(".screen input");
let checkList = document.querySelectorAll('.custom-checkbox')

let onInputCountScreen = () => {
    let screensSelectOption = document.querySelectorAll(".screen select")
    let arrayInputCurrent = document.querySelectorAll(".screen input");
    for (let i = 0; i < screensSelectOption.length, i < arrayInputCurrent.length; i++) {
        const selectOption = screensSelectOption[i]
        const element = arrayInputCurrent[i];
        if (!selectOption.value || !element.value) {
            startBtn.setAttribute('disabled', "false");
        } else {
            startBtn.removeAttribute('disabled')
        }
    }
}

let atom = (html, event, coll) => {
    html.addEventListener(event, coll)
}

atom(init_input, 'input', onInputCountScreen)
atom(init_select, "change", onInputCountScreen)

const init = {
    title: "",
    screens: [],
    screenPrice: 0,
    adaptive: true,
    rollback: 0,
    servicePricesPercent: 0,
    servicePricesNumber: 0,
    fullPrice: 0,
    servicePercentPrice: 0,
    servicesPercent: {},
    servicesNumber: {},
    total: 0,
}
const appData = {
    ...init,
    input: [],

    reset: function () {
        for (let i = 0; i < this.input.length; i++) {
            this.input[i].remove()
        }
        Object.assign(this, init)
        this.screens = []
        this.servicesPercent = {}
        this.servicesNumber = {}
        this.input = []
        inputRange.value = this.rollback
        inputRangeValue.innerHTML = this.rollback + "%"
        this.addPrices()
        this.showResult()
        for (let i = 0; i < checkList.length; i++) {
            if (checkList[i].checked) {
                checkList[i].checked = false
            }
        }
        init_input.value = ''
        init_select.options[0].selected = true
        init_input.disabled = false
        init_select.disabled = false
        startBtn.style.display = 'block'
        resetBtn.style.display = 'none'
        startBtn.setAttribute('disabled', "true")

    },

    init: function () {
        this.addTitle()
        atom(startBtn, "click", (nod) => this.start(nod))
        atom(buttonPlus, 'click', () => this.addScreensBlock())
        atom(resetBtn, 'click', () => this.reset())
        atom(inputRange, 'input', (e) => this.rangeInput(e))

    },

    addTitle: function () {
        document.title = title.textContent;
    },

    rangeInput: function (e) {
        inputRangeValue.innerHTML = e.target.value + "%"
        this.rollback = e.target.value
    },

    start: function (e) {
        e.target.style.display = 'none'
        resetBtn.style.display = 'block'
        init_input.setAttribute('disabled', "true")
        init_select.setAttribute('disabled', "true")
        this.disabledDynamicField()
            this.addScreens()
            this.addServices()
            this.addPrices();
        this.showResult()
    },

    showResult: function () {
        total.value = this.screenPrice
        totalCountOther.value = this.servicePricesPercent + this.servicePricesNumber
        fullTotalCount.value = this.fullPrice
    },

    addScreens: function () {
        screens = document.querySelectorAll(".screen")
        let app = this
        screens.forEach(function (screen, index) {
            const select = screen.querySelector("select")
            const input = screen.querySelector("input")
            const selectName = select.options[select.selectedIndex].textContent
            app.screens.push({
                id: index,
                name: selectName,
                price: +select.value * +input.value,
                count: +input.value,

            })

        })

    },
    addServices: function () {
        let context = this
        otherItemsPercent.forEach((item) => {
            const check = item.querySelector("input[type=checkbox]")
            const label = item.querySelector("label")
            const input = item.querySelector("input[type=text]")

            if (check.checked) {
                context.servicesPercent[label.textContent] = +input.value
            }
        })
        otherItemsNumber.forEach((item) => {
            const check = item.querySelector("input[type=checkbox]")
            const label = item.querySelector("label")
            const input = item.querySelector("input[type=text]")

            if (check.checked) {
                context.servicesNumber[label.textContent] = +input.value
            }
        })
    },

    addScreensBlock: function () {
        const cloneScreen = screens[0].cloneNode(true)
        let input = cloneScreen.querySelector("input")
        let select = cloneScreen.querySelector("select")
        atom(input, 'input', onInputCountScreen)
        atom(select, 'change', onInputCountScreen)
        screens[screens.length - 1].after(cloneScreen)
        this.input.push(cloneScreen)
    },

    disabledDynamicField: function () {
        this.input.forEach((input) => {
            let text = input.querySelector("input")
            let select = input.querySelector("select")
            text.setAttribute('disabled', "true")
            select.setAttribute('disabled', "true")
        })
    },
    addPrices: function () {
        if (this.screens.length) {
            for (let screen of this.screens) {
                this.screenPrice += +screen.price
                totalCount.value = +totalCount.value + +screen.count
            }
        }else{
            this.screenPrice = 0
            totalCount.value = 0
        }

        for (let key in this.servicesNumber) {
            this.servicePricesNumber += this.servicesNumber[key]
        }

        for (let key in this.servicesPercent) {
            this.servicePricesPercent += this.screenPrice * (this.servicesPercent[key] / 100)
        }

        this.fullPrice = +this.screenPrice + this.servicePricesNumber + this.servicePricesPercent;

        totalCountRollback.value = this.fullPrice - (this.fullPrice * (+this.rollback / 100))

    },
}

appData.init();

