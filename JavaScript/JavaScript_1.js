function phoneticAlphabet() {
    var result;
    var input = document.getElementById("input").value.toUpperCase();
    switch (input) {
        case "A":
            result = "Alfa (AL-FAH)";
            break;
        case "B":
            result = "Bravo (BRAH-VOH)";
            break;
        case "C":
            result = "Charlie (CHAR-LEE)";
            break;
        case "D":
            result = "Delta (DELL-TAH)";
            break;
        case "E":
            result = "Echo (ECK-OH)";
            break;
        case "F":
            result = "Foxtrot (FOKS-TROT)";
            break;
        case "G":
            result = "Golf (GOLF)";
            break;
        case "H":
            result = "Hotel (HOH-TEL)";
            break;
        case "I":
            result = "India (IN-DEE-AH)";
            break;
        case "J":
            result = "Juliett (JEW-LEE-ETT)";
            break;
        case "K":
            result = "Kilo (KEY-LOH)";
            break;
        case "L":
            result = "Lima (LEE-MAH)";
            break;
        case "M":
            result = "Mike (MIKE)";
            break;
        case "N":
            result = "November (NO-VEM-BER)";
            break;
        case "O":
            result = "Oscar (OSS-CAH)";
            break;
        case "P":
            result = "Papa (PAH-PAH)";
            break;
        case "Q":
            result = "Quebec (KEH-BECK)";
            break;
        case "R":
            result = "Romeo (ROW-ME-OH)";
            break;
        case "S":
            result = "Sierra (SEE-AIR-RAH)";
            break;
        case "T":
            result = "Tango (TANG-GO)";
            break;
        case "U":
            result = "Uniform (YOU-NEE-FORM)";
            break;
        case "V":
            result = "Victor (VIK-TAH)";
            break;
        case "W":
            result = "Whiskey (WISS-KEY)";
            break;
        case "X":
            result = "Xray (ECKS-RAY)";
            break;
        case "Y":
            result = "Yankee (YANG-KEY)";
            break;
        case "Z":
            result = "Zulu (ZOO-LOO)";
            break;
        case "1":
            result = "One (WUN)";
            break;
        case "2":
            result = "Two (TOO)";
            break;
        case "3":
            result = "Three (TREE)";
            break;
        case "4":
            result = "Four (FOW-ER)";
            break;
        case "5":
            result = "Five (FIFE)";
            break;
        case "6":
            result = "Six (SIX)";
            break;
        case "7":
            result = "Seven (SEV-EN)";
            break;
        case "8":
            result = "Eight (AIT)";
            break;
        case "9":
            result = "Nine (NIN-ER)";
            break;
        case "0":
            result = "Zero (ZEE-RO)";
            break;
        default:
            result = "Please enter a letter from the alphabet or a number (single character)."
    }
    document.getElementById("output").innerHTML = result;
}

function test() {
    var Alfa = document.getElementsByClassName("test");
    Alfa[0].innerHTML = "TEST";
}

var c = document.getElementById("canvas");
var ctx = c.getContext("2d");

var grd = ctx.createLinearGradient(0, 0, 500, 0); // Create gradient
grd.addColorStop(0, "black");
grd.addColorStop(1, "white");

ctx.fillStyle = grd; // Fill with gradient
ctx.fillRect(0, 0, 500, 250);