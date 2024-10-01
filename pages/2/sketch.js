function setup() {
	createCanvas(400, 400);
}

function draw() {
	background("darkblue");
	noStroke();

	fill("smokewhite");
	strokeWeight(2);
	circle(100, 100, 100);

	fill("grey");
	circle(100, 100, 10);
	circle(70, 80, 15);
	circle(80, 90, 10);
	circle(110, 120, 20);

	fill("smokewhite");
	circle(300, 200, 10)
	circle(200, 100, 15)
	circle(250, 250, 10)

	fill("darkgreen");
	rect(0, 350, 400, 50);

	fill("smokewhite");
	textSize(15);
	text("charli xcx", 170, 300);
	text("brooke candy", 190, 320);

	fill("teal");
	rect(40, 250, 100, 100);

	fill("lightblue");
	rect(80, 310, 20, 40);
	rect(100, 270, 20, 20);

	fill("darkred");
	triangle(40, 250, 90, 190, 140, 250);
}

