import Item from '../Item';

class Gasifier extends Item {
	constructor(name) {
    	super("Gasifier")
	}

	created() {
		console.log("Created gasifier. It's basically a small engine that runs on wood.");
	}

	destroy() {
		console.log("Gasifier dismantled.")
	}
}

export default Gasifier;
