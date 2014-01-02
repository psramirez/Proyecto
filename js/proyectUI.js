(function (){
	var root = this;
	
	
	function createProyectDOM(proyect){
		/*CREACION*/		
		var $li = $('<li>');		

		var $div = $('<div id="proyect-'+proyect.getId()+'"  mode="read">');
		
		var $input = $('<input type="text" >');			
			$input.on('keypress',PRO_APP.modProyectDOM);

		var $span = $('<span>'+proyect.getTitle()+'</span>');
			$span.on('dblclick',function(){	
				$div.attr('mode','edit');
				$input.val(proyect.getTitle()); 
				$input.focus();	
				render($li);							
			});


		var $button = $('<button >x</button>');
			$button.on('click',function(){
				var idProyect = $div.attr('id').substring(8);
				PRO_APP.delProyect(idProyect);

				$li.remove();
			});

		/*AÑADIR AL DOM*/		
		$div.append($input);	
		$div.append($span);
		$div.append($button);
		$li.append($div);

		return $li;				
	};

	function render($li){	
		var $div = $li.find('div');
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
	 

	 if (!root.PRO_APP) {
        root.PRO_APP = {};
    }
    root.PRO_APP.createProyectDOM = createProyectDOM;
    root.PRO_APP.render = render; 
    
}).call(this);
