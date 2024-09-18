let input = document.getElementById('inputBox');
let buttons = document.querySelectorAll('button');

let expression = ""; // Renamed for clarity

buttons.forEach(button => {
    button.addEventListener('click', (e) => {
        let buttonText = e.target.innerHTML;

        if (buttonText === '=') {
            try {
                // Evaluate the expression safely
                expression = eval(expression).toString();
                input.value = expression;
            } catch (error) {
                input.value = "Error"; // Display error if evaluation fails
            }
        } else if (buttonText === 'AC') {
            expression = '';
            input.value = expression;
        } else if (buttonText === 'DEL') {
            expression = expression.slice(0, -1); // Remove last character
            input.value = expression;
        } else {
            // Append clicked button's text to expression
            expression += buttonText;
            input.value = expression;
        }
    });
});
