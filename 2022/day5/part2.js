const fs = require("fs");
var score = "";

var crates = [
	// ["Z", "N"],
	// ["M", "C", "D"],
	// ["P"]

	["R", "G", "J", "B", "T", "V", "Z"],
	["J", "R", "V", "L"],
	["S", "Q", "F"],
	["Z", "H", "N", "L", "F", "V", "Q", "G"],
	["R", "Q", "T", "J", "C", "S", "M", "W"],
	["S", "W", "T", "C", "H", "F"],
	["D", "Z", "C", "V", "F", "N", "J"],
	["L", "G", "Z", "D", "W", "R", "F", "Q"],
	["J", "B", "W", "V", "P"]
	
];

//             [G] [W]         [Q]    
// [Z]         [Q] [M]     [J] [F]    
// [V]         [V] [S] [F] [N] [R]    
// [T]         [F] [C] [H] [F] [W] [P]
// [B] [L]     [L] [J] [C] [V] [D] [V]
// [J] [V] [F] [N] [T] [T] [C] [Z] [W]
// [G] [R] [Q] [H] [Q] [W] [Z] [G] [B]
// [R] [J] [S] [Z] [R] [S] [D] [L] [J]

fs.readFile("input.txt", 'utf8', (err, data) => {
	data.split("\n").forEach(line => {
		var count = line.split(" ")[1];
		var fromIndex = parseInt(line.split(" ")[3]) - 1;
		var toIndex = parseInt(line.split(" ")[5]) - 1;

		var temp = [];
		var fromCrateIndex = crates[fromIndex].length - count;
		for(var x = 1; x <= count; x++){	
			crates[toIndex].push(crates[fromIndex].splice(fromCrateIndex, 1)[0]);
			console.log(crates);
		}
	});

	crates.forEach(crate => {
		score += crate[crate.length - 1];
	});
	console.log(score);
})