//DOB generator

let day = [1,2,3,4,5,6,7,8,9,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31]
let month = ['Jan','Feb','Mar','Apr','May','June','July','Aug','Sept','Oct','Nov','Dec']
let year = [1995,1996,1997,1998,1997,1998,1999,2000,2001,2002,2003,2004,2005,2006,2007,2008]

function getDOB(){
    let randomDay = Math.floor(Math.random() * day.length);
    let randomMonth = Math.floor(Math.random() * month.length);
    let randomYear = Math.floor(Math.random() * year.length);
    let dob = `${day[randomDay]}-${month[randomMonth]}-${year[randomYear]}`;
    return dob;
}

let res = getDOB()
console.log(res);