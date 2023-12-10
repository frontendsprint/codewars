function toCsvText(array) {
    let result = ''; 
    for (let i = 0; i < array.length - 1; i++) {
       result += `${array[i].join()}\n`
     }
    result += `${array[array.length - 1].join()}`
    return result;
  }