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

      $('#forecast').append('<p>' + datum.general.forecast + '</p>')
      // $('#forecast').append('<p>Fine</p>')
      console.log('forecast:' + datum.general.forecast)

      $('#morning').append('<h3 class="underline">morning</h3> <p>' + datum.periods[1].regions.south + '</p>')

      $('#evening').append('<h3 class="underline">evening</h3> <p>' + datum.periods[2].regions.south + '</p>')

      if (badWeather()) {
        // $('body').css('background-color', '#555')
        $('#icon').html('<i class="wi wi-rain"></i>')
        $('#verdict').html('<h1>Boo. Maybe not.</h1>')
      }else {
        $('#verdict').html('<h1>Yes. Grab your bike!</h1>')
        $('#icon').html('<i class="wi wi-day-sunny-overcast"></i>')
      }
    })
  }).fail(function (jqXHR, textStatus, errorThrown) {
    console.log(errorThrown)
  })

  function badWeather () {
    $('#forecast:contains(Thunder), :contains(Rain), :contains(Shower), :contains(Drizzle)').css('background-color', 'grey')
    return true

    // function badMorning(){
    //   if ($('#morning:contains(Thunder), :contains(Rain), :contains(Shower), :contains(Drizzle)')){
    //     $('#morning').css('background-color', 'black')
    //   }

  // function badEvening(){
  // $('#evening:contains(Thunder), :contains(Rain), :contains(Shower), :contains(Drizzle)').css("background-color", "grey")
  // return true
  }

  // function showIconMorning() {
  //   $('#morning:contains(Thunder), :contains(Rain), :contains(Shower), :contains(Drizzle)').append('<i class="wi wi-day-rain"></i>')}
  //   else {
  //     $('#morning')append('<i class="wi wi-sunny"></i>'
  //   }}
  //
  //   $('#evening:contains(Thunder), :contains(Rain), :contains(Shower), :contains(Drizzle)').append('<i class="wi wi-day-rain"></i>')
  //
  // }
  // $.ajax({
  //   url: 'https://api.data.gov.sg/v1/environment/24-hour-weather-forecast'
  // }).done (function (data) {
  //   var now = data.map(function (response) {
  //     return response
  //   })
  //   console.log('now: ' + now)
  // })

// function reload () {
//   $('#main').empty()
//   $.get('https://api.data.gov.sg/v1/environment/24-hour-weather-forecast')
//   .done(function (data) {
//     // console.log('test: ' + response)
//     data.forEach(function (datum) {
//       $('#main').append('<p>' + datum + '</p>')
//       console.log('datum:' + datum)
//     })
//   }).fail(function (jqXHR, textStatus, errorThrown) {
//     console.log(errorThrown)
//   })
// }
// //
// // Refresh the data
// $('#refresh').click(function () {
//   reload()
// })
// // Submit new entry to api
// $('#myForm').on('submit', function (event) {
//   event.preventDefault()
//   var data = $(this).serialize()
//   console.log('submit: ' + data)
//   $.ajax({
//     type: 'POST',
//     url: 'http://api.doughnuts.ga/doughnuts',
//     data: data
//   }).done (function (response) {
//     $('#main').append('<p>' + $('#a').val() + ' - ' + $('#b').val() + ' <button>DELETE</button></p>')
//   }).fail(function (jqXHR, textStatus, errorThrown) {
//     console.log(errorThrown)
//   })
// })
})
