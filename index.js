const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const incidentsRouter = require('./incidents');

// load environment variables from .env file
dotenv.config();

// create express app
const app = express();
// set the port to listen on
const port = process.env.PORT

app.use(express.json()); // parse JSON bodies
app.use(bodyParser.json()); // parse JSON bodies
app.use('/incidents', incidentsRouter); // use the incidents router for requests to /incidents

// GET /
app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
