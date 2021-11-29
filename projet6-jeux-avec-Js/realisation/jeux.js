var guess = document.getElementById("submitGuess")
var output = document.getElementById("output")
var max=100
var message;
var number = Math.floor(Math.random() * 100)
 function submit() {

    
    var input = document.getElementById('guess').value;

    if (input == number){

        message = "Bravo !! il est " + number;

    } else if (input > number ) {

        message= "Essayer un petit nombre !"

    } else if (input < number ) {
        
        message= "Essayer un grand nombre !"
    } else if (input > max) {
        message="out of range bro !"
    }
    output.innerHTML = message
}
