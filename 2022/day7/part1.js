const fs = require("fs");
var score = 0;
var tree = [];
var pwd = [];
var level = [];
var directories = [];

fs.readFile("input.txt", 'utf8', (err, data) => {
	data.split("\n").forEach(line => {
		if (line.startsWith("$")){ //command
			if (line.split(" ")[1] == "cd"){
				var param = line.split(" ")[2];
				if (param == ".."){
					pwd.pop();
					level.pop();
				}
				else {
					pwd.push(param)
					var levelAsPath = pwd.join("/")
					level.push(levelAsPath);
					tree[levelAsPath] = 0;
					directories.push(levelAsPath);
				}
			}
			else if (line.split(" ")[1] == "ls"){
				// do nothing
			}
		}
		else if (line.startsWith("dir")){ //directory
			// do nothing
		}
		else { //file
			level.forEach(function(l){
				tree[l] += parseInt(line.split(" ")[0]);
			});
		}
		// console.log(tree);
		// console.log(level);
	});

	 console.log(tree);
	// console.log(directories);
	directories.forEach(function(d){				
		if (tree[d] <= 100000){
			score += tree[d];
		}
	});

	console.log(score);
})