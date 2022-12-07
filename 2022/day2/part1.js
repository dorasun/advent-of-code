const fs = require("fs");
var score = 0;

fs.readFile("input.txt", 'utf8', (err, data) => {
	data.split("\n").forEach(line => {
		var oppoMove = line.split(" ")[0];
		var myMove = line.split(" ")[1];

		switch (myMove){
			case "X":
				score += 1;
				break;
			case "Y": 
				score += 2;
				break;
			case "Z":
				score += 3;
				break;
		}

		switch (line){
			case "A X":
			case "B Y":
			case "C Z":
				score += 3;
				break;
			case "A Y":
			case "B Z":
			case "C X":
				score += 6;
				break;
			case "A Z":
			case "B X":
			case "C Y":
				score += 0;
				break;
		}
	})

	console.log(score);
})