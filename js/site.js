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
    let cleanUserStr = userStr.split(" ").join(""); // remove space

    // call the check function
    let returnCheck = checkForPalindrome(cleanUserStr);

    // pass the reversed string to the display function
    displayString(returnCheck, cleanUserStr, userStr);

}

// logic function
function checkForPalindrome(userStr) {
    // declare empty array to be populated
    let revString = [];  // array

    // reverse string with a decrementing for loop
    for (let i = userStr.length - 1; i >= 0; i--) {
        // concatenate and populate the array with index values
        revString += userStr[i];

    }

    // retrun the reversed string
    return revString;

}

// view function
// display the reversed string value back to the page
function displayString(returnCheck, cleanUserStr, userStr) {

    if (returnCheck === cleanUserStr) {
        // change alert background color
        document.getElementById('alert').classList.remove('alert-danger');
        document.getElementById('alert').classList.add('alert-success');
        // write to the page using a template literal
        document.getElementById('msg').innerHTML = `<span class="fw-bold">${userStr}</span><br><span class="fw-bold">${returnCheck}</span> is a palindrome!`;

        // turn on inline alert success message
        // (remove 'invisible' from the class listings) 
        document.getElementById('alert').classList.remove('invisible');

    } else {
        // write to the page using a template literal
        document.getElementById('msg').innerHTML = `<span class="fw-bold">${userStr}</span><br><span class="fw-bold">${returnCheck}</span> is not a palindrome!`;

        // change alert background color
        document.getElementById('alert').classList.remove('alert-success');
        document.getElementById('alert').classList.add('alert-danger');
        // turn on inline alert success message
        // (remove 'invisible' from the class listings) 
        document.getElementById('alert').classList.remove('invisible');
    }

}