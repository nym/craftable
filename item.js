"use strict";

var Item = function() {
	var item = {};

	item.name = "Item";
	item.alive = true;

	item.init = function() {
		console.log("Creating " + this.name + "...");
		this.created();
	}

	item.created = function() {
		console.log(this.name + " created!");
	}

	item.destroy = function() {
		console.log(this.name + " destroyed!");
	}

	return item;
}

module.exports = Item;