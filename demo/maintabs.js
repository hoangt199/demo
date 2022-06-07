
   $(function(){
      $('#tabcontent').load("MenuContentItem/tabcontent-1.html");
      $('#tabcontent-2').load("MenuContentItem/tabcontent-2.html"); 
      $('#tabcontent-4').load("MenuContentItem/tabcontent-4.html"); 
      $('#tabcontent-5').load("MenuContentItem/tabcontent-5.html"); 
   });
$(document).ready(function(){
    $(".tab-content-item").hide();
    $(".tab-content-item:first-child").fadeIn();
    $(".nav-tabs li").click(function(){ 
        $(".nav-tabs li").removeClass("active");
        $(this).addClass("active");
        $(".tab-content-item").hide();
        // show tab content
        let id_item_content = $(this).children("a").attr("href");
        $(id_item_content).fadeIn();
        return false;
    })
})