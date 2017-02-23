import Alert from 'react-s-alert';

class Item {
	constructor(name) {
    	this.name = name || "Item";
    	this.alive = true;
    	this.created();
	}

	created(msg = "Created item.") {
		Alert.info(msg, {
	        position: 'top-right',
	        effect: 'stackslide',
	        timeout: 'none'
	    });

		console.log("Created: " + msg);
	}

	destroy() {
		this.alive = false;
	}
}

export default Item;
