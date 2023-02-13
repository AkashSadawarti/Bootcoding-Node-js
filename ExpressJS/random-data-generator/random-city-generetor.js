let city =  ['Nagpur','Bhandara','Chandrapur','Gondia','Kamptee','Wardha','Umred']

function getcity(){
    let random = Math.floor(Math.random() * city.length)
    return city[random]
}

console.log(getcity())
