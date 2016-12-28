"use strict";

var Item = require("../item");

var Wall = function() {
	var wall = {}

	wall.__proto__ = Item();

	wall.name = "Wall";

	return wall;
}

module.exports = Wall;
