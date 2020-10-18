function dic() { // Creating function
    var Array = {
        Alpha:"A",
        Bravo:"B",
        Charlie:"C",
        Delta:"D"
    }; // Setting variable and KVPs
    delete Alpha.Charlie; // Deleting Charlie
    document.getElementById("Dictionary").innerHTML = Array.Charlie; // Printing Array.Charlie to the element with the ID "Dictionary"
}

document.write(typeof "hi");