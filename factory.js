"use strict";

var Stone = require("./stone");
var Mortar = require("./mortar");

var Wall = require("./wall");
var _ = require("lodash");

var ExchangeRate = {
	"Wall": {
		"Stone": 5,
		"Mortar": 3
	}
}
function create(type) {
	var item = undefined;
  	switch(type) {
  		case "Wall":
  			item = new Wall();
  			break;
  		case "Mortar":
  			item = new Mortar();
  			break;
  		case "Stone":
  			item = new Stone();
  			break;
  }
  if (item !== undefined) {
  	item.init();
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
