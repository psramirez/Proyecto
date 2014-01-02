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
			$div = $(this).parent();
			$div.attr('mode','read');
			render($div);
		}
	}

	function delProyect(){
		console.log(borrado);
	}

	function createLi(proyect){
		/*CREACION*/
		var that = this;
		var $li = $('<li>');
		var $div = $('<div id="proyect-'+proyect.getId()+'"  mode="read">');
		
		var $input = $('<input type="text">');			
			$input.on('keypress',modProyect);

		var $span = $('<span>'+proyect.getTitle()+'</span>');
			$span.on('dblclick',function(){	
				$div.attr('mode','edit');
				$input.val(proyect.getTitle()); 
				$input.focus();	
				render($div);							
			});


		var $button = $('<button >x</button>');
			$button.on('click',function(){
				var idProyect = $div.attr('id').substring(8);
				PRO_APP.delProyect(idProyect);//dominio

				$li.remove();
			});

		/*AÑADIR AL DOM*/
		$div.append($input);	
		$div.append($span);
		$div.append($button);

		$li.append($div);	
		$('ul#list-proyects').append($li);

		render($div);		
	};

	function render($div){		
		if($div.attr('mode')==='read'){
			$div.find('input').addClass('hidden').removeClass('view');
			$div.find('span').addClass('view').removeClass('hidden');
			$div.find('button').addClass('hidden').removeClass('view');
		}else if($div.attr('mode')==='edit'){			
			$div.find('input').addClass('view').removeClass('hidden');
			$div.find('span').addClass('hidden').removeClass('view');
			$div.find('button').addClass('view').removeClass('hidden');
		}
	}
	 

	});

})();

