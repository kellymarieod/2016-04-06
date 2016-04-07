// alert ("It's working!")
// ^ test for basic javascript connect to html

// $(document).ready( function() {
//   alert("Ca marche!");
// });
// ^ test for JQUERY connect to html ("When the document is ready, do this=function=send me an alert saying Ca march!")

$(document).ready( function() {
  $("#meow").click( function() {
    $("#animals").append("  <img src='images/cat.jpg' alt='cat in a roll' class='animal' />");
  });
});
