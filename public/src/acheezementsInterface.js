$(document).ready(function() {

    var allGoals = $("[id^='goal']")
    var count_complete = $(".complete").length;
    console.log(count_complete)
    console.log(allGoals.length)
    if (count_complete == allGoals.length) {
      $('#success').show();
    }
});
