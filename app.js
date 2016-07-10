
console.log('app is running')
console.clear()

// *REFRESH
// SHOW CURRENT DATE AND TIME
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
//   DISPLAY TEXT 'BOO. BETTER NOT.'
//   DISPLAY FORECAST

$(document).ready(function () {
  console.log('ready?')
  var settings = {
  "async": true,
  "crossDomain": true,
  "url": "https://api.data.gov.sg/v1/environment/24-hour-weather-forecast",
  "method": "GET",
    "headers": {
    "api-key": "Sxjeo2nzIGmycwTIGiWlfgJKHYRGIBQW",
    }
  }

  $.ajax(settings).done(function (response) {
    console.log(response.items);
  });

  function reload () {
    $('#main').empty()
    $.get('https://api.data.gov.sg/v1/environment/24-hour-weather-forecast')
    .done(function (data) {
      console.log(forEach)
      data.forEach(function (datum) {
        $('#main').append('<p>AS OF' + datum.objects.items + '</p>')
        console.log('<p>AS OF' + datum.objects.items + '</p>')
      })
    }).fail(function (jqXHR, textStatus, errorThrown) {
      console.log(errorThrown)
    })
  }
  //
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
