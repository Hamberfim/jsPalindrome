"use strict";

// Controller function
// get the input string value
function getValue() {

    // make sure alert msg is not initially visible
    document.getElementById('alert').classList.add('invisible');

    // get the user input string
    let userStr = document.getElementById('userString').value;

    // call the reverse function
    let reverseStr = reverseString(userStr);

    // pass the reversed string to the display function
    displayString(reverseStr);

}

// logic function
// reverse the string value
function reverseString(userStr) {

    // declare empty array to be populated
    let reverseStr = [];

    // reverse string with a decrementing for loop
    for (let i = userStr.length - 1; i >= 0; i--) {
        // concatenate and populate the array with index values
        reverseStr += userStr[i];
        
    }

    // retrun the reversed string
    return reverseStr;

}

// view function
// display the reversed string value back to the page
function displayString(reverseStr) {

    // write to the page using a template literal
    document.getElementById('msg').innerHTML = `${reverseStr}`;

    // turn on inline alert success message
    // (remove 'invisible' from the class listings) 
    document.getElementById('alert').classList.remove('invisible');

}