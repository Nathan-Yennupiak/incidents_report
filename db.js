// LOCAL HOST CONNECTION
require('dotenv').config();

const { Pool } = require('pg');

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});


//------------------------------------------------------------//

// LIVE CONNECTION TO RENDER.. 
// require('dotenv').config(); 

// const { Pool } = require('pg');

// const pool = new Pool({
//   connectionString: process.env.LIVE_DATABASE_URL,
// });


// export the pool object
module.exports = {
  query: (text, params) => pool.query(text, params)
}

