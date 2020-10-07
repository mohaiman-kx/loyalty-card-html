$(document).ready(function(){
    $("#loyalty-card-btn").click(function(){
      $(".give-phone-number-area").show('fast');
      $('#loyalty-card-btn').addClass('btn-active');
    });
    
});


var i =30;
var fade_in = function() {
  $("#resend").fadeIn();
    clearInterval(counter);
};
setTimeout(fade_in, 28000);

function count() {  $("#counter").html(i--); }
var counter = setInterval(function(){ count(); },900);
setTimeout(function () { $('.timer').hide(); }, 28000);

