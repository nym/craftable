import Item from '../Item';

class Sulfur extends Item {
	constructor(name) {
    	super("Sulfur")
	}

	created() {
		super.created("Created sulfur.");
	}

	destroy() {
		console.log("Sulfur scattered.")
	}
}

export default Sulfur;
