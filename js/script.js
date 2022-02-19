"use strict"

const title = document.getElementsByTagName("h1")[0]
const buttonPlus = document.querySelector(".screen-btn")
const otherItemsPercent = document.querySelectorAll(".other-items.percent")
const otherItemsNumber = document.querySelectorAll(".other-items.number")

const inputRange = document.querySelector(".rollback input")
const inputRangeValue = document.querySelector(".rollback .range-value")

const startBtn = document.getElementsByClassName("handler_btn")[0]
startBtn.setAttribute('disabled', "true")

const resetBtn= document.getElementsByClassName("handler_btn")[1]

const total = document.getElementsByClassName("total-input")[0]
const totalCount = document.getElementsByClassName("total-input")[1]
const totalCountOther = document.getElementsByClassName("total-input")[2]
const fullTotalCount = document.getElementsByClassName("total-input")[3]
const totalCountRollback = document.getElementsByClassName("total-input")[4]

const input = document.querySelector(".screen input")


let screens = document.querySelectorAll(".screen")
const select = document.getElementsByTagName("option")[0]

const appData = {
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

    init: function () {
        appData.addTitle()
        startBtn.addEventListener("click", appData.start)
        buttonPlus.addEventListener("click", appData.addScreensBlock)
    },

    addTitle: function () {
        document.title = title.textContent;
    },

    disabledBtn: input.oninput = function (){
        if (input.value.length < 1){
            startBtn.setAttribute('disabled', "true")
        } else {
            startBtn.removeAttribute('disabled')
        }
    },

    rangeInput: inputRange.onclick = function () {
        inputRangeValue.innerHTML = inputRange.value + "%"
        appData.rollback = inputRangeValue
    },

    start: function () {
        appData.addScreens()
        appData.addServices()
        appData.addPrices();
        // appData.getServicePercentPrice();
        // appData.logger();
        console.log(appData)
        appData.showResult()
        appData.disabledBtn()
        console.log(appData.screenPrice)
        console.log(appData.rollback)
        console.log(total.value)
    },

    isString: function (str) {
        return isNaN(parseFloat(str))
    },

    showResult: function () {
        total.value = appData.screenPrice
        totalCountOther.value = appData.servicePricesPercent + appData.servicePricesNumber
        fullTotalCount.value = appData.fullPrice
    },

    addScreens: function () {
        screens = document.querySelectorAll(".screen")

        screens.forEach(function (screen, index) {
            const select = screen.querySelector("select")
            const input = screen.querySelector("input")
            const selectName = select.options[select.selectedIndex].textContent

            appData.screens.push({
                id: index,
                name: selectName,
                price: +select.value * +input.value,
                count: +input.value,

            })

        })

    },
    addServices: function () {
        otherItemsPercent.forEach(function (item) {
            const check = item.querySelector("input[type=checkbox]")
            const label = item.querySelector("label")
            const input = item.querySelector("input[type=text]")

            if (check.checked) {
                appData.servicesPercent[label.textContent] = +input.value
            }
        })
        otherItemsNumber.forEach(function (item) {
            const check = item.querySelector("input[type=checkbox]")
            const label = item.querySelector("label")
            const input = item.querySelector("input[type=text]")

            if (check.checked) {
                appData.servicesNumber[label.textContent] = +input.value
            }
        })
    },

    addScreensBlock: function () {
        const cloneScreen = screens[0].cloneNode(true)
        screens[screens.length - 1].after(cloneScreen)
    },
    addPrices: function () {
        for (let screen of appData.screens) {
            appData.screenPrice += +screen.price
        }

        for (let key in appData.servicesNumber) {
            appData.servicePricesNumber += appData.servicesNumber[key]
        }

        for (let key in appData.servicesPercent) {
            appData.servicePricesPercent += appData.screenPrice * (appData.servicesPercent[key] / 100)
        }

        for (let screen of appData.screens) {
            totalCount.value = +totalCount.value + +screen.count
        }

        appData.fullPrice = +appData.screenPrice + appData.servicePricesNumber + appData.servicePricesPercent;

        totalCountRollback.value = appData.fullPrice - (appData.fullPrice * (appData.rollback / 100))

    },

    logger: function () {
    }
}
console.log(appData.screens)
appData.init();