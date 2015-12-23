$(document).ready(function(){
	$('#main-section').fullpage({
		anchors : ["home","products","services","articles","about","contact"],
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
    	  center: { lat: -7.0433968, lng: 107.5492185},
    	  zoom: 13
    	};
    	var map = new google.maps.Map(document.getElementById('maplocation'),
    	    mapOptions);
    }
    google.maps.event.addDomListener(window, 'load', initialize);

    $(".btn-close-modal").click(function(){
    	$(this).parents(".popup-modal").addClass("hide");
    })
    $(".pm-btn-close").click(function(){
    	$(this).parents(".popup-modal").addClass("hide");
    })
    $(".readmore").click(function(){
    	$(".black-modal").removeClass("hide");
    })
    $(".ta-item a,.la-item a").click(function(){
    	$("#articleModal").removeClass("hide");
    })
    $("#page-products a").click(function(){
    	$("#fullModal").removeClass("hide");
    })
});

$(window).load(function(){
	slidr.create('slidr-div',{
		breadcrumbs: true,
		controls: 'none',
		transition: 'fade'
	}).auto();
	$("#prodSlide").owlCarousel({ 
      navigation : true, // Show next and prev buttons
      slideSpeed : 300,
      paginationSpeed : 400,
      singleItem:true 
  	});
});