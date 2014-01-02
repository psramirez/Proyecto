(function (){

	$(document).ready(function(){
	   $('input#new-proyect').on('keypress',addProyect);


	function addProyect(){
		var text = $.trim($(this).val()); 
	    if(event.keyCode===13 && text!=''){    	
	    	proyect = PRO_APP.addProyect(text);//dominio
	    	createLi(proyect);

	    	$(this).val('');
	    }
	};
	function modProyect(){
		var text = $.trim($(this).val());
		if(event.keyCode===13 && text!=''){    	
	    	var idProyect = $(this).siblings().find('input');
	    	console.log(idProyect);
	    	//createLi(proyect);

	    	//$(this).val('');
	    }	
	}

	function delProyect(){
		console.log(borrado);
	}

	function createLi(proyect){
		/*CREACION*/
		var that = this;
		var $li = $('<li>');
		var $div = $('<div>');
		
		var $input = $('<input type="text" id="proyect-'+proyect.getId()+'" value="'+proyect.getTitle()+'">');
			$input.on('dblclick',function(){
				$div.append($button);
			});
			$input.on('keypress',modProyect);


		var $button = $('<button id="del-proyect">x</button>');
			$button.on('click',function(){
				var idProyect = $input.attr('id').substring(8);
				PRO_APP.delProyect(idProyect);//dominio

				$li.remove();
			});

		/*AÑADIR AL DOM*/
		$div.append($input);	
		$li.append($div);	
		$('ul#list-proyects').append($li);

	
		

		
	};
	 

	});

})();

