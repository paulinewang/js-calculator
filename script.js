var decimal = document.getElementById("decimal");
var clear = document.getElementById("clear");
var displayValElement = document.getElementById("display__numbers");

/* value that is being shown. default is 0 */
var displayVal = '0';
var pendingVal;  
var evalStringArray = [];  /* !!!! eval function takes a string and performs it. this array will hold the buttons we're pressing */

var btnNumbers = document.getElementsByClassName("btn--number");
var btnOperators = document.getElementsByClassName("btn--operator");

/* clickObj is an event that is passed. use this to get the value of the button that is being clicked */
var updateDisplayVal = (clickObj) => {
    var btnText = clickObj.target.innerText;
    if(displayVal === "0") { // check if display holds something
        displayVal = "";  // because if we press 0 and then 1, we only want to see the 1. not the 0.
    }

    displayVal += btnText; // now we have the element, and we have to update it in the display
    displayValElement.innerText = displayVal;
} 

var performOperation = (clickObj) => {
    var operator = clickObj.target.innerText;

    switch (operator) {
        case '+':
            pendingVal = displayVal;
            displayVal = '0';
            displayValElement.innerText = displayVal;
            evalStringArray.push(pendingVal);
            evalStringArray.push('+');
            break;
        case '-':
            pendingVal = displayVal;
            displayVal = '0';
            displayValElement.innerText = displayVal;
            evalStringArray.push(pendingVal);
            evalStringArray.push('-');
            break;
        case '×':
            pendingVal = displayVal;
            displayVal = '0';
            displayValElement.innerText = displayVal;
            evalStringArray.push(pendingVal);
            evalStringArray.push('*');
            break;
        case '÷':
            pendingVal = displayVal;
            displayVal = '0';
            displayValElement.innerText = displayVal;
            evalStringArray.push(pendingVal);
            evalStringArray.push('/');
            break;
        case '=':
            evalStringArray.push(displayVal);
            var evaluation = eval(evalStringArray.join(' '));
            displayVal = evaluation + ''; 
            displayValElement.innerText = displayVal;
            evalStringArray = []; // clear the array
            break;
        default:
            break;
    }
}

for (let i = 0; i < btnNumbers.length; i++) {
    btnNumbers[i].addEventListener('click', updateDisplayVal, false) 
}

for (let i = 0; i < btnOperators.length; i++) {
    btnOperators[i].addEventListener('click', performOperation, false);
}
 
clear.onclick = () => {
    displayVal = '0';
    pendingVal = undefined;
    evalStringArray = [];
    displayValElement.innerHTML = displayVal;
}

/* this is needed so that we cannot have two decimals in an entry */
decimal.onclick = () => { 
    if(!displayVal.includes('.')) {
        displayVal += '.';
    }
    displayValElement.innerText = displayVal;
}


/*

zero.addEventListener('click', function() {
    document.getElementById("display__numbers").innerText = 0;
});

one.addEventListener('click', function() {
    console.log("yo");
    document.getElementById("display__numbers").innerText = 1;
});

two.addEventListener('click', function() {
    document.getElementById("display__numbers").innerText = 2;
});

three.addEventListener('click', function() {
    document.getElementById("display__numbers").innerText = 3;
});2

four.addEventListener('click', function() {
    document.getElementById("display__numbers").innerText = 4;
});

five.addEventListener('click', function() {
    document.getElementById("display__numbers").innerText = 5;
});

six.addEventListener('click', function() {
    document.getElementById("display__numbers").innerText = 6;
});

seven.addEventListener('click', function() {
    document.getElementById("display__numbers").innerText = 7;
});

eight.addEventListener('click', function() {
    document.getElementById("display__numbers").innerText = 8;
});

nine.addEventListener('click', function() {
    document.getElementById("display__numbers").innerText = 9;
});

*/