$(document).ready(function() {
  console.log($('#day0'))  //.html().trim().split(','))
  let completionArray = $('.goals').html().trim().split(',');

  // $('.goals').forEach((goal) => {
  //   console.log(goal)
  // });

  // console.log(Array.from($('.goals'))[0].html())

console.log($('.goals').length)

  for (var i = 0; i < $('.goals').length; i++) {
    console.log($(`#day[i]`))
  }
});
