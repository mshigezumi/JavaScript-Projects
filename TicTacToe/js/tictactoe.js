let activePlayer = "X";
let selectedSquares = [];
var shortWait = 1000; // Used for waits that are within a round
var longWait = 3000; // Used for waits when a round is over
var end = false; // Indicates when a round has ended, used to cut off certain parts of the program from being active when they aren't suppose to

function placeXOrO(squareNumber) { // Main function to run the functions of the game
    if (!selectedSquares.some(element => element.includes(squareNumber))) { // Checks if the square is open
        let select = document.getElementById(squareNumber); // Sets select to the correct element in the html file
        if (activePlayer === "X") {
            select.style.backgroundImage = "url('images/x.png')"; // Changes the backgroundImage to X
        } else {
            select.style.backgroundImage = "url('images/o.png')"; // Changes the backgroundImage to O
        }
        selectedSquares.push(squareNumber + activePlayer); // Adding a string with the square number and player to keep track of which blocks or filled
        audio("./media/place.mp3"); // Plays placing sound
        if (end == false) { // Runs checkWinConditions() if the round is still going
            checkWinConditions();
        }
        if (activePlayer === "X") { // Changes the activePlayer
            activePlayer = "O";
        } else {
            activePlayer = "X";
        }
        if (activePlayer === "O" && end == false) { // Checks if it's the computer's turn and if the round is still going
            disableClick();
            setTimeout(function() {computersTurn();}, shortWait);
        } else if (activePlayer === "O" && end == true) { // If it's the computer's turn and the round is over resets the activePlayer instead
            activePlayer = "X";
        }
        return true;
    }

    function computersTurn() { // This function defines what the computer does on its turn
        let success = false;
        let pickASquare;
         while (!success) { // Keeps looping till a placement is successful
            pickASquare = String(Math.floor(Math.random() * 9)); // Randomly picks a square
            if (placeXOrO(pickASquare)) { // CHecks if square is open and places if so
                placeXOrO(pickASquare);
                success = true;
            };
        }
    }
}

function checkWinConditions () { // Checks if the game is over (via win or tie)
    if (arrayIncludes("0X","1X","2X")) {drawWinLine(50,100,558,100);} // All but the last of these (else) ifs draws a line if a win happens
    else if (arrayIncludes("3X","4X","5X")) {drawWinLine(50,304,558,304);}
    else if (arrayIncludes("6X","7X","8X")) {drawWinLine(50,508,558,508);}
    else if (arrayIncludes("0X","3X","6X")) {drawWinLine(100,50,100,558);}
    else if (arrayIncludes("1X","4X","7X")) {drawWinLine(304,50,304,558);}
    else if (arrayIncludes("2X","5X","8X")) {drawWinLine(508,50,508,558);}
    else if (arrayIncludes("6X","4X","2X")) {drawWinLine(100,508,510,90);}
    else if (arrayIncludes("0X","4X","8X")) {drawWinLine(100,100,520,520);}
    else if (arrayIncludes("0O","1O","2O")) {drawWinLine(50,100,558,100);}
    else if (arrayIncludes("3O","4O","5O")) {drawWinLine(50,304,558,304);}
    else if (arrayIncludes("6O","7O","8O")) {drawWinLine(50,508,558,508);}
    else if (arrayIncludes("0O","3O","6O")) {drawWinLine(100,50,100,558);}
    else if (arrayIncludes("1O","4O","7O")) {drawWinLine(304,50,304,558);}
    else if (arrayIncludes("2O","5O","8O")) {drawWinLine(508,50,508,558);}
    else if (arrayIncludes("6O","4O","2O")) {drawWinLine(100,508,510,90);}
    else if (arrayIncludes("0O","4O","8O")) {drawWinLine(100,100,520,520);}
    else if (selectedSquares.length >= 9) { // If all the spaces are taken up and there is no winner it's a tie
        end = true;
        audio("./media/tie.mp3"); // Plays tie sound
        setTimeout(function() {resetGame();}, longWait); 
    }

    function arrayIncludes(squareA, squareB, squareC) { // If the three parameters are in the selectedSquares array return true
        const a = selectedSquares.includes(squareA);
        const b = selectedSquares.includes(squareB);
        const c = selectedSquares.includes(squareC);
        if (a === true && b === true && c === true) {return true;}
    }
}

function disableClick() { // Depending on if the round is still going disables clicking for a shortWait or longWait
    body.style.pointerEvents = "none";
    if (end == false) {
        setTimeout(function() {body.style.pointerEvents = "auto";}, shortWait);
    } else {
        setTimeout(function() {body.style.pointerEvents = "auto";}, longWait);
    }
}

function audio(audioURL) { // Plays specified audio
    let audio = new Audio(audioURL);
    audio.play();
}

function drawWinLine(coordX1, coordY1, coordX2, coordY2) { // Draws a line from and to the specified coordinates
    const canvas = document.getElementById("win-lines");
    const c = canvas.getContext("2d");
    let x1 = coordX1,
        y1 = coordY1,
        x2 = coordX2,
        y2 = coordY2,
        x = x1,
        y = y1;

    function animatedLineDrawing() { // Function to actually draw the line
        const animationLoop = requestAnimationFrame(animatedLineDrawing);
        /*c.clearRect(0,0,608,608);*/
        c.beginPath();
        c.moveTo(x1,y1);
        c.lineTo(x,y);
        c.lineWidth = 10;
        c.strokeStyle = "rgba(70, 255, 33, 0.8)";
        c.stroke();
        if (x1 <= x2 && y1 <= y2) { // Changes coordinates or cancels animation if needed for specific cases
            if (x < x2) {x += 10;}
            if (y < y2) {y += 10;}
            if (x >= x2 && y >= y2) {cancelAnimationFrame(animationLoop);}
        }
        if (x1 <= x2 && y1 >= y2) {
            if (x < x2) {x += 10;}
            if (y > y2) {y -= 10;}
            if (x >= x2 && y <= y2) {cancelAnimationFrame(animationLoop);}
        }
    }

    function clear() { // Clears the canvas of anything drawn on it
        const animationLoop = requestAnimationFrame(clear);
        c.clearRect(0,0,608,608);
        cancelAnimationFrame(animationLoop);
    }

    end = true;
    disableClick();
    audio("./media/winGame.mp3"); // Plays win sound
    animatedLineDrawing();
    setTimeout(function() {clear(); resetGame();}, longWait); // longWait needed to let line animation finish
}

function resetGame() { // Resets the game by clearing all the boxes and resetting variables for a new round
    for (let i = 0; i < 9; i++) {
        let square = document.getElementById(String(i));
        square.style.backgroundImage = "";
    }
    selectedSquares = [];
    end = false;
}