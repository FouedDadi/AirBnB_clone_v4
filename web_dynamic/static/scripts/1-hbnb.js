$(document).ready(function () {
  const list = {};
  $('INPUT[type="checkbox"]').click(function () {
    if (this.checked) {
      list[$(this).attr('data-name')] = $(this).attr('data-id');
    } else {
      delete list[$(this).attr('data-name')];
    }
    text = Object.values(list).join(', ')
    $('DIV.amenities h4').text(Object.values(list).join(', '))
  });
});
