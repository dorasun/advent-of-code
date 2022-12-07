const fs = require("fs");
var marker = [];
var index = 0;

fs.readFile("input.txt", 'utf8', (err, data) => {
	data.split("").forEach(line => {
		index++;
		if (marker.includes(line)){
			marker.splice(0, marker.indexOf(line) + 1);
			marker.push(line);
		}
		else{
			marker.push(line);
			console.log(marker);
			if (marker.length == 14){
				console.log(index);
				process.exit();	// only need the first 14
			}
		}
	});

})