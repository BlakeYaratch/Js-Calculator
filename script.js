document.getElementById("pageTitle").innerHTML="Welcome to Blake's Calculator";



function theAnswer(){
    numOne=parseInt ( document.getElementById("numberOne").value)
    numTwo=parseInt ( document.getElementById("numberTwo").value)
    document.getElementById("correctAnswer").innerHTML="The answer is: " + parseFloat(numOne+numTwo)
};

function subAnswer(){
    numOne=parseInt ( document.getElementById("numberOne").value)
    numTwo=parseInt ( document.getElementById("numberTwo").value)
    document.getElementById("correctAnswer").innerHTML="The answer is: " + parseFloat(numOne-numTwo)
};

function divAnswer(){
    numOne=parseInt ( document.getElementById("numberOne").value)
    numTwo=parseInt ( document.getElementById("numberTwo").value)
    document.getElementById("correctAnswer").innerHTML="The answer is: " + parseFloat(numOne/numTwo)
};

function mulAnswer(){
    numOne=parseInt ( document.getElementById("numberOne").value)
    numTwo=parseInt ( document.getElementById("numberTwo").value)
    document.getElementById("correctAnswer").innerHTML="The answer is: " + parseFloat(numOne*numTwo)
};