const axios = require('axios');

const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?appid=81c7332841c2fe9821643d0776f26900&units=imperial';


// build url using new ES6 feature - template strings
module.exports = {
  getTemp(location) {
    const encodedLocation = encodeURIComponent(location);
    // we use back take quotation marks, $ and {} braces and everything we type in the braces is executed as regular jsp expression.
    const requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;

    // Since we aren't returning anything from the 'getTemp function' writen above, We HAVE to include 'return' statement in our code below for it to work.
    // this chains our Promises thus calling our axios twice
    // How to make the api request using axios.
    
    return axios.get(requestUrl).then((response) => {
      if (response.data.cod && response.data.message) {
        throw new Error(response.data.message);
      } else {
        return response.data.main.temp;
      }
    }, (response) => {
      throw new Error(response.data.message);
    });
  },
};

