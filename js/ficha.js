$(document).ready(function() {
  var owl1 = $("#crsl-dtl");
  var owl3 = $("#owl-lmsv");
  var owl4 = $(".slider-acc");
  var planes = $(".wrp-opciones");
  var menu = $(".prsn-tbl");
  
  $("#slider-prd").slick({
        infinite: true,
        arrows: false,
        autoplay:true,
        pauseOnHover:true
   });

  owl1.owlCarousel({
      itemsCustom : [
        [0, 1],
        [360, 1],
        [640, 3],
        [768, 3],
        [1000, 3]
      ],
      navigation : true,
      responsive : true,
      itemsScaleUp : false,
      rewindNav : false,
      pagination : false,
      scrollPerPage : false,
      theme : "owl-lmsv"
  });

  esptc();
  
  owl3.owlCarousel({
      itemsCustom : [
        [0, 1],
        [768, 3],
        [1026, 4]
      ],
      navigation : true,
      responsive : true,
      itemsScaleUp : false,
      rewindNav : false,
      pagination : false,
      scrollPerPage : false,
      theme : "owl-lmsv"
  });
  owl4.owlCarousel({
      itemsCustom : [
        [0, 2],
        [768, 5],
        [1026, 6]
      ],
      navigation : true,
      responsive : true,
      itemsScaleUp : false,
      rewindNav : false,
      pagination : false,
      scrollPerPage : false,
      theme : "owl-lmsv"
  });
  if(window.innerWidth <= 1024) {
    planes.owlCarousel({
        itemsCustom : [
          [0, 1],
          [768, 3],
          [1026, 5]
        ],
        navigation : true,
        responsive : true,
        itemsScaleUp : false,
        rewindNav : false,
        pagination : false,
        scrollPerPage : false,
        theme : "owl-lmsv"
    });
  }
  if(window.innerWidth > 640) {
  menu.owlCarousel({
      itemsCustom : [
        [0, 1],
        [768, 3],
        [1026, 4]
      ],
      navigation : true,
      responsive : true,
      itemsScaleUp : false,
      rewindNav : false,
      pagination : false,
      scrollPerPage : false,
      theme : "owl-lmsv"
  });
}

	$('#slider-prd').bxSlider({
	  pager : false,
	  auto : true,
	  autoStart : true,
	  controls : false,
	  autoControls: false,
	  responsive : false,
	  touchEnabled : true,
    oneToOneTouch : true
	});
	
	$(".btn-lgcd").click(function(event) {
		event.preventDefault();
	    $("html, body").animate({scrollTop: $("#destino").offset().top}, 2000);
	});

  var itemprev = "";
  var std = true;
/*
  $(".btn-psnl").click(function(event){
    event.preventDefault();
      var item = $(this).parent();
      item = $(item).parent();
      var i = $(item).attr("id");
      item = "#"+i;
      $(item).toggleClass("activo",true);
      $(item2).toggleClass("activo",false);
      console.log(item);
  })
*/
  $(".btn-dtll").click(function(event){
    event.preventDefault();
      var item = $(this).parent().parent();
      var i = $(item).attr("id");
      item = "#"+i;
      console.log(item);
      
      $(item).toggleClass("select",true);
      
      if(itemprev =""){
        itemprev = item;
      } else {
        $(itemprev).toggleClass("select",false);
      }

  })
  //centrar el precio verticalmente
  function centrarvrt(div){
    var hgdv = $(div).height();
    var pos = (hgdv / 2) + 50;
    pos = "-"+pos+"px";
    $(div).css("margin-top",pos);
    console.log(pos);
  }

  
});//end ready
window.addEventListener("resize", function(){
  esptc();
});

function esptc(){
  var owl2 = $(".crsl-items");
  var cgitem = document.getElementById("cgitem").value;

  if(window.innerWidth > 640) {
    console.log("detectado no-movil")
    if(cgitem > 5 ){
      carrusel(owl2);
    }
  } else {
    console.log("detectado movil")
    if(cgitem > 2 ){
      carrusel(owl2);
    }
  }
}
function carrusel(box){
    box.owlCarousel({
      itemsCustom : [
        [0, 2],
        [641, 5]
      ],
      navigation : true,
      responsive : true,
      itemsScaleUp : false,
      rewindNav : false,
      pagination : false,
      scrollPerPage : false,
      theme : "owl-lmsv"
    });
  }