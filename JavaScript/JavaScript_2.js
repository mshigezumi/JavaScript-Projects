function validateForm() {
    var Alfa = document.forms["myForm"]["fname"].value;
    var Bravo = document.forms["myForm"]["lname"].value;
    if (Alfa == "" || Bravo == "") {
        alert("First and last name must be filled out");
        return false;
    }
}