function getNumberFromString(s) {
    let arr = s.match(/\d/g);
    let str = arr.join('');
    return +str;
  }