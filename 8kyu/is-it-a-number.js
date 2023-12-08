// DESCRIPTION:
//Given a string s, write a method (function) that will return true if its a valid 
//single integer or floating number or false if its not.

//SOLUTION:

function isDigit(s) {
    let result;
    if (/^-?\d+(\.\d+)?$/.test(s)) {      
      result = true;
    } else {
      result = false; 
    }
    return result;
}