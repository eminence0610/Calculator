function sum(){
    var num1 = Number(document.getElementById("first").value)
    var num2 = Number(document.getElementById("second").value)
    var answer= num1 + num2
    document.getElementById("equal").innerHTML = answer
}
function subtract(){
    var num1 = Number(document.getElementById("first").value)
    var num2 = Number(document.getElementById("second").value)
    var answer= num1 - num2
    document.getElementById("equal").innerHTML = answer
}
function multiply(){
    var num1 = Number(document.getElementById("first").value)
    var num2 = Number(document.getElementById("second").value)
    var answer= num1 * num2
    document.getElementById("equal").innerHTML = answer
}
function division(){
    var num1 = Number(document.getElementById("first").value)
    var num2 = Number(document.getElementById("second").value)
    var answer= num1 / num2
    document.getElementById("equal").innerHTML = answer
}