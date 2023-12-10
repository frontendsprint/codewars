function twiceAsOld(dadYearsOld, sonYearsOld) {
    let result = 0;  
    sonYearsOld *= 2;
    result = Math.abs(dadYearsOld - sonYearsOld);  
    return result;
}