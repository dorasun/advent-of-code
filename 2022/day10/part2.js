const fs = require("fs");
var x = 1;
var cycleCount = 0;
var currentLine = "";

fs.readFile("input.txt", 'utf8', (err, data) => {
	data.split("\n").forEach(line => {
		if (line == "noop"){
			draw();
		}
		else {
			var v = parseInt(line.split(" ")[1]);

			draw();
			draw();

			x += v;
			// console.log(cycleCount + " " + x);
		}
	});
})

function draw(){
	if (Math.abs(cycleCount - x) < 2){
		currentLine += "#";
	}
	else{
		currentLine += ".";
	}

	cycleCount++;
	if (cycleCount == 40){
		console.log(currentLine);
		currentLine = "";
		cycleCount = 0;
	}
}