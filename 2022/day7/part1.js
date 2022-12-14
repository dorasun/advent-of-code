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

	//console.log(allNodes);
	processTree(firstNode);
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
	//console.log(tree.name);
	if (tree.size <= 100000){
		//console.log(tree.size);
		score += tree.size;
	}

	tree.children.forEach(processTree);
}