const Calculator = { // This object holds the values needed for calcuations
    Display_Value: "0",
    First_Operand: null, // Holds first operand in an expression
    Wait_Second_Operand: false, // Checks if the second operand has been input
    operator: null // Holds the operator
};

function Input_Digit(digit) { // Function called when a digit is input
    const {Display_Value, Wait_Second_Operand} = Calculator;
    if (Wait_Second_Operand === true) { // If waiting on the second operand display the digit and flip the variable
        Calculator.Display_Value = digit;
        Calculator.Wait_Second_Operand = false;
    } else { // If the display value is 0 override, or else add the digit to the value
        Calculator.Display_Value = Display_Value === "0" ? digit : Display_Value + digit;
    }
}

function Input_Decimal(dot) { // Function called when a decimal is input
    if (Calculator.Wait_Second_Operand === true) {return;} // If waiting on the second operand exit function
    if (!Calculator.Display_Value.includes(dot)) { // If there is no dot add one to the value
        Calculator.Display_Value += dot;
    }
}

function Handle_Operator(Next_Operator) { // Function called when an operator is input
    const {First_Operand, Display_Value, operator} = Calculator;
    const Value_of_Input = parseFloat(Display_Value);
    if (operator && Calculator.Wait_Second_Operand) { // If there is an operator and waiting on the second operand override operator and exit function
        Calculator.operator = Next_Operator;
        return;
    }
    if (First_Operand == null) { // If there is no operand set one from the input
        Calculator.First_Operand = Value_of_Input;
    } else if (operator) { // Checks if operator already exists
        const Value_Now = First_Operand || 0;
        let result = Perform_Calculation[operator](Value_Now, Value_of_Input); // 
        result = Number(result).toFixed(9); // Adds a fixed amount of number after the decimal
        result = (result * 1).toString(); // Removes any trailing 0s
        Calculator.Display_Value = parseFloat(result);
        Calculator.First_Operand = parseFloat(result);
    }
    Calculator.Wait_Second_Operand = true;
    Calculator.operator = Next_Operator;
}

const Perform_Calculation = { // Object to preform the calculations
    "/":(First_Operand, Second_Operand) => First_Operand / Second_Operand,
    "*":(First_Operand, Second_Operand) => First_Operand * Second_Operand,
    "+":(First_Operand, Second_Operand) => First_Operand + Second_Operand,
    "-":(First_Operand, Second_Operand) => First_Operand - Second_Operand,
    "=":(First_Operand, Second_Operand) => Second_Operand
};

function Calculator_Reset() { // Function called when AC is pressed, resets everything to the starting values
    Calculator.Display_Value = "0";
    Calculator.First_Operand = null;
    Calculator.Wait_Second_Operand = false;
    Calculator.operator = null;
}

function Update_Display() { // Called to update the display
    const display = document.querySelector(".calculator-screen");
    display.value = Calculator.Display_Value;
}

Update_Display();
const keys = document.querySelector(".calculator-keys");
keys.addEventListener("click", (event) => { // Event listener for the button presses
    const {target} = event;
    if (!target.matches("button")) {
        return;
    }

    if (target.classList.contains("operator")) {
        Handle_Operator(target.value);
        Update_Display();
        return;
    }

    if (target.classList.contains("decimal")) {
        Input_Decimal(target.value);
        Update_Display();
        return;
    }

    if (target.classList.contains("all-clear")) {
        Calculator_Reset();
        Update_Display();
        return;
    }

    Input_Digit(target.value);
    Update_Display();
})