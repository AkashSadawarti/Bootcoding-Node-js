// //Random Name Generator

// Random Name Generator
let names = ['mohit','Alex','Oliver','Mark','Adam','Rohit','Ramesh','Suresh','Joe','Anurag','Veena','Anjali','Heena','Michelle','Deepika','Ranveer','Nelson','Ali','Surjeet','Manjeet','Mansoor','Alina','Vijita','Ronit']


function getRandomName(){
       let random = Math.floor(Math.random() * names.length)
       return names[random];
    }


    function processStudent(student){
        student.getId();
    }
module.exports = {
    getRandomName,
}