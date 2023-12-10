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