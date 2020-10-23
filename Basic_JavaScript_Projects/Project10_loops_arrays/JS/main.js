function callLoop() {
    var count = 0;
    while (count < 10) { // Keep counting till count gets to 10
        count++; // Iterating once per loop
    }
    document.getElementById("loop").innerHTML = count;
}

function stringLength() {
    var Alpha = "This is a string";
    var Bravo = Alpha.length; // Getting length of Alpha
    document.getElementById("stringLength").innerHTML = Bravo;
}

function forLoop() {
    var PhoneticAlphabet = ["Alpha", "Bravo", "Charlie", "Delta", "Echo", "Foxtrot", "Golf", "Hotel", "India", "Juliett", "Kilo", "Lima", "Mike", "November", "Oscar", "Papa", "Quebec", "Romeo", "Sierra", "Tango", "Uniform", "Victor", "Whiskey", "Xray", "Yankee", "Zulu"];
    var Result = ""; // Empty container to be filled with String elements of the array for printing
    for (let index = 0; index < PhoneticAlphabet.length; index++) { // Count through the whole array
        Result += PhoneticAlphabet[index] + "<br>"; // Add the element and a line break to Result per each iteration of the loop
    }
    document.getElementById("alphabet").innerHTML = Result;
}

function array() {
    var array = []
    array[0] = "Alpha"
    array[1] = "Bravo"
    array[2] = "Charlie"
    array[3] = "Delta"
    document.getElementById("array").innerHTML = array[3]; // Printing the String int he index position 3 of the array
}

function constant() {
    const unit = {firstName:"Shamir", lastName:"Nevrand", class:"Sniper", level:13}; // Creating constant object with parameters
    unit.faction = "Church of Seiros";
    unit.weapon = "Bow"; // Adding parameters to the object
    unit.level = 15; // Changing parameter from the object
    document.getElementById("constant").innerHTML = unit.firstName + " is level " + unit.level + " and is currently a " + unit.class + " equipped with a " + unit.weapon;
}

function unit() {
    let unit = { // Creating a let object with parameters
        firstName:"Shamir",
        lastName:"Nevrand",
        class:"Sniper",
        level:15, 
        faction:"Church of Seiros",
        weapon:"Bow",
        description:function() { // Function to return a string with the parameters (called as a method)
            return this.firstName + " " + this.lastName + " is level " + this.level + " " + this.class + " equipped with a " + this.weapon + ", she is with the " + this.faction;
        }
    };
    document.getElementById("unit").innerHTML = unit.description(); // Calling .description() from the unit object
}