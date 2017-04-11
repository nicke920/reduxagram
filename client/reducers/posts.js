// a reducer takes in 

//1. the action
//2. a copy of current state

function posts(state = [], action) {
	switch(action.type) {
		case 'INCREMENT_LIKES' :
			console.log('incrementing likes');
			return [
				...state.slice(0, action.index), ///...takes a copy
				{...state[action.index], likes: state[action.index].likes + 1},
				...state.slice(action.index + 1),
			]
		default: 
			return state;
	}
	console.log('the post will change');
	console.log(state, action);
	return state;
}

export default posts;