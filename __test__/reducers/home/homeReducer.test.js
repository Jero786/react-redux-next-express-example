import homeReducer from 'reducer/home/homeReducer';
import {actionTypes} from 'actions/home/homeActions';
import {expect} from 'chai';
import {fromJS} from 'immutable';

describe('Home Reducer', () => {
    it('should init store properly', () => {
        const store = undefined;
        const action = {};

        const result = homeReducer(store, action);

        expect(result.get('isRequested')).to.equals(false);
    });

    it('should request properly', function () {
        const store = fromJS({});

        const result = homeReducer(store, {type:actionTypes.FETCH_REQUEST_ENTRIES_REQUEST});

        expect(result.get('isRequested')).to.equals(true);
    });
});
