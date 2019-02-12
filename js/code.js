// scroll bar and blur first section
$(document).scroll(function(){
  $('.banner').toggleClass('scrolled', $(this).scrollTop() > $('.banner').height());
});



window.onscroll = function() {scrollFunction()};
function scrollFunction() {
if (document.body.scrollTop > 800 || document.documentElement.scrollTop > 800 ) {
document.getElementById("myBtn").style.display = "block";
} else {
document.getElementById("myBtn").style.display = "none";
}
}
// When the user clicks on the button, scroll to the top of the document
function topFunction() {
document.body.scrollTop = 0; // For Safari
document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

