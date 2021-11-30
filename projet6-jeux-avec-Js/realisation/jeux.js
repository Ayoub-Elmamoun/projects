// DECLARATION DES VARIABLES 

var submitguess = document.getElementById("submitGuess")
var output = document.getElementById("output")
var display;
var attempts = 0;
var randomNumber = Math.floor(Math.random() * 100)

// TRAITEMENT  

 function submit() {
    var guess = document.getElementById('guess').value;

    attempts++;
    if (attempts < 10) {
    
        if (guess == randomNumber && attempts <= 2){

                display="Bravo, vous etes un Génie !!!"
                
         }
         else if (guess == randomNumber) {

                display = "Félicitations, vous avez gagné après " +attempts+ " tentatives";

            }

        else if (guess > randomNumber ) {
            display= "Essayer un petit nombre !"

        } 
        else  {
            display= "Essayer un grand nombre !"
        }

    } else {
         display="c'est raté"
     }

// AFFICHAGE

    output.innerHTML=display
}
