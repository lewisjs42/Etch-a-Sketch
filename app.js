function createContainer() {
	let new_container = document.createElement('div');
	new_container.setAttribute('id', 'container');
	main.appendChild(new_container);
}

function reset() {
	main.removeChild(container);
	createContainer();
	start();
}
	

function start() {
	const main = document.querySelector('#main');
	const container = document.querySelector('#container');
	
	let size = 60;
	
	let i = 1;
	let z = 1;
	
	let div;
	let column;

	//Creates a single div element.
	function createDiv() {
		div = document.createElement('div');
		div.classList.add('div');
		
		div.addEventListener("mouseover", mouseHover);
		div.addEventListener("touchmove", mouseHover); //For touchscreen support, if it works.
		//div.addEventListener("click", mouseHover);
		
		column.appendChild(div);
		//Scales the size of the pixels to fit the canvas.
		let pixel_size = 600 / size;
		let pixel_css = pixel_size + "px";
		div.style.width = pixel_css;
		div.style.height = pixel_css;
	}
	
	//Creates a column of divs based on size prompt.
	function createColumn() {
		column = document.createElement('div');
		column.classList.add('column');
		
		for (; i <= size; i++) {
			createDiv();
		}
		container.appendChild(column);
		
		i = 1;
	}
	
	//Creates a row of columns based on size prompt.
	function createRow() {
		for (; z <= size; z++) {
			createColumn();
		}
		
		z = 1;
	}
	
	//Changes the color of the div.
	function mouseHover() { 
		//Checks if the user selected the random color button.
		if (is_random_color == true) {
			//Color order is: red, orange, yellow, green, blue, indigo, violet.
			let random_color = ['#F44336', '#FF9800', '#FFEB3B', '#4CAF50', '#2196F3', '#3F51B5', '#9C27B0'];
			let color = random_color[Math.floor(Math.random() * random_color.length)];
			this.style.backgroundColor = color;
		} else {
			this.style.backgroundColor = color;
		}
	}
	
	size = prompt("New Image Size (Max size is 60.)", 60);
	
	while (size > 60) {
		size = prompt("New Document Size:", 60);
	}
	
	createRow();
	
}

//Allows the user to pick a color.
let color = '#374046'; //Default color.
let is_random_color = false;

function colorSelect(c) {
	is_random_color = false;
	color = c;
}

function colorRandom() {
	is_random_color = true;
}

//Starts the app on launch.
start();