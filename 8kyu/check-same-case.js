function sameCase(a, b) {
    let result;
  
    if (/[A-Z]/.test(a) && /[A-Z]/.test(b)) {
      result = 1;
    } else if (/[a-z]/.test(a) && /[a-z]/.test(b)) {
      result = 1;
    } else if (/[A-Z]/.test(a) && /[a-z]/.test(b)) {
      result = 0;
    } else if (/[a-z]/.test(a) && /[A-Z]/.test(b)) {
      result = 0;
    } else if (/[^a-zA-Z0-9]/.test(a) || /[^a-zA-Z0-9]/.test(b)) {
      result = -1;
    } else {
      result = -1;
    }
  
    return result;
}