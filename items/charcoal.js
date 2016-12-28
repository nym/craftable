"use strict";

var Item = require("../item");

var Charcoal = function() {
	var charcoal = {}

	charcoal.__proto__ = Item();

	charcoal.name = "charcoal";

	return charcoal;
}

Charcoal.cost = { "wood": 1 };

module.exports = Charcoal;
