"use strict";

var Item = require("./item");

var Stone = function() {
	var stone = {}

	stone.__proto__ = Item();

	stone.name = "Stone";

	return stone;
}

module.exports = Stone;
