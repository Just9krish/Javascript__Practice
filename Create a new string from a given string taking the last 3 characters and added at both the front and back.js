// function back3Char(string) {
//     if(string.length >= 3 ) {
//         let back = string.substring(string.length - 3)
//         return back + string + back; 
//     } else {
//         return false;
//     }   
// }

const back3Char = (string) => {
    if(string >= 3) {
        let back = string.slice(- 3);
        return back + string + back;
    } else {
        return string;
    }
}
console.log(back3Char('agdsd'));