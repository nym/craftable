export default(state = [], payload) => {
    switch (payload.type) {
        case 'add':
	        let newState = { ...state }
	        let keyName = payload.item
	        newState[keyName] = newState[keyName]+1 || 1;
            return newState;
        case 'craft':
            return { ...state };
        default:
            return state;
    }
};
