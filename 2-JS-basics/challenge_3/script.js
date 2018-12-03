/**
 * <50 tip 20%
 * 50 to 200 tip 15%
 * >200 tip 10%
 */

 function tipCalculator(expense) {
    var tipPercentage;

    if(expense < 50) {
        tipPercentage = 0.2;
    } else if(expense >= 50 && expense < 200) {
        tipPercentage = 0.15;
    } else {
        tipPercentage = 0.1;
    }

    return expense * tipPercentage;
}

var tips = new Array(3);
var finalExpenses = new Array(3);
for (var i = 0; i < 3; i++) {
    var bill = parseInt(prompt("Please input the bill amount : "));
    tips[i] = tipCalculator(bill);
    finalExpenses[i] = bill + tips[i];
}

alert("Result : \n" + tips + "\n" + finalExpenses);