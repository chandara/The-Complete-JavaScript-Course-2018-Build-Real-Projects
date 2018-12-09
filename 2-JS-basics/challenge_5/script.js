/**
 * <100 tip 20%
 * 100 to 300 tip 10%
 * >300 tip 25%
 */
function johnTipCalculator(expense) {
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

function markTipCalculator(expense) {
    var tipPercentage;

    if(expense < 100) {
        tipPercentage = 0.2;
    } else if(expense >= 100 && expense <= 300) {
        tipPercentage = 0.1;
    } else {
        tipPercentage = 0.25;
    }

    return expense * tipPercentage;
}

function calculateAverageOfTips(tips) {
    var totalTip = 0;

    for(var i = 0; i < tips.length; i++) {
        totalTip += tips[i];
    }

    return totalTip/tips.length;
}

var johnTips = new Array(4);
var markTips = new Array(4);

for (var i = 0; i < 4; i++) {
    var bill = parseInt(prompt("Please input the bill amount : "));
    johnTips[i] = johnTipCalculator(bill);
    markTips[i] = markTipCalculator(bill);
}
var avgJohn = calculateAverageOfTips(johnTips);
var avgMark = calculateAverageOfTips(markTips);

if(avgJohn == avgMark) {
    alert("John and Mark paid the same tip in average : " + avgJohn);
} else if(avgJohn > avgMark) {
    alert("John paid the highest tip compare to Mark : " + avgJohn);
} else {
    alert("Mark paid the highest tip compare to John : " + avgMark);
}