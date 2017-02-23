import Item from '../Item';

class Flint extends Item {
	constructor(name) {
    	super("Flint")
	}

	created() {
		super.created("It's a bit of flint. Use it to start fires.");
	}

	destroy() {
		console.log("Broke the flint up into little shards.")
	}
}

export default Flint;
