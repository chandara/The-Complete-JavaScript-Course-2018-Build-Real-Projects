var johnMass = 10;
var jonhHeight = 1.7;

var markMass = 12;
var markHeight = 1.8;

var johnBMI = johnMass / (jonhHeight * jonhHeight);
var markBMI = markMass / (markHeight * markHeight);

var isMarkMassHigherThanJonh = markBMI > johnBMI;

console.log('Is Mark\'s BMI higher than John\'s? ' + isMarkMassHigherThanJonh);