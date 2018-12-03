var people = [];
for(var i = 0;i < 3; i++) {
    var name = prompt("Please input full name : ");
    var mass = parseFloat(prompt("Please input mass : "));
    var height = parseFloat(prompt("Please input height : "));

    var person = {
        fullName: name,
        mass: mass,
        height: height,
        calculateBMI: function() {
            this.bmi = this.mass / (this.height * this.height);  
            return this.bmi;  
        }
    }
    
    person.calculateBMI();
    people[i] = person;
}

var highestMassPerson = people[0];

for(var i=1;i<people.length;i++) {
    if(highestMassPerson.bmi < people[i].bmi) {
        highestMassPerson = people[i];
    }
}

alert(highestMassPerson.fullName + " has the highest BMI : " + highestMassPerson.bmi);