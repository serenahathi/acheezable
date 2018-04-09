$(document).ready(function() {

 $('.days').click(function() {
   let i = $(this).val()
   let completionArray = $(`#day${i}`).html().trim().split(',');
   let newHTML = ''
   for (var j = 0; j < (completionArray.length); j += 2) {
     if (completionArray[j + 1] === "true") {
       newHTML += `<div class="true">${completionArray[j]}  </div>`;
     } else {
       newHTML += `<div class="false">${completionArray[j]}  </div>`;
     }
   }
   $(`#day${i}`).html(newHTML);
   $('.true').css('color', 'green');
   $('.false').css('color', 'red');
   $(`#day${i}`).toggleClass('hide');
 });

});
