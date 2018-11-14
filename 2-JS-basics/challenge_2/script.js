var sameScore = false;
var winnerAvgScore = 0;
var winnerTeam;

do {
    var teamName = prompt("Input your team name:");
    
    var score = 0;
    for(var i=0;i<3;i++) {
        var inputScore = prompt("Score " + (i + 1) + ' : ');
        score += parseInt(inputScore);
    }
    var averageScore = score / 3;

    if(winnerAvgScore == parseFloat(averageScore)) {
        winnerTeam += ', ' + teamName;
        sameScore = true;
    } else if(winnerAvgScore < parseFloat(averageScore)) {
        winnerAvgScore = averageScore;
        winnerTeam = teamName;
        sameScore = false;
    }
} while(prompt('Do you want to add extra team? (yes/no)') == 'yes');

if(sameScore) {
    alert('Winner teams are ' + winnerTeam + ' with average score of ' + winnerAvgScore);
} else {
    alert('The winner team is : ' + winnerTeam + ' with average score of ' + winnerAvgScore);
}