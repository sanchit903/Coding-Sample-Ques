function calculate() {
    let display = document.getElementById("display");
    let expression = display.value;
    let result;

    try {
        result = eval(expression);
        display.value = result;
    } catch (error) {
        display.value = "Error";
    }
}