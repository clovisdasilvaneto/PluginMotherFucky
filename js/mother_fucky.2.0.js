
			$.fn.motherFucky = function(options){
				//opções do slider
				options = $.extend({
					speed: 1500,
					time: 3000,
					legend: false
				},options);

				return this.each(function(){
					var $objeto = $(this);
					//coloca a classe motherFucky
					$objeto.addClass("motherFucky");

					var $imagem = $objeto.find("img:eq(0)");
					width = $objeto.width();
					height = $objeto.height();
					var legendaImagem = $imagem.data("legend");

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

					//verifica se existe uma largura setada para o pai do slider
					if(!$objeto.width()){
						$objeto.css("width","500px");
					}
					//verifica se existe uma altura setada para o pai do slider
					if(!$objeto.height()){
						$objeto.css("height","250px");
					}

					$objeto.show().find("img:eq(0)").show(0).addClass("ativo").end().find("img").css({
							"width":"100%",
							"height":"100%"
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
							$imagem.fadeIn(options.speed).addClass("ativo");

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