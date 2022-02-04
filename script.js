"use strict"

let title;
let screens;
let screenPrice;
let adaptive;

let rollback;
let allServicePrices;
let fullPrice;
let servicePercentPrice;
let service1;
let service2;

const isNumber = function (num) {
    return !isNaN(parseFloat(num)) && isFinite(num)
}

const asking = function () {
    title = prompt("Как называется ваш проект?", "glo");

    screens = prompt("Какие типы экранов нужно разработать?", "Сложные");

    do {
        screenPrice = +prompt("Сколько будет стоить данная работа?");
    } while (!isNumber(screenPrice))

    adaptive = confirm("Нужен ли адаптив на сайте?");

}

const getAllServicePrices = function () {
    let sum = 0
    let price;

    for (let i = 0; i < 2; i++) {
        if (i === 0) {
            service1 = prompt("Какой дополнительный тип услуги нужен?", "Вёрстка")
        } else if (i === 1) {
            service2 = prompt("Какой дополнительный тип услуги нужен?", "Модальное окно")
        }
        do {
            price = +prompt("Сколько это будет стоить")
        } while (!isNumber(price))

        sum += price
    }


    return sum

}

let showTypeOf = function (variable) {
    console.log(variable);
}

const getFullPrice = function () {
    return screenPrice + allServicePrices;
}

const getTitle = function () {
    return title.trim()[0].toUpperCase() + title.trim().substr(1).toLowerCase();
}


const getServicePercentPrice = function () {
    return fullPrice - (fullPrice * (rollback / 100))
}

const getRollbackMessage = function (price) {
    if (fullPrice >= 30000) {
        return "Даем скидку в 10%"
    } else if (fullPrice >= 15000 && fullPrice <= 30000) {
        return "Даем скидку в 5%"
    } else if (fullPrice <= 15000 && fullPrice >= 0) {
        return "Скидка не предусмотрена"
    } else {
        return "Что то пошло не так"
    }
}

asking()

allServicePrices = getAllServicePrices();
fullPrice = getFullPrice();
servicePercentPrice = getServicePercentPrice()
title = getTitle()

showTypeOf(title)
console.log(screens.split(' '))
showTypeOf(getFullPrice())
showTypeOf(getRollbackMessage())