const fs = require("fs");
var score = 0;

fs.readFile("input.txt", 'utf8', (err, data) => {
	data.split("\n").forEach(line => {
		var oppoMove = line.split(" ")[0];
		var myMove = line.split(" ")[1];

		switch (myMove){
			case "X":
				score += 0;	// lose
				break;
			case "Y": 
				score += 3; // draw
				break;
			case "Z":
				score += 6; // win
				break;
		}

		switch (line){
			case "A Y":
			case "B X":
			case "C Z":
				score += 1;	// throw rock
				break;
			case "A Z":
			case "B Y":
			case "C X":
				score += 2; // throw paper
				break;
			case "A X":
			case "B Z":
			case "C Y":
				score += 3;	// throw scissor
				break;
		}
	})

	console.log(score);
})