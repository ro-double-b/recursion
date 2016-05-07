// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className) {
	var nodes = [];
	function getElement(node) {
		if(node.classList !== undefined) {
			if(node.classList.contains(className)) {
				nodes.push(node)
			}
			for(var i = 0; i < node.childNodes.length; i++) {
				getElement(node.childNodes[i])
			}
		}
	}
	getElement(document.body)
	return nodes
};
