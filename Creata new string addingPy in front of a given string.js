const checkStr = (str) => {
    return str === null || str === undefined || str.substring(0, 2) === 'Py' ? str : `Py${str}`;
}

console.log(checkStr('Python'));
console.log(checkStr('thon'));