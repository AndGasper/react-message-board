import { call, put, select, takeLatest } from 'redux-saga/effects';
import Api from 'server/config.json';
import axios from 'axios';
import {
  GET_POSTS,
  GET_POSTS_SUCCEEDED,
  GET_POSTS_FAILED,
} from 'containers/App/constants';
import { postsLoaded, postsLoadingError } from 'containers/App/actions';

export function* getPosts(action) {
  const { invokeUrl } = Api;
  const parameters = {
    Authorization: 'abc',
  };
  try {
    const posts = yield call(axios.get(Api.invokeUrl, parameters));
    yield put({ type: FETCH_POSTS_SUCCEEDED, posts });
  } catch (error) {
    yield put(postsLoadingError(error));
  }
}

/**
 * Root saga manages watcher lifecycle
 */
export default function* postData() {
  // Watches for LOAD_REPOS actions and calls getRepos when one comes in.
  // By using `takeLatest` only the result of the latest API call is applied.
  // It returns task descriptor (just like fork) so we can continue execution
  // It will be cancelled automatically on component unmount
  yield takeLatest(LOAD_POSTS, getPosts);
}
