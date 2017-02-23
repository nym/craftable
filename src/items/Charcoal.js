import Item from '../Item';

class Charcoal extends Item {
	constructor(name) {
    	super("Charcoal")
	}

	created() {
		super.created("Charcoal- it once was wood but then it got burnt.");
	}

	destroy() {
		console.log("Broke the charcoal up so now it's just a bunch of soot.")
	}
}

export default Charcoal;
