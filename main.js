var Factory = require("./factory");

var ms = 0;
var items = [];

console.log("Craftable Items: " + Factory.list());

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
var wood = Factory.create("wood")
inventory.push(wood);

console.log({"inventory": inventory})
var newInventory = Factory.exchange(inventory, "wall");

console.log({"inventory": newInventory});
var charcoal = wood.burn();
console.log(charcoal);

console.log("Game over.");

