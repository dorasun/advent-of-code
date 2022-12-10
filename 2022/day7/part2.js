const fs = require("fs");

class TreeNode {
  constructor(name) {
    this.name = name;
    this.size = 0;
    this.parent = null;
    this.children = [];
  }
}

var score = 0;
var usedSpace = 0;
var firstNode = new TreeNode("filesystem");
var currentNode;
var parentNode = firstNode;
var pwd = [];
var allNodes = [];

fs.readFile("input.txt", 'utf8', (err, data) => {
	data.split("\n").forEach(line => {
		if (line.startsWith("$")){ //command
			if (line.split(" ")[1] == "cd"){
				var param = line.split(" ")[2];
				if (param == ".."){
					pwd.pop();
					currentNode = parentNode;
					parentNode = currentNode.parent;
				}
				else {
					pwd.push(param);

					currentNode = new TreeNode(pwd.join("/"));

					parentNode.children.push(currentNode);
					currentNode.parent = parentNode;			
					parentNode = currentNode;

					allNodes.push(currentNode);
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
			var leafSize = parseInt(line.split(" ")[0]);
			addSize(currentNode, leafSize);
		}
		
	});

	console.log(allNodes);
	firstNode.size = firstNode.children[0].size;
	
	usedSpace = firstNode.children[0].size;
	score = firstNode.children[0].size;
	processTree(firstNode.children[0]);
	console.log(score);
})

function addSize(node, nodeSize){
	if (node != firstNode){
		node.size += nodeSize;
		return (addSize(node.parent, nodeSize));
	}
	return;
}

function processTree(tree){
	// console.log(tree.name + " > " + tree.size);
	// console.log(tree);

	var unusedSpace = 70000000 - (usedSpace - tree.size);
	if (unusedSpace >= 30000000){
		if (tree.size < score){
			score = tree.size;
		}
	}

	tree.children.forEach(processTree);
}