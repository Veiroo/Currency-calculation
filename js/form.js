let formElement = document.querySelector(".js-form");
let selectElement = document.querySelector(".js-select");
let resultElement = document.querySelector(".js-result");
let option3Element = document.querySelector(".js-select__option");
let option4Element = document.querySelector(".js-select__option1");
let option5Element = document.querySelector(".js-select__option2");
let option6Element = document.querySelector(".js-select__option3");
let option7Element = document.querySelector(".js-select__option4");
let valueElement = document.querySelector(".js-value");

formElement.addEventListener("input", (event) => {
    event.preventDefault();

    let currency = selectElement.value;
    let amount = valueElement.value;

    let rate;

    switch (currency) {
        case "dolarAmerykański":
            rate = 0.23;
            break;
        case "dolarNowozelandzki":
            rate = 0.36
            break;
        case "dolarKanadyjski":
            rate = 0.31
            break;
        case "lej":
            rate = 1.04
            break;
    }

    let resultt = amount * rate;

    resultElement.innerText = resultt.toFixed(2);
});



