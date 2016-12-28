"use strict";

var Item = function() {
	var item = {};

	item.name = "Item";
	item.alive = true;

	item.init = function() {
		//console.log("Creating " + this.name + "...");
		this.created();
	}

	item.created = function() {
	}

	item.destroy = function() {
		this.alive = false;
	}

	return item;
}

module.exports = Item;