
	$(document).ready(function(){

		let lines = 8;
		let columns = 9;
		let squareKey = 5;
		var squareColor = '';

		for (var i = 1; i <= lines; i++) {
			
			for(var j = 1; j <= columns; j++) {
				
				if(j == squareKey && i == 1 || i == 3 || i == 8){
					squareColor = 'white';
				}else if(j == squareKey){
					squareColor = 'black'
				}else{
					squareColor = 'white'
				}	

				$('#divimage').append('<div class="square '+squareColor+ '" ></div>');
			}	

		}


	})