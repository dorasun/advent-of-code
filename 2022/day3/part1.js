const fs = require("fs");
var score = 0;

fs.readFile("input.txt", 'utf8', (err, data) => {
	data.split("\n").forEach(line => {
		var bagSize = line.length / 2;
		console.log(bagSize);

		var bag1 = line.substr(0, bagSize ).split("");
		var bag2 = line.substr(bagSize, line.length -1).split("");
		console.log(bag1);
		console.log(bag2);
		
		var commonItem = bag1.filter(value => bag2.includes(value))[0];
		if (commonItem != undefined){
			var ascii = commonItem.charCodeAt(0);

			console.log(commonItem);
			console.log(ascii);

			if (commonItem.toUpperCase() != commonItem){	//lower case ascii is from 97-122
				var priority = ascii - 96;
				console.log(priority);
				score += (ascii - 96);
			}
			else {
				var priority = ascii - 38;
				console.log(priority);
				score += (ascii - 38);
			}		
		}
		
	})

	console.log(score);
})