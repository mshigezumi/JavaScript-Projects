var Alpha = "A"; // Setting global variable

function test() {
    var Bravo = "B"; // Setting local variable
    return Bravo;
}

function test2() {
    console.log(Bravo); // Shows in the log that the variable is undefined
    return Bravo;
}

document.write(test2()); // Doesn't print anything because there is no Bravo variable for test2() to use

function Time() { // A function to tell the user if it's before 1900 (7pm)
    if (new Date().getHours() < 19) { // if statment comparing the current time and 19 (24 hour clock)
        document.getElementById("Time_check").innerHTML = "It is before 1900 (7pm).";
    }
}

function Age_Function() { // A function to determine if you're old enough to be considered an adult in Japan
    var Age = document.getElementById("Age").value; // Setting variable with the value input in index.html
    if (Age >= 20) { // if, else statment comparing the input with the legal adult age in Japan, 20
        var Answer = "You are old enough to be an adult in Japan!";
    } else {
        var Answer = "You are not old enough to be an adult in Japan!";
    }
    document.getElementById("How_old_are_you?").innerHTML = Answer; // Printing result
}

function Roll_1d3() { // A function to simulate rolling a 3 sided die (used in some tabletop games)
    var Result = Math.random() * 3; // Setting variable to random number between 0 and 3
    var Reply;
    if (Result <= 1) { // if, else if, else statment comparing the random number to determine a roll of 1, 2, or 3
        Reply = "You rolled a 1!";
    } else if (Result <= 2) {
        Reply = "You rolled a 2!";
    } else {
        Reply = "You rolled a 3!";
    }
    document.getElementById("Roll_1d3").innerHTML = Reply; // Printing result
    console.log(Result); // To show in the console that it's working
} // Not the most efficent way to implement this, but it works