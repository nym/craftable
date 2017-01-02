import Item from '../Item';

class Wall extends Item {
	constructor(name) {
    	super("Wall")
	}

	created() {
		console.log("It's a wall.");
	}

	destroy() {
		console.log("Broke the wall so it's just a bunch of rocks.")
	}
}

Wall.cost = {"Stone": 5, "Mortar": 3};

export default Wall;
