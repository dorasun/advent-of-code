const fs = require("fs");
var score = 0;

function main(){
	fs.readFile("input.txt", 'utf8', (err, data) => {
		data.split("\n").forEach(line => {
			
		});
		console.log(score);
	})
}

main();