const fs = require("fs");
var x = 1;
var cycleCount = 0;
var signal = 20;
var sigStrength = 0;

fs.readFile("input.txt", 'utf8', (err, data) => {
	data.split("\n").forEach(line => {
		if (line == "noop"){
			cycleCount++;
		}
		else {
			cycleCount += 2;
			if (cycleCount >= signal){
				sigStrength += x * signal;
				signal += 40;
			}
			x += parseInt(line.split(" ")[1]);
		}
	});
	console.log(sigStrength);
})