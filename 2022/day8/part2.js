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
	console.log(forest);

	for(var x = 1; x < width - 1; x ++){
		for (var y = 1; y < width - 1; y++){
			evaluateTree(x,y);				
		}
	}

	// evaluateTree(1,2);

	console.log(score);
})

function evaluateTree(x, y){
	var visibleL = [];
	visibleL.push(forest[x][y - 1]);
	var blockedL = forest[x][y] <= forest[x][y - 1];

	var visibleT = [];	
	visibleT.push(forest[x - 1][y]);
	var blockedT = forest[x][y] <= forest[x - 1][y];

	var visibleR = [];
	visibleR.push(forest[x][y + 1]);
	var blockedR = forest[x][y] <= forest[x][y + 1];

	var visibleB = [];
	visibleB.push(forest[x + 1][y]);
	var blockedB = forest[x][y] <= forest[x + 1][y];

	// console.log(visibleL);
	// console.log(visibleT);
	// console.log(visibleR);
	// console.log(visibleB);

	for (var a = y - 2; a >= 0; a--){
		if (!blockedL){
			visibleL.push(forest[x][a]);
			if (forest[x][y] <= forest[x][a]){
				blockedL = true;
			}
		}
	}

	for (var b = x - 2; b >= 0; b--){
		if (!blockedT){
			visibleT.push(forest[b][y]);
			if (forest[x][y] <= forest[b][y]){
				blockedT = true;
			}
		}
	}

	for (var c = y + 2; c < width; c++){
		if (!blockedR){
			visibleR.push(forest[x][c]);
			if (forest[x][y] <= forest[x][c]){
				blockedR = true;
			}
		}
	}

	for (var d = x + 2; d < width; d++){
		if (!blockedB){
			visibleB.push(forest[d][y]);
			if (forest[x][y] <= forest[d][y]){
				blockedB = true;
			}
		}
	}

	var visible = visibleL.length * visibleT.length * visibleR.length * visibleB.length;
	console.log(x + "," + y + ": ");

	console.log(visibleL);
	console.log(visibleT);
	console.log(visibleR);
	console.log(visibleB);
	if (visible > score){
		score = visible;
	}
}