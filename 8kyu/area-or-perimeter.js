const areaOrPerimeter = function(l , w) {
    let result = 0;
    if (l === w) {
      result = l * w;
    } else {
      result = (l + w) * 2;
    }
    
    return result;
  };