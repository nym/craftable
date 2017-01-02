import Item from '../Item';

class Mortar extends Item {
	constructor(name) {
    	super("Mortar")
	}

	created() {
		console.log("It's mortar. Helps bind stones into a wall.");
	}

	destroy() {
		console.log("Mortar destroyed.")
	}
}

export default Mortar;
