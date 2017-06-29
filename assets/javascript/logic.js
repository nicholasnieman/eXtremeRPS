var computerChoices = ["r", "p", "s"];
var wins = 0;
var losses = 0;
var ties = 0;

document.onkeyup = function(event) {
    var userGuess = event.key.toLowerCase();
    var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
    if ((userGuess === "r") || (userGuess === "p") || (userGuess === "s")) {
        if (userGuess === computerGuess) {
            ties++;
        } else if (((userGuess === "s") && (computerGuess === "p")) ||
            ((userGuess === "p") && (computerGuess === "r")) ||
            ((userGuess === "r") && (computerGuess === "s"))) {
            wins++;
        } else if (((userGuess === "r") && (computerGuess === "p")) ||
            ((userGuess === "s") && (computerGuess === "r")) ||
            ((userGuess === "p") && (computerGuess === "s"))) {
            losses++;
        }
    } else {
        alert("Please select r,p, or, s to play!");
    }
    var html = "<p>Press r, p or s to start playing!</p>" +
        "<p>wins: " + wins + "</p>" +
        "<p>losses: " + losses + "</p>" +
        "<p>ties: " + ties + "</p>" +
        "<p>your choice: " + userGuess + "</p>" +
        "<p>computer choice: " + computerGuess + "</p>";
    document.querySelector("#game").innerHTML = html;
};
