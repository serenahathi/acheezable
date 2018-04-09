$(document).ready(function() {

  var allGoals = $("[id^='goal']")
  var count_complete = $(".complete").length;
  console.log(count_complete)
  console.log(allGoals.length)
  if (count_complete == allGoals.length) {
    swal({
      title: 'Acheezement!',
      text: 'Well done you!',
      icon: './images/1.jpeg',
      imageWidth: 400,
      imageHeight: 200,
      imageAlt: 'Custom image',
      button: "Finish"
    })

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
        $('.footer').text(quote);
      }
    });
  };
  getNewQuote();
});
