var bluecrystal=0;
var greencrystal=0;
var redcrystal=0;
var blackcrystal=0;
var targetScore=0;
var wins=0;
var losses=0;
var totalScore=0;

//function generates a random for targetScore #
function randomTarget(){
    targetScore=(Math.floor(Math.random()*111+10));
    return targetScore;
}
//console.log(randomTarget());

function randomCrystals(){
    var randomCrystals=(Math.floor(Math.random()*12)+1);
    return randomCrystals;
}
//console.log(randomCrystals())

//function to start the game

function gameStart(){
    bluecrystal = randomCrystals();
    greencrystal = randomCrystals();
    redcrystal = randomCrystals();
    blackcrystal = randomCrystals();
    targetScore = randomTarget();
    totalScore = 0;
}

function gameCheck(){
    $("#target").html(targetScore);
    $("#currentScore").html(totalScore);

    //if else statements

    if (totalScore===targetScore){
        wins++;
        gameStart();
    
    }else if (totalScore>targetScore){

        losses++;
        gameStart();
    }
    $("#wins").html(wins);
    $("#losses").html(losses);
}
gameStart();

$(document).ready(function() {


//determines what button is clicked
    $("#blackcrystal").on("click",function(){
        totalScore+=blackcrystal;
        gameCheck();
    });
    $("#redcrystal").on("click",function(){
        totalScore+=redcrystal;
            gameCheck();
    });
    $("#bluecrystal").on("click",function(){
        totalScore+=bluecrystal;
            gameCheck();
});
    $("#greencrystal").on("click",function(){
        totalScore+=greencrystal;
            gameCheck();
});
    
        //sends click info to apporpriate spots
        gameCheck();
});
