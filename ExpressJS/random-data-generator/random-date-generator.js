


// //Get Random date
function generateRandomDate() {
     let random =  new Date(+(new Date()) - Math.floor(Math.random() * 10000000000));
     let res =  random.toLocaleString('en-IN');
     console.log(res)
    }
    
   generateRandomDate()