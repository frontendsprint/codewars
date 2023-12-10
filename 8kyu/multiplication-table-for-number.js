function multiTable(number) {
    let arr = [];
    for (let i = 1; i<=10; i++){
        if (i != 10) {
          arr.push(`${i} * ${number} = ${i*number}\n`);
        } else {
          arr.push(`${i} * ${number} = ${i*number}`);
        }
     }
    
    return arr.join('');
  }