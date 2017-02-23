import Item from '../Item';

class Wood extends Item {	
	constructor(name) {
    	super("Wood")
	}

	created() {
		super.created("It's some wood. Burn it for heat or energy.");
	}

	destroy() {
		console.log("Broke the wood up into little bits.")
	}
}

export default Wood;
