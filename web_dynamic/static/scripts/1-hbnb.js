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
});
