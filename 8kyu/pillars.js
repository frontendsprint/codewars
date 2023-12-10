function pillars(numPill, dist, width) {
    let result = 0;
    dist *= 100;
    if (numPill > 1) {
      result = (width * numPill - width * 2) + (dist * (numPill - 1));
    } else {
      result = 0;
    }
    return result;
  }