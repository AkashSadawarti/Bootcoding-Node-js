
let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' + 'abcdefghijklmnopqrstuvwxyz0123456789@#$'
let password = " ";
function getRandomPassword(){
    for(let i = 0; i<= 8; i++){

        let char =  Math.floor(Math.random() * str.length+1);
          password = password + str.charAt(char) ;
    }
    return password
}

let result = getRandomPassword();
console.log(result)