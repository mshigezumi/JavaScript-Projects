function Ride_Function() { // Creating function
    var Height, Can_ride; // Creating variables
    Height = document.getElementById("Height").value; // Setting Height basted on input from index.html
    Can_ride = (Height < 52) ? "You are too short":"You are tall enough"; // Ternary operation to decide if the input is large enough
    document.getElementById("Ride").innerHTML = Can_ride + " to ride."; // Printing result
}

function Vehicle(Make, Model, Year, Color) { // Creating constructor with 4 variables
    this.Vehicle_Make = Make;
    this.Vehicle_Model = Model;
    this.Vehicle_Year = Year;
    this.Vehicle_Color = Color;
}

var Jack = new Vehicle("Dodge", "Viper", 2020, "Red"); // Using constructor to make objects and setting the variables for each
var Emily = new Vehicle("Jeep", "Trail Hawk", 2019, "White and Black");
var Erik = new Vehicle("Ford", "Pinto", 1971, "Mustard");

function myFunction() {
    document.getElementById("Keywords_and_Constructors").innerHTML = "Erik drives a " + Erik.Vehicle_Color + "-colored " + Erik.Vehicle_Model + " manufactored in " + Erik.Vehicle_Year;
} // Printing the output of the Erik variable with his Vehicle class

function newFunction() {
    document.getElementById("New_and_This").innerHTML = "Emily drives a " + Emily.Vehicle_Color + "-colored " + Emily.Vehicle_Model + " manufactored in " + Emily.Vehicle_Year;
} // Printing the output of the Emily variable with her Vehicle class

function nestedFunction() { // Nested function
    document.getElementById("Nested_Function").innerHTML = count(Math.random() * 100); // Outputting the result from the inner function
    function count(amount) { // Inner function counting the amount specified, in this case random number from 0-100
        var num = 0; // Variable to hold the number
        for (let index = 0; index < amount; index++) { // for loop to count to the specified amount
            num++ // Incrementing for every loop
        }
        return num; // Returning the result
    }
}