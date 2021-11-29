var guess = document.getElementById("submitGuess")
var output = document.getElementById("output")
var message;
var number = Math.floor(Math.random() * 100)
 function submit() {

    
    var input = document.getElementById('guess').value;

    if (input == number){

        message = "C'est raté !!!" 

    } else if (input > number ) {

        message= "Essayer un petit nombre !"

    } else if (input < number ) {
        
        message= "Essayer un grand nombre !"
    }
    output.innerHTML = message
}
