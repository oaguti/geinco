$(document).ready(function() {
    //calcular(".tbl");
    calcularJS.init(".tbl",".cl50");

	$('#slides').superslides({
      animation: 'fade',
      hashchange: true,
      play: 5000
    });
    $(".owl-carousel").owlCarousel({
    	loop : true,
    	nav : false,
    	dots : false,
    	margin : 0,
    	autoplay : true,
    	responsive:{
	        0:{items:1}
    	}
    });
    $("#bt_movil").click(function(){
    	if(std){
    		$("#menu_mbl").slideDown(function(){std = false});
    	} else {
    		$("#menu_mbl").slideUp(function(){std = true;});
    	}   	
    });
}); //final de carga de pagina
var std = true;
function clhw() {
    var hw1 = document.getElementById("cont").clientHeight;
    console.log("altura: "+hw1);
}

function calcular(a){
	a1 = $(a).height();
	a2 = $(window).height();
	if(window.innerWidth > 768) {
		if( a1 > a2 ){
			altura = a1+60;
			$(a).css("height", altura);
			//console.log("div es mayor que la ventana del navegador, nueva altura :"+altura);
		} else  {
			altura = a2;
			$(a).css("height", altura);
			//console.log("div es menor que la ventana del navegador, nueva altura :"+altura);
		}
	}	
}

calcularJS = {

    init: function(a,b){
        a1 = $(a).height();
        a2 = $(window).height();
        if(window.innerWidth > 768) {
            
            if( a1 > a2 ){
                altura = a1+60;
                $(a).css("height", altura);
                //console.log("div es mayor que la ventana del navegador, nueva altura :"+altura);
            } else  {
                altura = a2;
                $(a).css("height", altura);
                //console.log("div es menor que la ventana del navegador, nueva altura :"+altura);
            }
        } else {
            if(window.innerWidth > 640) {
                altura = a2;
                $(b).css("height", altura);
                c = $(".cl50").height();
                console.log("altura de contenido :"+c);
            } 
        }
    }
}

window.addEventListener("resize", function(){
  	//calcular(".tbl");
    calcularJS.init(".tbl",".cl50");
});