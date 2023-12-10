function isDigit(s) {
    let result;
    if (/^-?\d+(\.\d+)?$/.test(s)) {      
      result = true;
    } else {
      result = false; 
    }
    return result;
}