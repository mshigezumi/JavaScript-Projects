function Concatenate() { // Creating function
    var Alpha = "This is ", Bravo = "all part ", Charlie = "of one sentence."; // Setting variables
    var Delta = Alpha.concat(Bravo, Charlie); // Concatenating the strings together
    document.getElementById("Concatenate").innerHTML = Delta; // Printing the result to ID
}

function Slice() {
    var Alpha = "Stuff and things!";
    var Bravo = Alpha.slice(0,1); // Slicing the string, getting the values between spaces 0 and 1
    document.getElementById("Slice").innerHTML = Bravo;
}

function Upper() {
    var Alpha = "Stuff and things!";
    var Bravo = Alpha.toUpperCase(); // Converting the string to upper case
    document.getElementById("Upper").innerHTML = Bravo;
}

function Search() {
    var Alpha = "Stuff and things!";
    var Bravo = Alpha.search("!"); // Serching the string for the location of the input
    document.getElementById("Search").innerHTML = Bravo;
}

function numToString() {
    var Alpha = 115;
    var Bravo = Alpha.toString(); // Converting the number to a string
    document.getElementById("String").innerHTML = Bravo;
}

function Precision() {
    var Alpha = 3.14159265359;
    var Bravo = Alpha.toPrecision(5); // Rounding the number to 5 digits total
    document.getElementById("Precision").innerHTML = Bravo;
}

function Fixed() {
    var Alpha = 3.14159265359;
    var Bravo = Alpha.toFixed(5); // Rounding the number to 5 decimal places total 
    document.getElementById("Fixed").innerHTML = Bravo;
}

function ValueOf() {
    var Alpha = "This is a string";
    var Bravo = Alpha.valueOf(); // Converting the string to a primitive value
    document.getElementById("ValueOf").innerHTML = Bravo;
}