// let emailName = name.getRandomName;
// console.log(emailName)


getName =  require('./fileexport')

//Example of Importing function
let max = 2023;
let min = 2000;
function getRandomEmail(name) {
    let suffix = '@gmail.com'
    let year = Math.floor(min + (Math.random() * (max-min)));
    let res = name + year + suffix;
    return res;
}
let name = getName.getRandomName();
console.log(getRandomEmail(name))
// 2000 - 2023
// 
// for(let i = 0 ; i < 100; i++){
//     let n = min + (Math.random() * (max-min));
//     console.log(Math.floor(n))
    
//     let name = getName.getRandomName();
//     console.log(getRandomEmail(name));
// }   


module.exports = {
    
}