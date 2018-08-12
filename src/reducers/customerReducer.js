import { ACTION_CUSTOMER, ACTION_CUSTOMER_BY_ID } from '../actions/customerActions';

export default function (state = [], action) {
	// be sure, this state is not the same state that the components have.
	// when axios or fetch returns the result, it comes to here..
	// this state will be returned to the components as props.

	console.log('payload for ' + action.type);
	console.log(action.payload);

	switch (action.type) {
		case ACTION_CUSTOMER: {
			if (action.payload) {
				if (action.payload.data && action.payload.data.output) {
					return action.payload.data.output;
				} else {
					console.log(action.payload);
					return state;
				}
			}
			else return state; //if no result, return current state.
		}
		case ACTION_CUSTOMER_BY_ID: {
			if (action.payload.data && action.payload.data.output) {
				return action.payload.data.output;
			} else {
				console.log(action.payload);
				return state;
			}
		}
		default:
			return state;
	}
}
