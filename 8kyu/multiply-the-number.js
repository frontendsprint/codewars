function multiply(number){
    let str = String(Math.abs(number));  
    let power = str.length; 
    let result = 5;
    for (let i = 0; i < power - 1; i++) {
      result = result * 5;
    }
    return result * number;
  }