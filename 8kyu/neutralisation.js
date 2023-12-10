function neutralise(s1, s2) {
    let arr = [];
    let result = '';
    for (let i = 0; i < s1.length; i++){
      if (s1[i] === s2[i]) {
        arr.push(s1[i]);
      } else {
        arr.push(0);
      }
      result = arr.join('');
    }
    // Here be dragons!
    return result;
}