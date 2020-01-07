function myReducer(state, action) {
	if (typeof state === 'undefined') {  // this is our default state
    	state = 100;
    }
    
    switch (action.type) {
    	case 'ADD_ONE':
        	return state + 1;
        case 'SUBSTRACT_ONE':
        	return state - 1;
        default:  // if non of the above acions were matched, return untouched state 
        	return state;
    }
}

export default myReducer;
