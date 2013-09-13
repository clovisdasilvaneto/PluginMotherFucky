$(document).ready(function(){

	//chamada do slider
	$("#motherFucky").motherFucky();

	//header
	$("#topo nav ul li a").click(function(){
		animaTopo($(this).parent().index());
	});

	//footer
	$("#footer nav ul li a").click(function(){
		animaTopo($(this).parent().index())
	});

	function animaTopo (index){
		switch (index){
			case 0:
				$("body,html").animate({"scrollTop":0},0);
				break;
			case 1: 
				$("body,html").animate({"scrollTop":500},500);
				break;
			case 2: 
				$("body,html").animate({"scrollTop":1070},500);
				break;
		}

		return false;
	}
});