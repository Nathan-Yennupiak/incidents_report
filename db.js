// LIVE DB CONNECTION CONNECTION
// require('dotenv').config();

// const { Pool } = require('pg');

// const pool = new Pool({
//   connectionString: process.env.LIVE_DB_URL
// });


//------------------------------------------------------------//

// LOCAL DB CONNECTION
require('dotenv').config();

const { Pool } = require('pg');

const pool = new Pool({
  connectionString: process.env.LOCAL_DB_URL
});



// export the pool object
module.exports = {
  query: (text, params) => pool.query(text, params)
}

