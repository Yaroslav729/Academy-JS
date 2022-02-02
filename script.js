"use strict"

let title;

let screens;

let screenPrice;

let adaptive;

let service1;

let service2;

let fullPrice;

let servicePercent;

let allServicePrices;

let rollback = 10;

const isNumber = function (num) {
    return !isNumber(parseFloat(num)) && isFinite(num)
}

const asking = function () {
    title = prompt("Как называется ваш проект?");

    screens = prompt("Какие типы экранов нужно разработать?");

    screenPrice = parseInt(prompt("Сколько будет стоить данная работа?"));

    while (!isNumber(screenPrice)) {
        screenPrice = parseInt(prompt("Сколько будет стоить данная работа?"));
    }
    adaptive = confirm("Нужен ли адаптив на сайте?");
}

const getAllServicePrices = function () {
    let sum = 0
    for (let i = 0; i < 2; i++) {
        if (i === 0) {
            service1 = prompt("Какой дополнительный тип услуги нужен?")
        } else if (i === 1) {
            service2 = prompt("Какой дополнительный тип услуги нужен?")
        }

        sum += parseInt(prompt("Сколько это будет стоить"))

    }

    return sum

}

let showTypeOf = function (variable) {
    console.log(variable,typeof variable);
}

// Задание №2

const  getFullPrice = function() {
    return screenPrice + allServicePrices;
}

// Задание №3

const getTitle = function() {
    return title.trim()[0].toUpperCase() + title.trim().substr(1).toLowerCase();
}

// Задание №4

const getServicePercentPrices = function () {
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
allServicePrices = getAllServicePrices();
fullPrice = getFullPrice();
ServicePercentPrices = getServicePercentPrices();
title = getTitle();

showTypeOf(title)
showTypeOf(screenPrice)
showTypeOf(adaptive)

console.log(getRollbackMessage(fullPrice));
console.log(typeof title);
console.log(typeof screenPrice)
console.log()
console.log()
console.log()
console.log()

const isNumber = function(num) {
    return !isNumber(parseFloat(num)) && isFinite(num)
}

const asking = function() {
    title = prompt("Как называется ваш проект?");

    screens = prompt("Какие типы экранов нужно разработать?");

    screenPrice = parseInt(prompt("Сколько будет стоить данная работа?"));

    while (!isNumber(screenPrice)) {
        screenPrice = parseInt(prompt("Сколько будет стоить данная работа?"));
    }
    adaptive = confirm("Нужен ли адаптив на сайте?");
}

const getAllServicePrices = function() {
    let sum = 0
    for (let i = 0; i < 2; i++) {
        if (i === 0) {
            service1 = prompt("Какой дополнительный тип услуги нужен?")
        } else if (i === 1) {
            service2 = prompt("Какой дополнительный тип услуги нужен?")
        }

        sum += parseInt(prompt("Сколько это будет стоить"))

    }

    return sum

}