//Variables Here!
//====================================================================
var crystalObj = {
    red: {
        value: 0
    },
    blue: {
        value: 0
    },
    yellow: {
        value: 0
    },
    green: {
        value: 0
    }
};

//Initialize Score and Counter to 0.
var currentScore = 0;
var targetScore = 0;
var winCounter = 0;
var lossCounter = 0;

//Functions Here!
//====================================================================

//Randomly generate a minimum and maximum value for score and crystals.
var randomValue = function(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

var startGame = function() {
    currentScore = 0;

    //Generate random value to Target Score.
    targetScore = randomValue(19, 120);

    //Generate random value to crystals.
    crystalObj.red.value = randomValue(1, 12);
    crystalObj.blue.value = randomValue(1, 12);
    crystalObj.yellow.value = randomValue(1, 12);
    crystalObj.green.value = randomValue(1, 12);

    //Overwrite HTML with updated scores.
    $("#targetScore").html(targetScore);
    $("#yourScore").html(currentScore);

    //console.log("=================================")
    //console.log("Target Score: " + targetScore);
    //console.log("Red Crystal Value: " + crystalObj.red.value);
    //console.log("Blue Crystal Value: " + crystalObj.blue.value);
    //console.log("Yellow Crystal Value: " + crystalObj.yellow.value);
    //console.log("Green Crystal Value: " + crystalObj.green.value);
    //console.log("=================================")
}

//Add value of crystals to current score.
var addValues = function(crystalObj) {
    currentScore = currentScore + crystalObj.value;
    $("#yourScore").html(currentScore);
    checkScore();
    //console.log("Current Score: " + currentScore);
}

//Check to see if win conditions are met using for loop and if/else statements.
var checkScore = function() {
    if (currentScore > targetScore) {
        alert("You lost! Better luck next time!");
        lossCounter ++;
        $("#losses").html(lossCounter);
        startGame();
    }
    else if (currentScore == targetScore) {
        alert("You won! DING, DING, DING!");
        winCounter ++;
        $("#wins").html(winCounter);
        startGame();
    }
}

//Start Main Here!
//====================================================================

//Run game.
startGame();

//Clicking buttons add generated values to score.
$("#red").click(function () {
    addValues(crystalObj.red);
});
$("#blue").click(function () {
    addValues(crystalObj.blue);
});
$("#yellow").click(function () {
    addValues(crystalObj.yellow);
});
$("#green").click(function () {
    addValues(crystalObj.green);
});