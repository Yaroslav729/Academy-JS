"use strict"

const appData = {
    title: "",
    screens: "",
    screenPrice: 0,
    adaptive: true,
    rollback: 10,
    allServicePrices: 0,
    fullPrice: 0,
    servicePercentPrice: 0,
    service1: "",
    service2: "",
    rollbackMessage: "",

    isNumber: function (num) {
        return !isNaN(parseFloat(num)) && isFinite(num)
    },

    asking: function () {
        appData.title = prompt("Как называется ваш проект?", "glo");

        appData.screens = prompt("Какие типы экранов нужно разработать?", "Сложные");

        do {
            appData.screenPrice = +prompt("Сколько будет стоить данная работа?");
        } while (!appData.isNumber(appData.screenPrice))

        appData.adaptive = confirm("Нужен ли адаптив на сайте?");

    },

    getAllServicePrices: function () {
        let sum = 0
        let price;

        for (let i = 0; i < 2; i++) {
            if (i === 0) {
                appData.service1 = prompt("Какой дополнительный тип услуги нужен?", "Вёрстка")
            } else if (i === 1) {
                appData.service2 = prompt("Какой дополнительный тип услуги нужен?", "Модальное окно")
            }
            do {
                price = +prompt("Сколько это будет стоить")
            } while (!appData.isNumber(price))

            sum += price
        }
        return sum
    },
    showTypeOf: function (variable) {
        console.log(variable);
    },

    getFullPrice: function () {
        return appData.screenPrice + appData.allServicePrices;
    },
    getTitle: function () {
        return appData.title.trim()[0].toUpperCase() + appData.title.trim().substr(1).toLowerCase();
    },


    getServicePercentPrice: function () {
        return appData.fullPrice - (appData.fullPrice * (appData.rollback / 100))
    },

    getRollbackMessage: function () {
        if (appData.fullPrice >= 30000) {
            return "Даем скидку в 10%"
        } else if (appData.fullPrice >= 15000 && appData.fullPrice <= 30000) {
            return "Даем скидку в 5%"
        } else if (appData.fullPrice <= 15000 && appData.fullPrice >= 0) {
            return "Скидка не предусмотрена"
        } else {
            return "Что то пошло не так"
        }
    },

    start: function () {
        appData.asking();
        appData.showTypeOf();
        appData.allServicePrices = appData.getAllServicePrices();
        appData.fullPrice = appData.getFullPrice();
        appData.servicePercentPrice = appData.getServicePercentPrice();
        appData.rollbackMessage = appData.getRollbackMessage()
        appData.title = appData.getTitle();
        appData.logger();
    },
    logger: function (){
        for (const key in appData) {
            console.log(key +': ' + appData[key]);
        }
    },
}

appData.start();