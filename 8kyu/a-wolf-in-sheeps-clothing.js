function warnTheSheep(queue) {
    let result = '';  
    let index = queue.length - queue.indexOf('wolf') - 1; 
    
    if (index === 0) {
      result = 'Pls go away and stop eating my sheep';
    } else {
      result = 'Oi! Sheep number ' + index + '! You are about to be eaten by a wolf!';
    }  
    
    return result;
  }