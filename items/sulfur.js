"use strict";

var Item = require("../item");

var Sulfur = function() {
	var sulfur = {}

	sulfur.__proto__ = Item();

	sulfur.name = "sulfur";

	return sulfur;
}

module.exports = Sulfur;
