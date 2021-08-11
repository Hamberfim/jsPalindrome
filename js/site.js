"use strict";

// Controller function
// get the input string value
function getValue() {

    // make sure alert msg is not initially visible and default background color is set
    document.getElementById('alert').classList.add('alert-success');
    document.getElementById('alert').classList.add('invisible');

    // get the user input string
    let userStr = document.getElementById('userString').value;

    // clean up user string - remove symbol, punctuation, numbers
    userStr = userStr.toLowerCase();
    userStr = userStr.replace(/[\p{P}$+<=>^`|~]/gu, '');
    userStr = userStr.replace(/[^\p{L}\p{N}\s]/gu, '');
    userStr = userStr.replace(/[^\p{L}\p{N}\p{Z}]/gu, '');
    userStr = userStr.replace(/[^\p{L}\p{N}\s]/gu, '');
    userStr = userStr.replace(/[0-9]/gu, '');
    let newUserStr = userStr.split(" ").join(""); // remove space

    // call the reverse function
    let reverseStr = reverseString(newUserStr);

    // pass the reversed string to the display function
    displayString(reverseStr, newUserStr, userStr);

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
function displayString(reverseStr, newUserStr, userStr) {

    if (reverseStr === newUserStr) {
        // change alert background color
        document.getElementById('alert').classList.remove('alert-danger');
        document.getElementById('alert').classList.add('alert-success');
        // write to the page using a template literal
        document.getElementById('msg').innerHTML = `<span class="fw-bold">${userStr}</span><br><span class="fw-bold">${reverseStr}</span> is a palindrome!`;

        // turn on inline alert success message
        // (remove 'invisible' from the class listings) 
        document.getElementById('alert').classList.remove('invisible');

    } else {
        // write to the page using a template literal
        document.getElementById('msg').innerHTML = `<span class="fw-bold">${userStr}</span><br><span class="fw-bold">${reverseStr}</span> is not a palindrome!`;

        // change alert background color
        document.getElementById('alert').classList.remove('alert-success');
        document.getElementById('alert').classList.add('alert-danger');
        // turn on inline alert success message
        // (remove 'invisible' from the class listings) 
        document.getElementById('alert').classList.remove('invisible');
    }



}