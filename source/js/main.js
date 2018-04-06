$(document).ready(function () {
  $(".fa-bars").click(function () {
    $(".nav").slideToggle(500);
  });

  var topIcon = $('#tog-icon');
  if (topIcon) {
    $(window).on('scroll', function () {
      var topD = $(".menu > nav").offset().top;
      console.log(topD);
      if (topD >= 800) {
        $('.fa-chevron-up').addClass('visible');
        console.log($('.fa-chevron-up'));
      } else if (topD < 799) {
        $('.fa-chevron-up').removeClass('aaa')
      }
    })
  }
});
