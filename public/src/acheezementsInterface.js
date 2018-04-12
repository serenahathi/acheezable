$(document).ready(function() {

  var allGoals = $("[id^='goal']")
  var count_complete = $(".complete").length;
  console.log(count_complete)
  console.log(allGoals.length)
  if (count_complete == allGoals.length && allGoals.length) {
    swal({
      title: "Success!",
      text: "You acheezed today",
      icon: "./images/star.gif",
      button: "Close"
    });
    $('#success').show();
  };

  function getNewQuote() {
    $.ajax({
      url: 'https://api.forismatic.com/api/1.0/',
      jsonp: 'jsonp',
      dataType: 'jsonp',
      data: {
        method: 'getQuote',
        lang: 'en',
        format: 'jsonp'
      },
      success: function(res) {
        let quote = res.quoteText;
        $("#motivation").click(function() {
          swal({
            icon: "./images/bolt.gif",
            text: quote,
            button: "Close",
            closeOnEsc: true,
            closeOnClickOutside: true
          });
        });
      }
    });
  };
  getNewQuote();
});
