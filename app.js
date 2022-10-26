// "formEuroToDollar"
const fromEuroToDollar = function(valueInEuro){
    // convertimos el valor a dolares
    let valueInDollar = valueInEuro * 1.2;
    return valueInDollar;
}
console.log(fromEuroToDollar(1))
const fromDollarToYen = function(valueInDollar){
    let valueInYen = valueInDollar * 127.9

    return valueInYen
}
console.log(fromDollarToYen(1))

const fromYenToPound = function(valueInYen){
    let valueInPound = valueInYen * 0.8
    return valueInPound
}
console.log(1)
const sum = (a,b) => {
    return a + b
}

module.exports = { sum };

let oneEuroIs = {
    "JPY": 127.9, // yen
    "USD": 1.2, //  dollar
    "GBP": 0.8, // british pound
}
module.exports = { sum, fromEuroToDollar, fromYenToPound, fromDollarToYen }