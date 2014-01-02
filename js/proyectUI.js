(function (){
	var root = this;
	
	
	function createProyectDOM(proyect){
		/*CREACION*/		
		var $li = $('<li>');
		
		var $div = $('<div id="proyect-'+proyect.getId()+'"  mode="read">');
			$li.append($div);
		
		var $input = $('<input type="text" >');			
			$input.on('keypress',PRO_APP.modProyectDOM);
			$div.append($input);	

		var $span = $('<span>'+proyect.getTitle()+'</span>');
			$span.on('dblclick',function(){	
				$div.attr('mode','edit');
				$input.val(proyect.getTitle()); 
				$input.focus();	
				render($li);							
			});
			$div.append($span);


		var $button = $('<button >x</button>');
			$button.on('click',function(){
				PRO_APP.delProyectDOM($div);
			});

		
		
		
		$div.append($button);
		

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
