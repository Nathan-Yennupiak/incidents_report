const express = require('express');
const db = require('./db');
const { getWeatherData } = require('./openweathermap');

const router = express.Router();

// Retrieve All Incidents  || GET
router.get('/', async (req, res) => { 
  try {
    const { rows } = await db.query('SELECT * FROM incidents'); // SELECT * FROM incidents
    res.send(rows); // send the rows back to the client
  } catch (err) { // if there is an error, log it to the console and send a 500 status code
    console.error(err);
    res.status(500).send('Error retrieving incidents from database || No data available');  //
  }
});

// CREATE Incidents || POST
router.post('/', async (req, res) => {
  const { client_id, incident_desc, city, country } = req.body; // destructure the request body

  try {
    const weatherData = await getWeatherData(city, country); // get the weather data from OpenWeatherMap

    const { rows } = await db.query(
      'INSERT INTO incidents (client_id, incident_desc, city, country, date, weather_report) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *',
      [client_id, incident_desc, city, country, new Date(), weatherData], 
    );

    res.send(rows[0]); // send the first row back to the client
  } catch (err) { // if there is an error, log it to the console and send a 500 status code
    console.error(err); // log the error to the console
    res.status(500).send('Error creating incident report');   // send a 500 status code
  }
});

module.exports = router; // export the router
