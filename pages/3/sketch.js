let canvasMaxX = 300;
let canvasMaxY = 300;

function setup() {
	createCanvas(canvasMaxX, canvasMaxY);
}

function draw() {
	// Sfondo
	background("navy");

	// Testo coordinate
	let coordinates = "x = " + mouseX + ", y = " + mouseY/* + ", frame = " + frameCount*/;
	textSize(20);
	noStroke();
	fill("white");
	text(coordinates, 30, 30);

	// Stelle generate casualmente
	let xStar = 0, yStar = 0;
	for(let i = 0; i<5; i++) {
		stroke("white");
		strokeWeight(10);
		point(xStar, yStar);
		xStar = random(0, canvasMaxX);
		yStar = random(0, canvasMaxY/2);
	}

	// Linee
	stroke("white");
	strokeWeight(2);
	line(0, 0, mouseX, mouseY);
	line(mouseX, mouseY, canvasMaxX, canvasMaxY);
	line(0, mouseX, canvasMaxX, mouseY)
	line(mouseX, canvasMaxX, mouseY,0)
	
	// Cursore
	noStroke();
	circle(mouseX, mouseY, 20);

	// Luna
	circle(mouseX+90, mouseY-100, mouseY-110);

	// Casa
	fill("teal");
	quad(mouseX-80, mouseY-60, mouseX-20, mouseY-60, mouseX-20, mouseY, mouseX-80, mouseY);
	fill("red");
	triangle(mouseX-80, mouseY-60, mouseX-50, mouseY-110, mouseX-20, mouseY-60);
	
	// Prato
	fill("darkgreen");
	quad(0, mouseY, 300, mouseY, 300, 300, 0, 300);
}