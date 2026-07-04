
const display = document.getElementById("display");
const numberButtons = document.querySelectorAll(".btn");
const operaterButtons = document.querySelectorAll(".operater");
const clearbtn = document.getElementById("clear");
const equalbtn = document.getElementById("equal");

let firstnumber = ""
let secondnumber = ""
let operater = null 

numberButtons.forEach(button => {
    button.addEventListener("click",() => {
        display.value += button.textContent
    })
})

operaterButtons.forEach(button => {
    button.addEventListener("click",() => {
firstnumber = display.value
operater = button.textContent
display.value=""
    })
})

equalbtn.addEventListener("click",() =>{
    secondnumber= display.value
    let result

    let num1 = Number(firstnumber);
    let num2 = Number(secondnumber);

    if(operater === "+") result = num1 + num2
    if(operater === "-") result = num1 - num2
    if(operater === "*") result = num1 * num2
    if(operater === "/") result = num1 / num2

    display.value = result
})

clearbtn.addEventListener("click",() => {
    display.value= ""
    firstnumber = ""
    secondnumber =""
    operater =null
})