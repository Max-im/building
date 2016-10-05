(function($) {
    // carousel
  $("#carousel").owlCarousel({
        items : 1,
        responsive: false,
        autoPlay : 4000,
        transitionStyle : "fade",
        pagination: true,
        navigation : false
  });

    $(".toggleMenu").on('click', function() {
      $(this).toggleClass("on");
      $(".mainMenu").slideToggle();
      return false;
    });


    $( "#accordion" ).accordion();


    var a = $.getJSON("../json/data.json", function(result){
          $.each(result, function(i, field){
              
              // console.log(JSON.parse(field));
              console.log(field);
          });
      });

    
  // console.log(a);


})(jQuery);
