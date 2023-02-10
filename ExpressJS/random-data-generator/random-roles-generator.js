//Random roles
let role = ['student','Admin','Faculty']
function getRole(){
    let random = Math.floor(Math.random() * role.length);
    console.log(role[random])
}
getRole();

