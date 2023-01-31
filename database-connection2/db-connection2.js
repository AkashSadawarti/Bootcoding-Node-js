
const { Pool } = require('pg')
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'postgres',
  password: 'Akash@123',
  port: 5432,
})
pool.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
})

pool.query(`SELECT * FROM student`,function(err,res) {
  console.log(res,err)
  console.log()
  client.end()
  if (err) throw err;
  console.log("Connected!");
})

// client.getUsers = (request, response) => {
//   pool.query('SELECT * FROM students', (error, results) => {
//     if (error) {
//       throw error
//     }
//     response.status(200).json(results.rows)
//   })
// }