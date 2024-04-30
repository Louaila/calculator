let display = document.getElementById('display');

function buttonClick(event) {
    const clickedElement = event.target;
    const value = clickedElement.dataset.value;

    if (value) {
        if (value === "=") {
            calculateResult();
        } else if (value == "C"){
			clearDisplay();
		}else{
            appendToDisplay(value);
        }
    }
}

function appendToDisplay(value) {
    display.value += value;
}

function clearDisplay() {
    display.value = '';
}

function calculateResult() {
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = 'Error';
    }
}
