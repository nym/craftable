import Item from '../Item';

class Stone extends Item {
	constructor(name) {
    	super("Stone")
	}

	created() {
		console.log("Created a Stone. It's heavy.");
	}

	destroy() {
		console.log("Broke the stone up into little bits.")
	}
}

export default Stone;
