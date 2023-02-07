 //Email genertor
let email = ['mohit','Alex','Oliver','Mark','Adam','Rohit','Ramesh','Suresh','Joe','Anurag','Veena','Anjali','Heena','Michelle','Deepika','Ranveer','Nelson','Ali','Surjeet','Manjeet','Mansoor','Alina','Vijita','Ronit']
let min = 2000
let max = 2023
function getRandomEmail(){
         let Name =  Math.floor(Math.random()  * email.length );
         let year =  min + Math.floor(Math.random()  * (max-min) );
        return console.log(`${email[Name]}${year}@gmail.com`);
    }
getRandomEmail();

