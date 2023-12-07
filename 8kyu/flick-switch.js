// DESCRIPTION:
// Create a function that always returns true for every item in a given 
// list. However, if an element is the word "flick", switch to always 
// returning the opposite boolean value.

////SOLUTION:

function flickSwitch(arr){
    let result = [];
    let f = 0;
    for (let i = 0; i < arr.length; i++){
      if (arr[i] === 'flick' && f === 0){    
      f = 1;
      } else if (arr[i] === 'flick' && f === 1){
      f = 0;  
      }
      if (f === 0){
        result.push(true);
      } else if (f === 1){
        result.push(false);
      }
    }
    return result;
  }