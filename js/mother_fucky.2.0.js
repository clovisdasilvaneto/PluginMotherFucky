
			$.fn.motherFucky = function(options){
				//opções do slider
				options = $.extend({
					speed: 1500,
					time: 3000,
					legend: false
				},options);

				return this.each(function(){
					var $objeto = $(this);
					height = $objeto.find("img:eq(0)").height();
					width = $objeto.find("img:eq(0)").width();
					var legendaImagem = $objeto.find("img:eq(0)").data("legend");

					$objeto.prepend("<nav id='controlMotherFucky'><ul></ul></nav>");

					//verifica se há uma legenda nas imagens
					$objeto.find("img").each(function(){
						//adiciona os controladores
						$("#controlMotherFucky ul").append("<li>1</li>");
						if($(this).data("legend")){
							return options.legend = true;
						}
					});

					$("#controlMotherFucky li:eq(0)").addClass("ativoControl");

					if(options.legend){
						$objeto.prepend("<p class='legend'></p>");
					}

					//verifica se as imagens estão escondidas
					if($objeto.find("img").css("display") != "none"){
						$objeto.find("img").hide();
					}

					$objeto.addClass("motherFucky").css({
						"height":height+"px",
						"width":width+"px"
					}).find("img:eq(0)").show().addClass("ativo").end().find("img").css({
							"height":height+"px",
							"width":width+"px",
					});

					if(legendaImagem){
						$(".legend").html(legendaImagem).fadeIn(500);
					}

					var intervalo = setInterval(slide,options.time);

					function slide(){
						var $obj = $(".ativo");
						if($obj.next().size()){
							
							$obj.fadeOut(options.speed).removeClass("ativo").next().fadeIn(options.speed).addClass("ativo");
							
							//controladorew
							$(".ativoControl").removeClass("ativoControl").next().addClass("ativoControl");
							
							//verifica se há uma legenda na proxima imagem
							legendaImagem = $(".ativo").data("legend");
							if(legendaImagem){
								//esconde a legenda
								$(".legend").fadeOut(800,function(){
									$(this).html(legendaImagem).fadeIn(800);
								});
							}else{
								//esconde a legenda
								$(".legend").fadeOut(800);
							}
						}else {
							
							$obj.fadeOut(options.speed).removeClass("ativo");
							$objeto.find("img:eq(0)").fadeIn(options.speed).addClass("ativo");

							//verifica se há uma legenda na proxima imagem
							legendaImagem = $(".ativo").data("legend");
							if(legendaImagem){
								//esconde a legenda
								$(".legend").fadeOut(800,function(){
									$(this).html(legendaImagem).fadeIn(800);
								});
							}else{
								//esconde a legenda
								$(".legend").fadeOut(800);
							}

							//controladorew
							$(".ativoControl").removeClass("ativoControl");
							$("#controlMotherFucky li:eq(0)").addClass("ativoControl");
						}
					}

					$("#controlMotherFucky li").click(function(){
						var $objetoControl = $(this);
						//verifica se o controlador clicado
						// não é o controlador que está ativo
						if(!$(this).hasClass("ativoControl")){
							clearInterval(intervalo);

							var eq = $objetoControl.index();
							var $obj = $(".ativo");

							//faz o tratamento com a imagem ativa
							$obj.fadeOut(options.speed).removeClass("ativo");
							$objeto.find("img:eq("+eq+")").fadeIn(options.speed).addClass("ativo");

							//verifica se há uma legenda na proxima imagem
							legendaImagem = $(".ativo").data("legend");
							if(legendaImagem){
								//esconde a legenda
								$(".legend").fadeOut(800,function(){
									$(this).html(legendaImagem).fadeIn(800);
								});
							}else{
								//esconde a legenda
								$(".legend").fadeOut(800);
							}

							//faz o tratamento com o controlador ativo
							$(".ativoControl").removeClass("ativoControl");
							$objetoControl.addClass("ativoControl");
							
							intervalo = setInterval(slide,options.time);
						}

					});
				});
			}