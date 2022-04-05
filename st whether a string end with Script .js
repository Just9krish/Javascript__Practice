function checkScript (str) {
    return str.slice(-6) === 'script'
}


console.log(checkScript('Javascript'))
console.log(checkScript('script'))