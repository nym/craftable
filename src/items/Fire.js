import Item from '../Item';

class Fire extends Item {	
	constructor(name) {
    	super("Fire")
	}

	created() {
		super.created("It's a fire. You can burn wood in it.");
	}

	destroy() {
		console.log("Scattered the fire. It's just hot ash now.")
	}

	light() {
		// requires a flint
	}
}
Fire.cost = {"Wood": 10}

export default Fire;
