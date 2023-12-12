function removeChar(str){
    let result = '';
    if (str.length > 2) {
        result = str.slice(1, str.length - 1);
    }
    return result;
};
