const fs = require("fs");
var score = 0;
var width = 0;

var forest = [];
fs.readFile("input.txt", 'utf8', (err, data) => {
	width = data.split("\n").length;
	data.split("\n").forEach(line => {
		forest.push(line.split(""));
	});

	// console.log(width);
	// console.log(forest);

	for(var x = 0; x < width; x ++){
		for (var y = 0; y < width; y++){
			if (x == 0 || y == 0 || x == width - 1 || y == width -1){
				score ++;
			}
			else{
				if(evaluateTree(x,y)){
					score ++;
				}
			}
		}
	}

	console.log(score);
})

function evaluateTree(x, y){
	var visibleL = true;
	var visibleT = true;
	var visibleR = true;
	var visibleB = true;

	for (var a = 0; a < x; a++){
		if (forest[x][y] <= forest[a][y]){
			visibleL = false;
		}
	}

	for (var b = 0; b < y; b++){
		if (forest[x][y] <= forest[x][b]){
			visibleT = false;
		}
	}

	for (var c = width - 1; c > x; c--){
		if (forest[x][y] <= forest[c][y]){
			visibleR = false;
		}
	}

	for (var d = width - 1; d > y; d--){
		if (forest[x][y] <= forest[x][d]){
			visibleB = false;
		}
	}

	var visible = visibleL || visibleT || visibleR || visibleB;
	console.log(x + "," + y + ": " + visibleL + visibleT + visibleR + visibleB)
	return visibleL || visibleT || visibleR || visibleB;
}