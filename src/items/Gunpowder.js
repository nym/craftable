import Item from '../Item';

class Gunpowder extends Item {
	constructor(name) {
    	super("Gunpowder")
	}

	created() {
		console.log("Created gunpowder. Keep away from matches!");
	}

	destroy() {
		console.log("Gunpowder scattered.")
	}
}
Gunpowder.cost = { "Sulfur": 1, "Charcoal": 1};

export default Gunpowder;
