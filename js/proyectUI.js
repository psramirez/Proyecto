(function (){
	var root = this;
	
	
	function createItem(proyect){
		/*CREACION*/		
		var $item = $('<a href="#proyect-'+proyect.getId()+'" class="list-group-item">');
			$item.on('dblclick',function(){	
				PRO_APP.editItem($item);				
			});
		
		var $div = $('<div name="proyect" id="proyect-'+proyect.getId()+'"  mode="read" class="row">');
			$item.append($div);
			
		
		var $input = $('<input type="text" name="mod-proyect">');			
			$input.on('keypress',function(){
				PRO_APP.modProyectDOM($item);
			});
			$div.append($input);	

		var $span = $('<span name="name-proyect"class="glyphicon glyphicon-briefcase">'+proyect.getTitle()+'</span>');
			$div.append($span);


		var $button = $('<button name="del-proyect"class="glyphicon glyphicon-remove btn btn-danger"> </button>');
			$button.on('click',function(){
				PRO_APP.delProyectDOM($div);
			});		
			$div.append($button);

		var $badge = $('<span name="count-tasks"class="badge">0<span>');
			$div.append($badge);		
		
		

		return $item;				
	};

	function editItem($item){
		var $div = $item.find('div[name="proyect"]');
		var $input = $item.find('input[name="mod-proyect"]');
		var $span = $item.find('span[name="name-proyect"]');

		$div.attr('mode','edit');
		$input.val($span.text()); 
		$input.focus();		
		PRO_APP.renderItem($item);
	}


	function renderItem($item){			
		var $div = $item.find('div[name="proyect"]');
		var $input = $item.find('input[name="mod-proyect"]');
		var $span = $item.find('span[name="name-proyect"]');
		var $button = $item.find('button[name="del-proyect"]');
		var $badge = $item.find('span[name="count-tasks"]');
		
		if($div.attr('mode')==='read'){
			$input.addClass('hidden').removeClass('view');
			$span.addClass('view').removeClass('hidden');
			$button.addClass('hidden').removeClass('view');
			$badge.addClass('view').removeClass('hidden');			
		}else if($div.attr('mode')==='edit'){			
			$input.addClass('view').removeClass('hidden');
			$span.addClass('hidden').removeClass('view');
			$button.addClass('view').removeClass('hidden');	
			$badge.addClass('hidden').removeClass('view');

		}else{

		}
		return $item;
	}
	 

	 if (!root.PRO_APP) {
        root.PRO_APP = {};
    }
    root.PRO_APP.createItem = createItem;
    root.PRO_APP.editItem = editItem;
    root.PRO_APP.renderItem = renderItem; 
    
}).call(this);
