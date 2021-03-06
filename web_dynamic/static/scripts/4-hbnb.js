const $ = window.$;
$(document).ready(function () {
  const list = {};
  $('INPUT[type="checkbox"]').click(function () {
    if (this.checked) {
      list[$(this).attr('data-id')] = $(this).attr('data-name');
    } else {
      delete list[$(this).attr('data-id')];
    }
    const text = Object.values(list).join(', ');
    $('DIV.amenities h4').text(text);
  });
  // HBNB 2
  $.get('http://0.0.0.0:5001/api/v1/status', function (obj) {
    if (obj.status === 'OK') {
      $('DIV#api_status').addClass('available');
    } else {
      $('DIV#api_status').removeClass('available');
    }
  });
  $.ajax({
    url: 'http://0.0.0.0:5001/api/v1/places_search',
    type: 'POST',
    data: JSON.stringify({}),
    contentType: 'application/json',
    dataType: 'json',
    error: function (e) {
      console.log(e);
    },
    success: function (data) {
      for (let x = 0; x < data.length; x++) {
        $('section.places').append(
          '<article>' +
                '<div class="title_box">' +
                  '<h2> ' + data[x].name + '</h2>' +
                  '<div class="price_by_night">' + data[x].price_by_night + '$</div>' +
                '</div>' +
                '<div class="information">' +
                  '<div class="max_guest"> ' + data[x].max_guest + ' Guest ' + '</div>' +
                  '<div class="number_rooms"> ' + data[x].number_rooms + ' Bedroom ' + '</div>' +
                  '<div class="number_bathrooms"> ' + data[x].number_bathrooms + ' Bathroom ' + '</div>' +
                '</div>' +
                '<div class="user">' +
                '<div class="description">' + data[x].description +
                '</div>' +
              '</article>');
      }
    }
  });
  $('BUTTON').click(function () {
    $.ajax({
      url: 'http://0.0.0.0:5001/api/v1/places_search',
      type: 'POST',
      data: JSON.stringify({ amenities: list }),
      contentType: 'application/json',
      dataType: 'json',
      error: function (e) {
        console.log(e);
      },
      success: function (data) {
        $('section.places').empty();
        for (let x = 0; x < data.length; x++) {
          $('section.places').append(
            '<article>' +
                '<div class="title_box">' +
                  '<h2> ' + data[x].name + '</h2>' +
                  '<div class="price_by_night">' + data[x].price_by_night + '$</div>' +
                '</div>' +
                '<div class="information">' +
                  '<div class="max_guest"> ' + data[x].max_guest + ' Guest ' + '</div>' +
                  '<div class="number_rooms"> ' + data[x].number_rooms + ' Bedroom ' + '</div>' +
                  '<div class="number_bathrooms"> ' + data[x].number_bathrooms + ' Bathroom ' + '</div>' +
                '</div>' +
                '<div class="user">' +
                '<div class="description">' + data[x].description +
                '</div>' +
              '</article>');
        }
      }
    });
  });
});
