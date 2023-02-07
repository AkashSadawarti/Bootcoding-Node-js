//random Mobile Number
let min  = 9900000000;
let max = 9999999999

function getRandomMobileNumber(){
    random = min + Math.floor(Math.random() * (max-min))
    console.log(random)
}
getRandomMobileNumber()

//Random roles
// let role = ['student','Admin','Faculty']
// function getRole(){
//     let random = Math.floor(Math.random() * role.length);
//     console.log(role[random])
// }
// getRole();

//Random Created by and Edited by

// let staff = ['Ajay','Vinay','Anil','Mohnish']
// function getRandomStaff(){
//     let random = Math.floor(Math.random() * staff.length);
//     console.log(staff[random]);
// }
// getRandomStaff();


// //Get Random date
// function generateRandomDate() {
//      let random =  new Date(+(new Date()) - Math.floor(Math.random() * 10000000000));
//      let res =  random.toLocaleString('en-IN');
//      console.log(res)
//     }
    
//   generateRandomDate()