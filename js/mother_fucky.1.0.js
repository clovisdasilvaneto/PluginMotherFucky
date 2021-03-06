
			$.fn.motherFucky = function(options){
				//opções do slider
				options = $.extend({
					speed: 1500,
					time: 3000
				},options);

				return this.each(function(){
					var $objeto = $(this);

					//verifica se as imagens estão escondidas
					if($objeto.find("img").css("display") != "none"){
						$objeto.find("img").hide();
					}

					$objeto.addClass("motherFucky").css("position","relative").find("img:eq(0)").show().addClass("ativo").end().find("img").css({
							"position":"absolute",
							"top":0,
							"max-width":"100%"
					});

					var intervalo = setInterval(slide,options.time);

					function slide(){
						var $obj = $(".ativo");
						if($obj.next().size()){
							$obj.fadeOut(options.speed).removeClass("ativo").next().fadeIn(options.speed).addClass("ativo");
						}else {
							$obj.fadeOut(options.speed).removeClass("ativo");
							$objeto.find("img:eq(0)").fadeIn(options.speed).addClass("ativo");
						}
					}
				});
			}