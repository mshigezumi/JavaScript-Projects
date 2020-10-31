function getReceipt() { // This function displays the order and passes the running total and text on to the next function
    var text1 = "<h3>You Ordered:</h3>";
    var runningTotal = 0; // Adds up the total costs as it goes through the program
    var sizeTotal = 0;
    var sizeArray = document.getElementsByClassName("size");
    for (let i = 0; i < sizeArray.length; i++) {
        if (sizeArray[i].checked) { // Find the checked size, and add that size to the text output
            var selectedSize = sizeArray[i].value;
            text1 = text1 + selectedSize + "<br>";
        }
    }
    if (selectedSize === "Personal Pizza") { // Change base price based on pizza size
        sizeTotal = 6;
    } else if (selectedSize === "Small Pizza") {
        sizeTotal = 8;
    } else if (selectedSize === "Medium Pizza") {
        sizeTotal = 10;
    } else if (selectedSize === "Large Pizza") {
        sizeTotal = 14;
    } else if (selectedSize === "Extra Large Pizza") {
        sizeTotal = 16;
    }
    runningTotal = sizeTotal;
    console.log(selectedSize + " = $" + sizeTotal + ".00");
    console.log("size text1: " + text1);
    console.log("subtotal: $" + runningTotal + ".00");
    getTopping(runningTotal,text1); // Pass the running total and output text to the next function
};

function getTopping(runningTotal,text1) { // Adds the list and cost of the toppings to the text and running total
    var toppingTotal = 0;
    var selectedTopping = [];
    var toppingArray = document.getElementsByClassName("toppings");
    for (let j = 0; j < toppingArray.length; j++) {
        if (toppingArray[j].checked) { // Add the chekced toppings to the array and to the output text
            selectedTopping.push(toppingArray[j].value);
            console.log("selected topping item: (" + toppingArray[j].value + ")");
            text1 = text1 + toppingArray[j].value + "<br>";
        }
    }
    var toppingCount = selectedTopping.length;
    if (toppingCount > 1) { // One free topping, each one after adds $1 to the total
        toppingTotal = (toppingCount - 1);
    } else {
        toppingTotal = 0;
    }
    runningTotal = (runningTotal + toppingTotal); // Full cost is piza size + # of toppings - 1 (min 0)
    console.log("total selected topping items: " + toppingCount);
    console.log(toppingCount + " topping - 1 free topping = " + "$" + toppingTotal + ".00");
    console.log("topping text1: " + text1);
    console.log("Purchase Total: " + "$" + runningTotal + ".00");
    document.getElementById("showText").innerHTML = text1;
    document.getElementById("totalPrice").innerHTML = "<h3>Total: <strong>$" + runningTotal + ".00" + "</strong></h3>";
}