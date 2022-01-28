    let title = "Типы данных, операторы, методы и свойства";
    let screens  = "Простые, Сложные, Интерактивные";
    let screenPrice = 1900;
    let rollback  = 88;
    let fullPrice = 100000000;
    let adaptive = true;

    console.log(title);
    console.log(fullPrice);
    console.log(adaptive);
    console.log(screens.length);
    console.log("Стоимость верстки экранов " + screenPrice + " руб."  + "\nСтоимость разработки сайта " + fullPrice + "$");
    console.log(screens.toLowerCase().split(" "));
    console.log(fullPrice * (rollback/100));