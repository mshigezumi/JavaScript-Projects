function add() { // Creating function
    var Alpha = 11000; // Setting variable
    Alpha += 37; // Addition
    document.getElementById("add").innerHTML = Alpha; // Printing Alpha to the element with the ID "add"
}

function sub() { // Creating function
    var Bravo = 9001; //Setting variable
    Bravo -= 1; // Subtraction
    document.getElementById("sub").innerHTML = "It's over " + Bravo + "!"; // Printing Bravo to the element with the ID "sub"
}

function mul() { // Creating function
    var Charlie = 11; // Setting variable
    Charlie *= 6; // Multiplication
    document.getElementById("mul").innerHTML = "Execute Order " + Charlie; // Printing Charlie to the element with the ID "mul"
}

function div() { // Creating function
    var Delta = 267; // Setting variable
    Delta /= 3; // Division
    document.getElementById("div").innerHTML = "Inmate #" + Delta; // Printing Delta to the element with the ID "div"
}

function mod() { // Creating function
    var Echo = 14 % 5; // Setting variable and preforming modulo
    document.getElementById("mod").innerHTML = "Sector " + Echo; // Printing Echo to the element with the ID "mod"
}

function neg() { // Creating function
    var Foxtrot = 40; // Setting variable
    document.getElementById("neg").innerHTML = -Foxtrot + "&ordm;"; // Printing negative Foxtrot to the element with the ID "neg"
}

function inc() { // Creating function
    var Golf = 116; // Setting variable
    Golf++; // Increment
    document.getElementById("inc").innerHTML = "John-" + Golf; // Printing Golf to the element with the ID "inc"
}

function dec() { // Creating function
    var Hotel = 202; // Setting variable
    Hotel--; // Decrement
    document.getElementById("dec").innerHTML = "BK-" + Hotel; // Printing Hotel to the element with the ID "dec"
}

function ran() { // Creating function
    var India = Math.random() * 365; // Setting variable to random number 0-365
    document.getElementById("ran").innerHTML = "Days till the end of the world: " + India; // Printing India to the element with the ID "ran"
}