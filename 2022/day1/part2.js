const fs = require("fs");
var calories = [];
var currentElfCalories = 0;

fs.readFile("input.txt", 'utf8', (err, data) => {
	data.split("\n").forEach(line => {
		if (line.length == 0){
			calories.push(currentElfCalories);
			currentElfCalories = 0;
		}
		else {
			currentElfCalories += parseInt(line);
		}
	});

	calories.sort(function(a, b){
		return a - b;
	});
	
	var elfCount = calories.length;
	console.log(calories[elfCount - 1] + calories[elfCount - 2] + calories[elfCount - 3]);
})