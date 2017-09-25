import { FETCH_POSTS, FETCH_POST } from '../actions/types.js';

const INITIAL_STATE = { all: [], post: null };

export default function(state = INITIAL_STATE, action){
	switch(action.type){
		// case CREATE_POST:
		// 	return { ...state, post: action.payload.data };
		case FETCH_POST:
			return { ...state, post: action.payload.data };
		case FETCH_POSTS:
			return { ...state, all: action.payload.data };
		default:
			return state;
	}
}