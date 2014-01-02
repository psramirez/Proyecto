(function (){

	$(document).ready(function(){
	   $('input#new-proyect').on('keypress',addProyect);


	function addProyect(){
		var text = $.trim($(this).val()); 
	    if(event.keyCode===13 && text!=''){    	
	    	proyect = PRO_APP.addProyect(text);
	    	createLi(proyect);

	    	$(this).val('');
	    }
	};
	function modProyect(){
		var text = $.trim($(this).val());
		if(event.keyCode===13 && text!=''){ 
			var idProyect = $(this).parent().attr('id').substring(8);			
			var proyect = PRO_APP.modProyect(idProyect,text);
			$(this).next().text(proyect.getTitle());//span
		}
	}

	function delProyect(){
		console.log(borrado);
	}

	function createLi(proyect){
		/*CREACION*/
		var that = this;
		var $li = $('<li>');
		var $div = $('<div id="proyect-'+proyect.getId()+'">');
		
		var $input = $('<input type="text">');			
			$input.on('keypress',modProyect);

		var $span = $('<span>'+proyect.getTitle()+'</span>');
			$span.on('dblclick',function(){				
				$input.val(proyect.getTitle()); 
				$input.focus();
				$div.append($button);
			});


		var $button = $('<button id="del-proyect">x</button>');
			$button.on('click',function(){
				var idProyect = $div.attr('id').substring(8);
				PRO_APP.delProyect(idProyect);//dominio

				$li.remove();
			});

		/*AÑADIR AL DOM*/
		$div.append($input);	
		$div.append($span);
		$li.append($div);	
		$('ul#list-proyects').append($li);

	
		

		
	};
	 

	});

})();

