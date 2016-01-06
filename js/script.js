$(document).ready(function(){
	$('#main-section').fullpage({
		anchors : ["home","products","services","about","contact"],
		menu    : "#mainNavi"
	});

	//displayData("#prodSlide","template/products.handlebars","data/products.json");
	
	// display data
	function displayData(elementTarget,templatePath,dataUrl) {
		$.ajax({
	  	dataType: "json",
	  	url: dataUrl,		    	
	  	success: function(datajson){
	  		console.log("ok");
	  		renderDataVisualsTemplate(elementTarget,templatePath,datajson);
	  	},
	  	error: function(){
	  		console.log("no");
	  	}
	  });
	}
	// render compiled handlebars template
	function renderDataVisualsTemplate(elementTarget,templatePath,data){
		renderHandlebarsTemplate(templatePath, elementTarget, data);
	};
	// render handlebars templates via ajax
	function getTemplateAjax(path, callback) {
	  var source, template;
	  $.ajax({
	    url: path,
	    success: function (data) {
	      source = data;
	      template = Handlebars.compile(source);
	      if (callback) callback(template);
	    }
	  });
	};		 
	// function to compile handlebars template
	function renderHandlebarsTemplate(withTemplate,inElement,withData){
	getTemplateAjax(withTemplate, function(template) {
	  $(inElement).html(template(withData));
	  })
	};

	function initialize() {
    	var mapOptions = {
    	  center: { lat: -7.106009, lng: 107.490123},
    	  zoom: 13
    	};
        
    	var map = new google.maps.Map(document.getElementById('maplocation'),
    	    mapOptions);

    	var marker = new google.maps.Marker({
           position: new google.maps.LatLng( -7.106009, 107.490123),
           map: map,
           title: 'Duta Niaga Sukses, CV \n Pasirjambu km. 3'
        });    	

    }
    google.maps.event.addDomListener(window, 'load', initialize);

    $(".btn-close-modal").click(function(){
    	$(this).parents(".popup-modal").addClass("hide");
    })
    $(".pm-btn-close").click(function(){
    	$(this).parents(".popup-modal").addClass("hide");
    })
    $(".ta-item a,.la-item a").click(function(){
    	$("#articleModal").removeClass("hide");
    })

    // services item popup showing up
    $(".readmore-sorting").click(function(){
    	$(".black-modal-sorting").removeClass("hide");
    })

    $(".readmore-machinery").click(function(){
    	$(".black-modal-machinery").removeClass("hide");
    })

    $(".readmore-tasting").click(function(){
    	$(".black-modal-tasting").removeClass("hide");
    })

    $(".readmore-consultant").click(function(){
    	$(".black-modal-consultant").removeClass("hide");
    })

    // products item full page showing up
    $("#page-products a.green-tea").click(function(){
    	$("#fullModal-green-tea").removeClass("hide");
    })

    $("#page-products a.black-tea").click(function(){
    	$("#fullModal-black-tea").removeClass("hide");
    })

    $("#page-products a.white-tea").click(function(){
    	$("#fullModal-white-tea").removeClass("hide");
    })

    $("#page-products a.herbal-tea").click(function(){
    	$("#fullModal-herbal-tea").removeClass("hide");
    })

});

$(window).load(function(){
	slidr.create('slidr-div',{
		breadcrumbs: true,
		controls: 'none',
		transition: 'fade'
	}).auto();
});