$(document).ready(function() {

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
       return  targetScore=(Math.floor(Math.random()*120+10));
    }
    console.log(randomTarget())
;


    function randomCrystals(){
        return (Math.ceil(Math.random()*12));
    }
    console.log(randomCrystals())


//function to start the game

    function gameStart(){
        bluecrystal=randomCrystals();
        greencrystal=randomCrystals();
        redcrystal=randomCrystals();
        blackcrystal=randomCrystals();
        targetScore=randomTarget();
        totalScore=0;
    }
    console.log(gameStart())
   
//determines what button is clicked
    $(".crystals").on("click",function(){
        alert("you clicked a crystal");

    })

//if else statements

// if (currentScore===targetScore){
//     wins++;
//     gameStart;
//     } else if {
//     (currentScore!==targetScore){
    

    
//     }else {
//     (currentScore>targetScore);
//     losses++;
//     gameStart;


})