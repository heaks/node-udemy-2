// last lesson 34
const yargs = require('yargs');

const weather = require('./weather/weather.js');
const geoCode = require('./geocode/geocode.js');

const argv = yargs
  .options({
    a: {
      demand: true,
      alias: 'address',
      describe: 'Address to fetch weather for',
      string: true,
    }
  })
  .help()
  .alias('help', 'h')
  .argv;

geoCode.geocodeAddress(argv.address, (errorMessage, results) => {
  if (errorMessage) {
    console.log(errorMessage);
  } else {
    var location = results.address;
    weather.getWeather(results.latitude, results.longitude, (errorMessage, weatherResults) => {
      if (errorMessage) {
        console.log(errorMessage);
      } else {
        console.log(`It's ${weatherResults.temperature} in ${location} but feels like ${weatherResults.apparentTemperature}`);
      }
    });
  }
});