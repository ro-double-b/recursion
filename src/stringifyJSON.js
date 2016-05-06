// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
	if(typeof(obj) === 'number' || obj === null || typeof(obj) === 'boolean') {
		return '' + obj + ''
	} 
	else if(typeof(obj) === 'string') {
		return '"' + obj + '"'
	}
	else if(Array.isArray(obj)) {
		if(obj[0] === undefined) {
			return '[]'
		} else {
			var arrayValue = []
			for(var i = 0; i < obj.length; i++) {
				arrayValue.push(stringifyJSON(obj[i]))
			}
			return '[' + arrayValue + ']'
		}
	}
};


