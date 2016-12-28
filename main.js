var Factory = require("./factory");

var ms = 0;
var items = [];

console.log("Start");

setInterval(
	function() {
		ms = ms + 100;
	},100
);

var inventory = []
// 5 stone
inventory.push(Factory.create("Stone"));
inventory.push(Factory.create("Stone"));
inventory.push(Factory.create("Stone"));
inventory.push(Factory.create("Stone"));
inventory.push(Factory.create("Stone"));
inventory.push(Factory.create("Mortar"));
inventory.push(Factory.create("Mortar"));
inventory.push(Factory.create("Mortar"));

console.log({"inventory": inventory})
var newInventory = Factory.exchange(inventory, "Wall");

console.log({"inventory": newInventory});
console.log("Game over.");

