function sumArray(array) {
    let result = 0;
    if (Array.isArray(array)) {
      array.sort((a, b) => a - b);
      array.shift();
      array.pop();
      for (let i = 0; i<array.length; i++){
      result += array[i];
      }       
    }    
    return result;
  }