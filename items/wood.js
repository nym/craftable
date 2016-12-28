"use strict";

var Item = require("../item");
var Factory = require("../factory");

var Wood = function() {
	var wood = {}

	wood.__proto__ = Item();

	wood.name = "wood";

	wood.burn = function() {
		console.log("Burning wood...");
		return Factory.exchange([this], "charcoal");
	}

	return wood;
}


module.exports = Wood;
