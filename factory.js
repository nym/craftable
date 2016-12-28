"use strict";

var items = require('./items')
var _ = require("lodash");

var ExchangeRate = {
	"wall": {
		"stone": 5,
		"mortar": 3
	}
}
function create(type) {
	var item = undefined;
	if (items.hasOwnProperty(type)) {
		item = new items[type];
		item.init();
	} else {
		console.log("Error: Can't create what doesn't exist");
	}
	return item;
}


function exchange(arrayOfItems, type) {
	var output = [];
	var trash = [];
	var counter = {};
	console.log("Exchanging stuff in your inventory for a " + type)
	if (ExchangeRate.hasOwnProperty(type)) {
		var wantedItems = ExchangeRate[type];
		for (var wanted in wantedItems) {
			counter[wanted] = 0;
			for (var i=0; i<arrayOfItems.length; i++) {
				if (arrayOfItems[i].name == wanted) {
					trash.push(arrayOfItems[i]);
					counter[wanted] += 1
					if (counter[wanted] == ExchangeRate[type][wanted]) {
						// stop this itteration
						break;
					}
				}
			}
		}
		if (_.isEqual(counter,ExchangeRate[type])) {
			console.log("...");
			// delete everything in the trashg()
			for (var i=0; i<trash.length; i++) {
				trash[i].destroy();
			}
			output.push(create(type));
			console.log("Success! You now have a " + type)
		} else {
			console.log("Not enough items.")
			output = arrayOfItems;
		}
	} 
	return output;
}

module.exports.create = create;
module.exports.exchange = exchange;
