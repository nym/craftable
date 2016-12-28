"use strict";

var Item = require("../item");

var Stone = function() {
	var stone = {}

	stone.__proto__ = Item();

	stone.name = "stone";

	return stone;
}

module.exports = Stone;
