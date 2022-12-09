const fs = require("fs");
var score = 0;
var x = 0; 
var y = 0;
var headCoords = [];
var knots = [];

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
		}
	});

	knots.push(headCoords);

	for(var index = 0; index < 9; index++){
		knots.push(followTheLeader(knots[index]));
	}
	
	console.log(knots);
	var knotSet = new Set();
	knots[9].forEach(function(k){
		knotSet.add(k[0]+","+k[1]);
	});
	console.log(knotSet.size);

	// console.log(tailCoords);
})

function followTheLeader(leader){
	var a = 0;
	var b = 0;
	var child = [];
	for (var i = 0; i < leader.length; i++){
		var xl = leader[i][0];
		var yl = leader[i][1];

		if (Math.abs(xl - a) > 1 || Math.abs(yl - b) > 1){
			if (xl > a){
				a++;
			}
			else if (xl < a){
				a--;
			}

			if (yl > b){
				b++;
			}
			else if (yl < b) {
				b--;
			}
		}
		child.push([a,b]);
	}
	return child;
}