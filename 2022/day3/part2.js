const fs = require("fs");
var score = 0;
var index = 0;
var groupBags = [];

fs.readFile("input.txt", 'utf8', (err, data) => {
	data.split("\n").forEach(line => {
		index ++;
		groupBags.push(line);
		
		if (index == 3){
			var common12 = groupBags[0].split("").filter(value => groupBags[1].split("").includes(value));
			console.log(common12);

			var badge = common12.filter(value => groupBags[2].split("").includes(value))[0];
			console.log(badge);

			var ascii = badge.charCodeAt(0);

			console.log(badge);
			console.log(ascii);

			if (badge.toUpperCase() != badge){	//lower case ascii is from 97-122
				var priority = ascii - 96;
				console.log(priority);
				score += (ascii - 96);
			}
			else {
				var priority = ascii - 38;
				console.log(priority);
				score += (ascii - 38);
			}	

			groupBags = [];
			index = 0;
		}
	})

	console.log(score);
})