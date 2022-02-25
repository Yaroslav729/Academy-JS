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
let select = document.querySelectorAll(".screen select")
let arrayInput = document.querySelectorAll(".screen input");

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

for (let i = 0; i < select.length, i < arrayInput.length; i++) {
    const elInput = arrayInput[i]
    const elSelect = select[i]
    atom(elInput, 'input', onInputCountScreen)
    atom(elSelect, "change", onInputCountScreen)
}
let buttonDisabled = () => {
    startBtn.addEventListener("click", disabledInputSelect)
}
let disabledInputSelect = () => {
    for (let i = 0; i < select.length, i < arrayInput.length; i++) {
        const elInput = arrayInput[i]
        const elSelect = select[i]
        elInput.setAttribute('disabled', "true")
        elSelect.setAttribute('disabled', "true")
        startBtn.style.display = 'none';
        startBtnReset.style.display = 'block';
    }
}

const appData = {
    title: "",
    screens: [],
    input: [],
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

    init: function () {
        this.addTitle()
        buttonDisabled()
        atom(startBtn, "click", () => this.start())
        atom(buttonPlus, 'click', () => this.addScreensBlock())
    },

    addTitle: function () {
        document.title = title.textContent;
    },

    rangeInput: inputRange.oninput = function () {
        inputRangeValue.innerHTML = inputRange.value + "%"
        this.rollback = inputRange.value
    },

    start: function () {
        this.addScreens()
        this.addServices()
        this.addPrices();
        // this.getServicePercentPrice();
        this.showResult()
    },

    isString: function (str) {
        return isNaN(parseFloat(str))
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
        console.log(cloneScreen)
    },
    addPrices: function () {
        for (let screen of this.screens) {
            this.screenPrice += +screen.price
        }

        for (let key in this.servicesNumber) {
            this.servicePricesNumber += this.servicesNumber[key]
        }

        for (let key in this.servicesPercent) {
            this.servicePricesPercent += this.screenPrice * (this.servicesPercent[key] / 100)
        }

        for (let screen of this.screens) {
            totalCount.value = +totalCount.value + +screen.count
        }

        this.fullPrice = +this.screenPrice + this.servicePricesNumber + this.servicePricesPercent;

        totalCountRollback.value = this.fullPrice - (this.fullPrice * (+this.rollback / 100))

    },
}

appData.init();

