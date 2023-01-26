//step 1 : Database should be ON
//step 2 : Install package with command : npm i pg

//step 3 : setup Connection 

const {Pool,Client} = require('pg')


//Below line is syntax to connection i.e connection string
//const connectionString = 'postgressql://username:password@localhost:5432/databasename'

const connectionString = 'postgressql://postgres:Akash@123@localhost:5432/postgres';

//creating client
 
const client = new Client({
    connectionString:connectionString
})

client.connect();
client.query('Select * from public."student"',(err,res) => {
      console.log(err,res);
      console.log("Database connected succesfully");
      client.end();
})