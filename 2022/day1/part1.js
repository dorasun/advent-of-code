const fs = require("fs");
var max = 0;
var currentElfCalories = 0;

fs.readFile("input.txt", 'utf8', (err, data) => {
	data.split("\n").forEach(line => {
		if (line.length == 0){
			if (currentElfCalories > max){
				max = currentElfCalories;
			}
			currentElfCalories = 0;
		}
		else {
			currentElfCalories += parseInt(line);
		}
	});
	
	console.log(max);
})