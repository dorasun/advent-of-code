const fs = require("fs");
var score = 0;

fs.readFile("input.txt", 'utf8', (err, data) => {
	data.split("\n").forEach(line => {
		var elf1 = line.split(",")[0].split("-");
		var elf2 = line.split(",")[1].split("-");
		
		if (
			   (parseInt(elf1[0]) >= parseInt(elf2[0]) && parseInt(elf1[0]) <= parseInt(elf2[1]))
			|| (parseInt(elf1[1]) >= parseInt(elf2[0]) && parseInt(elf1[1]) <= parseInt(elf2[1]))
			|| (parseInt(elf2[0]) >= parseInt(elf1[0]) && parseInt(elf2[0]) <= parseInt(elf1[1]))
			|| (parseInt(elf2[1]) >= parseInt(elf1[0]) && parseInt(elf2[1]) <= parseInt(elf1[1]))
		){
			console.log(elf1);
			console.log(elf2);
			score ++;
			console.log(score);
		}
	})

	console.log(score);
})