
//Random area generator
let address = ['Nandanwan Road','Civil lines','Mahal','Reshimbagh','Manewada','Ramdaspeth','Dhantoli','Hingna Road','IT Park','Sakkardara','Mira Raod','Bandra','Matunga','Hinjewadi','Baner','Electronic city'] 

function getArea(){
    let random = Math.floor(Math.random() * address.length)
    return address[random];
}

console.log(getArea())

// module.exports ={
//     getArea,
// }