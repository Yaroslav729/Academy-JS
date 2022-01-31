   "use strict"

    let title = prompt("Как называется ваш проект?");

    let screens = prompt("Какие типы экранов нужно разработать?");

    let screenPrice = parseInt(prompt("Сколько будет стоить данная работа?"));

    let adaptive = confirm("Нужен ли адаптив на сайте?");

    let service1 = prompt("Какой дополнительный тип услуги нужен? service1");

    let service2 = prompt("Какой дополнительный тип услуги нужен? service2");

    let servicePrice1 = parseInt(prompt("Какой дополнительный тип услуги нужен? servicePrice1"));

    let servicePrice2 = parseInt(prompt("Какой дополнительный тип услуги нужен? servicePrice2"));

    let fullPrice = screenPrice + servicePrice1 + servicePrice2;

    let servicePercent = fullPrice / 13;

    let servicePercentPrice = fullPrice - servicePercent;

    console.log(Math.ceil(servicePercentPrice));

    if (fullPrice >= 30000) {
        console.log("Даем скидку в 10%")
    } else if (fullPrice >= 15000 && fullPrice <= 30000) {
        console.log("Даем скидку в 5%")
    } else if (fullPrice <= 15000 && fullPrice >= 0) {
        console.log("Скидка не предусмотрена")
    } else {
        console.log("Что то пошло не так")
    }