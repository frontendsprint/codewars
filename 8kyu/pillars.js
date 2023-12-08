// DESCRIPTION:
// There are pillars near the road. The distance between the pillars is the 
// same and the width of the pillars is the same. Your function accepts three arguments:
// number of pillars (≥ 1);
// distance between pillars (10 - 30 meters);
// width of the pillar (10 - 50 centimeters).
// Calculate the distance between the first and the last pillar in 
// centimeters (without the width of the first and last pillar).

//SOLUTION:

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