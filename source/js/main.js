$(document).ready(function () {
  $(".fa-bars").click(function () {
    $(".nav").slideToggle(500);
  });

  var topIcon = $('#tog-icon');
  if (topIcon) {
    $(window).on('scroll', function () {
      var topD = $(".right-post").offset().top;
      if (topD >= 800) {
        $('.fa-chevron-up').addClass('visible');
      } else if (topD < 799) {
        $('.fa-chevron-up').removeClass('visible')
      }
    })
  }
});
