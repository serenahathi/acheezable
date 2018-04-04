$(document).ready(function() {
  // $('#checkbox_group').change(function() {
  //   if($(this).prop('checked')) {
  //     alert('Success!');
  //   }
  // });
  console.log("jQuery rocks / sucks!")
  var allCheckBoxes = $("[id^='checkbox']")
  var count_checked = allCheckBoxes.filter(":checked").length;
  if (count_checked == allCheckBoxes.length) {
    alert("Success!");
  }
});







// var allCheckBox = $("[id^='data']")
// var count_checked = allCheckBox.filter(":checked").length; 
// if (count_checked == 0)  {
//     alert("All check boxes are not checked");
// } else if(count_checked != allCheckBox.length) {
//     alert("some of the check boxs are not checked");
// } else{     
//     return confirm("Are you sure you want to Close these Packet?");
// }