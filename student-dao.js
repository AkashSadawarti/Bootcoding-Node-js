const dbconnect = require('./student-db')

const { Pool } = require('pg')

const pool = new Pool(dbconnect.db)

pool.query(`
CREATE TABLE IF NOT EXISTS "users812" (
    "id" SERIAL,
    "name" VARCHAR(100) NOT NULL,
    "role" VARCHAR(15) NOT NULL,
    PRIMARY KEY ("id")
);`,(err,res) => {
    console.log(err,res)
    console.log('user table is created')
    pool.end();
})


// async function query(sql, params) {
//     const pool = new Pool(dbconnect.db);
//     const [results,] = await pool.execute(sql, params);
//     pool.end();
//     return results;
// }
// //select query
// const tableName = `SELECT * FROM public.student`;

// async function getStudent(tableName) { 
//     const pool = await new Pool(dbconnect.db); 
//     return await pool.query(tableName);
//     // return results;
// }

// let res = getStudent(tableName).then(re => {return re});
// console.log(res)
     

// // async function createStudent(tableName) {
// //     const { Pool } = require('pg')
// //     const pool = new Pool(dbconnect.db);
// //     const [results,] = await pool.query(`INSERT INTO ${tableName}`, function (err, res) {
// //         console.log(res, err)
// //         console.log()
// //         pool.end()
// //         if (err) throw err;
// //         console.log("Connected!");

// //         return results;
// //     })
// // }

// module.exports = {
//     getStudent,
//     // createStudent,
//     query
// }
