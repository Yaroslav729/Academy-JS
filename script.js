    "use strict"

    let title = prompt("Как называется ваш проект?").trim();

    let screens = prompt("Какие типы экранов нужно разработать?");

    let screenPrice = parseInt(prompt("Сколько будет стоить данная работа?"));

    let adaptive = confirm("Нужен ли адаптив на сайте?");

    let service1 = prompt("Какой дополнительный тип услуги нужен? service1");

    let servicePrice1 = parseInt(prompt("Сколько это будет стоить"));

    let service2 = prompt("Какой дополнительный тип услуги нужен?");

    let servicePrice2 = parseInt(prompt("Сколько это будет стоить"));

    let fullPrice;

    let servicePercent;

    // Задание №1

    const allServicePrices = function getAllServicePrices() {
        return servicePrice1 + servicePrice2
    }

    // Задание №2

    fullPrice = getFullPrice();

    function getFullPrice() {
        return screenPrice + allServicePrices();
    }

    // Задание №3

    function getTitle() {
        return title[0].toUpperCase() + title.toLowerCase().slice(1);
    }

    // Задание №4

    const servicePercentPrice = function getServicePercentPrices() {
        servicePercent = fullPrice / 100 * 13;
        return getFullPrice() - servicePercent
    }

    let showTypeOf = function (variable) {
    console.log(variable);
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

    console.log(screens.split(' '))
    showTypeOf(getRollbackMessage())
    showTypeOf(servicePercentPrice())
