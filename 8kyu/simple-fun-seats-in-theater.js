// DESCRIPTION:
// Rreturn the number of people who sit strictly behind you and in 
// your column or to the left, assuming all seats are occupied.

//SOLUTION:

function seatsInTheater(nCols, nRows, col, row) {
    let result = 0;
    result = (nCols - (col - 1)) * (nRows - row);  
    return result;
}