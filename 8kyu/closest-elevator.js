function elevator(left, right, call){
    let result = '';
    if ((left === right) || (call > left && call < right) || (call < left && call > right)) {
      result = 'right';
    } else if (call <= left && left < right) {
      result = 'left';
    } else if (call <= right && right < left) {
      result = 'right';
    } else if (call >= left && left > right) {
      result = 'left';
    } else if (call >= right && right > left) {
      result = 'right';
    }      
    return result;
  }