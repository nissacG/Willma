// Collapse Navbar
var navbarCollapse = function() {
  if ($(document).scrollTop() > 50) {
    $(".navbar").addClass("d-none");
  } else {
    $(".navbar").removeClass("d-none");
  }
};
// Collapse if page is not at top
navbarCollapse();
// Collapse the navbar when page is scrolled
$(window).scroll(navbarCollapse);

// Hide navbar when modals trigger

// $(".portfolio-modal").on("show.bs.modal", function(e) {
//   $(".navbar").addClass("d-none");
// });
// $('.portfolio-modal').on('hidden.bs.modal', function(e) {
//   $(".navbar").removeClass("d-none");
// });