function seatsInTheater(nCols, nRows, col, row) {
    let result = 0;
    result = (nCols - (col - 1)) * (nRows - row);  
    return result;
}