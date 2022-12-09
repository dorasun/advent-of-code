const fs = require("fs");
var score = 0;
var x = 0; 
var y = 0;
var xt = 0;
var yt = 0;
var headCoords = [];
var tailCoords = new Set();

fs.readFile("input.txt", 'utf8', (err, data) => {
	data.split("\n").forEach(line => {
		var direction = line.split(" ")[0];
		var count = line.split(" ")[1];

		for(var i = 0; i < count; i++){
			switch(direction){
				case "R":
					x++;
					break;
				case "U":
					y++;
					break;
				case "L":
					x--;
					break;
				case "D":
					y--;
					break;
			}
			headCoords.push([x,y]);
			console.log("head\n"+[x,y]);			
			console.log("tail\n"+xt+","+yt);
			
			if (Math.abs(x - xt) > 1 || Math.abs(y - yt) > 1){
				if (x > xt){
					xt++;
				}
				else if (x < xt){
					xt--;
				}

				if (y > yt){
					yt++;
				}
				else if (y < yt) {
					yt--;
				}
			}

			tailCoords.add(xt+","+yt);
			console.log("tail\n"+xt+","+yt);			
		}
	});
	console.log(tailCoords);
	console.log(tailCoords.size);
})