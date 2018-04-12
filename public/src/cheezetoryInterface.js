$(document).ready(function() {

  $('.days').click(function() {
   let i = $(this).val()
   if ($(`#day${i}`).html()) {
     let completionArray = $(`#day${i}`).html().trim().split(',');
     let newHTML = ''
     for (let j = 0; j < (completionArray.length); j += 2) {
       if (completionArray[j + 1] === "true") {
         newHTML += `<div class="true">${completionArray[j]}  </div>`;
       } else {
         newHTML += `<div class="false">${completionArray[j]}  </div>`;
       }
     }
     $(`#day${i}`).html(newHTML);
     $(`#day${i}`).toggleClass('hide');
   }
  });
});
