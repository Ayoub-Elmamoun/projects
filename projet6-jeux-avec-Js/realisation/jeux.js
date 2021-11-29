var submit = document.getElementById("submitGuess")
var output = document.getElementById("output")
var message;
var guess = 3;
var number = Math.floor(Math.random() * 100)
 function submit() {

    
    var input = document.getElementById('submit').value;

    if (input == number){

        message = "Félicitations, vous avez gagné après " + guess + "tentatives";

    } else if (input > number ) {
        guess++;
        message= "Essayer un petit nombre !"

    } else if (input < number ) {
        guess++;
        message= "Essayer un grand nombre !"

    }

    
    if (guess) {
        message="C'est raté !!"
    }
    output.innerHTML = message
}
