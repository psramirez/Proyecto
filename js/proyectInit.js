(function (){
	var root = this;

	$(document).ready(function(){
	   $('input#new-proyect').on('keypress',PRO_APP.addProyectDOM);
	});  

	function addProyectDOM(){
		var text = $.trim($(this).val()); 
	    if(event.keyCode===13 && text!=''){    	
	    	proyect = PRO_APP.addProyect(text);
	    	var $item = PRO_APP.createItem(proyect);
	    	$('div#list-proyects').append($item);
	    	PRO_APP.renderItem($item);	    	
	    	$(this).val('');
	    }
	};
	function modProyectDOM($item){
		var $div = $item.find('div[name="proyect"]');
		var $input = $item.find('input[name="mod-proyect"]');
		var $span = $item.find('span[name="name-proyect"]');


		var text = $.trim($input.val());
		if(event.keyCode===13 && text!=''){ 
			var idProyect = $div.attr('id').substring(8);
			var proyect = PRO_APP.modProyect(idProyect,text);
			$span.text(proyect.getTitle());
			$div.attr('mode','read');
			PRO_APP.renderItem($item);
		}
	}

	function delProyectDOM($div){
		var idProyect = $div.attr('id').substring(8);
		PRO_APP.delProyect(idProyect);
		$div.parent().remove();
	}	
	 

	 if (!root.PRO_APP) {
        root.PRO_APP = {};
    }
    root.PRO_APP.addProyectDOM = addProyectDOM;
    root.PRO_APP.modProyectDOM = modProyectDOM;    
    root.PRO_APP.delProyectDOM = delProyectDOM;    
    
}).call(this);
