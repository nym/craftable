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
inventory.push(Factory.create("stone"));
inventory.push(Factory.create("stone"));
inventory.push(Factory.create("stone"));
inventory.push(Factory.create("stone"));
inventory.push(Factory.create("stone"));
inventory.push(Factory.create("mortar"));
inventory.push(Factory.create("mortar"));
inventory.push(Factory.create("mortar"));

console.log({"inventory": inventory})
var newInventory = Factory.exchange(inventory, "wall");

console.log({"inventory": newInventory});
console.log("Game over.");

