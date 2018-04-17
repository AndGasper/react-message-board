import { fromJS } from 'immutable';
import {
  GET_POSTS_SUCCEEDED,
  GET_POSTS,
  GET_POSTS_FAILED,
} from 'containers/PostsPage/constants';

const initialState = fromJS({
  loading: false,
  error: false,
  postsData: {
    posts: false,
  },
});

function postsReducer(state = initialState, action) {
  switch (action.type) {
    case GET_POSTS:
      return state
        .set('loading', true)
        .set('error', false)
        .setIn(['postsData', 'posts'], false);
    case GET_POSTS_SUCCEEDED:
      return state
        .setIn(['postsData', 'posts'], action.posts)
        .set('loading', false)
        .set('error', false);
    case GET_POSTS_FAILED:
      return state.set('error', action.error).set('loading', false);
    default:
      return state;
  }
}

export default postsReducer;
