// LOCAL HOST CONNECTION

const { Pool } = require('pg');
const connectionString = process.env.DATABASE_URL
const pool = new Pool({ connectionString });

pool.query('SELECT NOW()', (err, res) => {
  console.log(err ? err.stack : res.rows[0].now);
  pool.end();
});


//------------------------------------------------------------//

// LIVE CONNECTION TO RENDER.. 
// const { Pool } = require('pg');

// const pool = new Pool({
//   user: 'incidentsreport_user',
//   host: 'dpg-cft3mg9a6gdotcd3mubg-a.oregon-postgres.render.com',
//   database: 'incidentsreport',
//   password: '0L2LpMMUFLrqiMHgyM8iI9oxSby13ffC',
//   port: 5432,
// });

module.exports = {
  query: (text, params) => pool.query(text, params)
}

