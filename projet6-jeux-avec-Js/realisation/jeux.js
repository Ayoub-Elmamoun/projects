// DECLARATION DES VARIABLES 

var submitguess = document.getElementById("submitGuess")
var output = document.getElementById("output")
var attemptNum = document.getElementById("attemptNum")
var display;
var attemptRes = 10;
var randomNumber = Math.floor(Math.random() * 100)

// TRAITEMENT  

 function submit() {
    var guess = document.getElementById('guess').value;

    attemptRes--;
    if (attemptRes > 0) {
        attemptNum.innerHTML= "Tentatives : "+attemptRes
        if (guess == randomNumber && attemptRes >= 8){

                display="Bravo, vous etes un Génie !!!"
                
         }
         else if (guess == randomNumber) {

                display = "Félicitations, vous avez gagné après " +(10 - attemptRes)+ " tentatives";

            }

        else if (guess > randomNumber ) {
            display= "Essayer un petit nombre !"

        } 
        else  {
            display= "Essayer un grand nombre !"
        }

    } else {
         display="c'est raté"
         attemptNum.innerHTML=""
     }

// AFFICHAGE

    output.innerHTML=display
}
