function contamination(text, char){
    let result = '';
    let arr = [];
    if (text === '') {
      result = ''
    } else {
      for (let i = 0; i < text.length; i++){
        arr[i] = char;
      }
      result = arr.join('');
    }
    return result;
  }