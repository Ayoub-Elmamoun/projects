var guess = document.getElementById("submitGuess")
var output = document.getElementById("output")
var tentatives = 10;
var message;
var number = Math.floor(Math.random() * 100)
 function submit() {

    tentatives--;
    if (tentatives > 0) {
    var input = document.getElementById('guess').value;

    if (input == number){
        if (tentatives >= 8) {
            message="Bravo, vous etes un Génie !!!"
        }else {
            message = "Félicitations, vous avez gagné après " +(10-tentatives)+ " tentatives";
        }
    } 
    
    else if (input > number ) {
        message= "Essayer un petit nombre !"

    } 

    else  {
        message= "Essayer un grand nombre !"
    }
    } else {
         message="c'est raté"
     }
    output.innerHTML=message
}
