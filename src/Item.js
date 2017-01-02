class Item {
	constructor(name) {
    	this.name = name || "Item";
    	this.alive = true;
    	this.created();
	}

	created() {
		console.log("Created!");
	}

	destroy() {
		this.alive = false;
	}
}

export default Item;
