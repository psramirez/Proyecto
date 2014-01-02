(function (){
	var root = this;

	$(document).ready(function(){
	   $('input#new-proyect').on('keypress',PRO_APP.addProyectDOM);
	});  

	function addProyectDOM(){
		var text = $.trim($(this).val()); 
	    if(event.keyCode===13 && text!=''){    	
	    	proyect = PRO_APP.addProyect(text);
	    	var $li = PRO_APP.createProyectDOM(proyect);
	    	$('ul#list-proyects').append($li);
	    	PRO_APP.render($li);	    	
	    	$(this).val('');
	    }
	};
	function modProyectDOM(){
		var text = $.trim($(this).val());
		if(event.keyCode===13 && text!=''){ 
			var idProyect = $(this).parent().attr('id').substring(8);//div			
			var proyect = PRO_APP.modProyect(idProyect,text);
			$(this).next().text(proyect.getTitle());//span
			$div = $(this).parent();
			$div.attr('mode','read');
			PRO_APP.render($div.parent());
		}
	}
	
	 

	 if (!root.PRO_APP) {
        root.PRO_APP = {};
    }
    root.PRO_APP.addProyectDOM = addProyectDOM;
    root.PRO_APP.modProyectDOM = modProyectDOM;    
    
}).call(this);
