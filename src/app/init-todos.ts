export class Init {
	load() {
		if (localStorage.getItem('todos') === null || localStorage.getItem('todos') === undefined) {
			console.log('No todos found.... Creating....');
			var todos  = [
	  			{
	  				text: "hola texto 1"
	  			},
	  			{
	  				text: "adios texto 2"
	  			},
	  			{
	  				text: "hastaluego texto 3"
	  			},
	  			{
	  				text: "periscopio texto 4"
	  			}
	  		];

	  		localStorage.setItem('todos', JSON.stringify(todos));
	  		return;
		} else {
			console.log('Found todos.....');

		}

	}

}
