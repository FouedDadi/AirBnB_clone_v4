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
  $.getJSON('http://0.0.0.0:5001/api/v1/status/', function (obj) {
    if (obj.status === 'OK') {
      $('DIV#api_status').addClass('available');
    } else {
      $('DIV#api_status').removeClass('available');
    }
  });
});
