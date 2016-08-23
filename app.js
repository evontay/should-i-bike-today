console.log('app is running')
console.clear()

// *REFRESH
// *SHOW CURRENT DATE AND TIME
// GET MORNING (PERIOD 1) FORECAST FOR SOUTH AND EAST REGIONS
// GET EVENING (PERIOD 3) FORECAST FOR SOUTH AND EAST REGIONS
// IF PERIOD 1 AND PERIOD 3 SOUTH AND EAST IS 'Partly Cloudy' or 'Sunny'
//   RUN 'WONDERFUL DAY TO CYCLE'
// ELSE
//   RUN 'BETTER NOT'
//
// WONDERFUL DAY TO CYCLE
//   CHANGE BACKGROUND IMAGE TO SUNNY GIF
//   DISPLAY TEXT 'WONDERFUL DAY TO CYCLE, ENJOY!'
//   DISPLAY FORECAST
//
// BETTER NOT
//   CHANGE BACKGROUND IMAGE TO RAINY GIF
//   DISPLAY TEXT 'BOO. MAYBE NOT.'
//   DISPLAY FORECAST
var theWeather
$(document).ready(function () {
  console.log('ready?')
  var settings = {
    'async': true,
    'crossDomain': true,
    'url': 'https://api.data.gov.sg/v1/environment/24-hour-weather-forecast',
    'method': 'GET',
    'headers': {
      'api-key': 'Sxjeo2nzIGmycwTIGiWlfgJKHYRGIBQW'
    }
  }

  $.ajax(settings).done(function (data) {
    console.log(data)
    data.items.map(function (datum) {
      $('#date').append(datum.timestamp)
      console.log('timestamp:' + datum.timestamp)
      testWeather = 'fine'
      theWeather = datum.general.forecast.toLowerCase()
      morningWeather = datum.periods[1].regions.east
      eveningWeather = datum.periods[2].regions.south
      // $('#forecast').append('<h1>' + datum.general.forecast + '</h1>')
      // // $('#forecast').append('<p>Fine</p>')
      // console.log('forecast:' + datum.general.forecast)

      // $('#morning').append('<h3 class="underline">morning</h3> <p>' + datum.periods[1].regions.east + '</p>')
      //
      // $('#evening').append('<h3 class="underline">evening</h3> <p>' + datum.periods[2].regions.south + '</p>')

      $('#forecast').append('<h1>' + theWeather + '</h1>')

      $('#morning').append('<h3 class="underline">morning</h3> <p>' + morningWeather + '</p>')

      $('#evening').append('<h3 class="underline">evening</h3> <p>' + eveningWeather + '</p>')

      badWeather()
    })
  }).fail(function (jqXHR, textStatus, errorThrown) {
    console.log(errorThrown)
  })

  function badWeather () {
    console.log('theWeather: ' + theWeather)
    if (theWeather.indexOf('thunder') >= 0 || theWeather.indexOf('shower') >= 0 || theWeather.indexOf('rain') >= 0) {
      $('body').css('background-color', '#555')
      $('#icon').html('<i class="wi wi-rain"></i>')
      $('#verdict').html('<h1>Boo. Maybe not.</h1>')
    } else {
      $('#icon').html('<i class="wi wi-day-sunny-overcast"></i>')
      $('#verdict').html('<h1>Yes. Grab your bike!</h1>')
    }
  }

// })
})
