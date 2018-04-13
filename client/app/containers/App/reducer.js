import { fromJS } from 'immutable';
import { TOP_LEVEL_ACTION } from 'containers/App/constants';

const initialState = fromJS({
  someState: false,
});

function appReducer(state = initialState, action) {
  switch (action.type) {
    case TOP_LEVEL_ACTION:
      return state.set('someState', true);
    default:
      return state;
  }
}

export default appReducer;
