"use strict";

var Item = require("./item");

var Mortar = function() {
	var mortar = {}

	mortar.__proto__ = Item();

	mortar.name = "Mortar";

	return mortar;
}

module.exports = Mortar;
