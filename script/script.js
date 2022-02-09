"use strict"

const title = document.getElementsByTagName("h1")
for (let i = 0; i < title.length; i++) {
    console.log(title[i]) }

let button = document.getElementsByClassName("handler_btn")
for (let i = 0; i < button.length; i++) {
    console.log(button[i])}

let buttonPlus = document.querySelector(".screen-btn")
console.log(buttonPlus);

let percent = document.querySelectorAll(".other-items.percent")
for (let i = 0; i < percent.length; i++) {
    console.log(percent[i])
}

let number = document.querySelectorAll(".other-items.number")
for (let i = 0; i < number.length; i++) {
    console.log(number[i])
}

let input = document.querySelector(".rollback > .main-controls__range > input[type=range]")
    console.log(input)

let span = document.querySelector(".rollback > .main-controls__range > .range-value")
console.log(span)

let totalInput = document.getElementsByClassName("total-input")
for (let i = 0; i < totalInput.length; i++) {
    console.log(totalInput[i])
}

let screen = document.querySelectorAll(".screen")
for (let i = 0; i < screen.length; i++) {
    console.log(screen[i])
}

// const appData = {
//     title: "",
//     screens: [],
//     screenPrice: 0,
//     adaptive: true,
//     rollback: 10,
//     allServicePrices: 0,
//     fullPrice: 0,
//     servicePercentPrice: 0,
//     services: {},
//     rollbackMessage: "",
//     name: "",
//
//
//     start: function () {
//         appData.asking();
//         appData.addPrices();
//         appData.getFullPrice();
//         appData.getServicePercentPrice();
//         appData.getTitle();
//
//         appData.logger();
//     },
//     isNumber: function (num) {
//         return !isNaN(parseFloat(num)) && isFinite(num)
//     },
//
//     isString: function (str) {
//         return isNaN(parseFloat(str))
//     },
//     asking: function () {
//         do {
//             appData.title = prompt("Как называется ваш проект?");
//         } while (!appData.isString(appData.title))
//
//
//         for (let i = 0; i < 2; i++) {
//             do {
//                 name = prompt("Какие типы экранов нужно разработать?", "Сложные");
//             } while (!appData.isString(name))
//
//             let price = 0;
//
//             do {
//                 price = +prompt("Сколько будет стоить данная работа?");
//             } while (!appData.isNumber(price))
//
//             appData.screens.push({id: i, name: name, price: price})
//         }
//
//         for (let i = 0; i < 2; i++) {
//             do {
//                 name = prompt("Какой дополнительный тип услуги нужен?", "Вёрстка")
//             } while (!appData.isString(name))
//             let price = 0;
//
//             do {
//                 price = prompt("Сколько это будет стоить")
//             } while (!appData.isNumber(price))
//
//             appData.services[name] = +price
//         }
//
//         appData.adaptive = confirm("Нужен ли адаптив на сайте?");
//
//     },
//     addPrices: function () {
//         for (let screen of appData.screens) {
//             appData.screenPrice += +screen.price
//         }
//
//         for (let key in appData.services) {
//             appData.allServicePrices += appData.services[key]
//         }
//     },
//     getFullPrice: function () {
//         appData.fullPrice = +appData.screenPrice + appData.allServicePrices;
//     },
//     getServicePercentPrice: function () {
//         appData.servicePercentPrice = appData.fullPrice - (appData.fullPrice * (appData.rollback / 100))
//     },
//     getTitle: function () {
//         appData.title = appData.title.trim()[0].toUpperCase() + appData.title.trim().substr(1).toLowerCase();
//     },
//
//     getRollbackMessage: function () {
//         if (appData.fullPrice >= 30000) {
//             return "Даем скидку в 10%"
//         } else if (appData.fullPrice >= 15000 && appData.fullPrice < 30000) {
//             return "Даем скидку в 5%"
//         } else if (appData.fullPrice < 15000 && appData.fullPrice >= 0) {
//             return "Скидка не предусмотрена"
//         } else {
//             return "Что то пошло не так"
//         }
//     },
//
//     logger: function () {
//         console.log(appData.fullPrice);
//         console.log(appData.servicePercentPrice)
//         console.log(appData.screens)
//     }
// }
//
// appData.start();

