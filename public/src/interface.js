$(document).ready(function() {

  $('input[type=checkbox]').click(function() {
    var allCheckBoxes = $("[id^='goal']")
    var count_checked = allCheckBoxes.filter(":checked").length;
    console.log(allCheckBoxes.length)
    if (count_checked == allCheckBoxes.length) {
      $('#success').show();
    }
  })
});
