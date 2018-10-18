// Libs
import {fromJS} from 'immutable';

// Actions
import {actionTypes} from 'actions/home/homeActions';

// Resources
const emptyState = fromJS({
	isRequested: false
});

const homeReducer = (state = emptyState, action) => {
    switch (action.type) {
        case actionTypes.FETCH_REQUEST_ENTRIES_REQUEST: {
            return state.merge({
							isRequested: true
            });
        }
        default:
            return state
    }
};

export default homeReducer;
