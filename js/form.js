{

    let formElement = document.querySelector(".js-form");
    let selectElement = document.querySelector(".js-select");
    let resultElement = document.querySelector(".js-result");
    let valueElement = document.querySelector(".js-value");

    formElement.addEventListener("input", (event) => {
        event.preventDefault();

        const currency = selectElement.value;
        const amount = valueElement.value;

        const calculatResult = (amount, currency) => {
            const ratedolarAmerykański = 0.23;
            const ratedolarNowozelandzki = 0.36;
            const ratedolarKanadyjski = 0.31;
            const ratelej = 1.04;
            

            switch (currency) {

                case "dolarAmerykański":
                    return amount * ratedolarAmerykański;

                case "dolarNowozelandzki":
                    return amount * ratedolarNowozelandzki;

                case "dolarKanadyjski":
                    return amount * ratedolarKanadyjski;

                case "lej":
                    return amount * ratelej;
            } 
        }

        const result = calculatResult(amount, currency);

        resultElement.innerText = `${result.toFixed(2)}`;
    });
    
}



