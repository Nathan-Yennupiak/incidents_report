const axios = require('axios');

// get the weather data from OpenWeatherMap
async function getWeatherData(city, country) { 
  const apiKey = process.env.OPENWEATHERMAP_API_KEY; // get the API key from the environment variables
  const apiUrl = `http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${apiKey}`; // construct the API URL

  const response = await axios.get(apiUrl); // make the request to the API
  const { main, weather } = response.data; // destructure the response

  return { temp: main.temp, pressure: main.pressure, weather: weather[0].main }; // return the weather data
}

// export the getWeatherData function
module.exports = { 
  getWeatherData,
};
