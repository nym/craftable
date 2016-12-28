"use strict";

var Item = require("../item");

var Wall = function() {
	var wall = {}

	wall.__proto__ = Item();

	wall.name = "Wall";

	return wall;
}

Wall.cost = {
	"stone": 5,
	"mortar": 3
};

module.exports = Wall;
