import {
  take,
  put,
  call,
  fork,
  select,
  all,
  takeLatest,
} from 'redux-saga/effects';
import Api from 'config/api.json';
import axios from 'axios';
import {
  GET_POSTS,
  GET_POSTS_SUCCEEDED,
  GET_POSTS_FAILED,
} from 'containers/PostsPage/constants';
import { postsLoaded, postsLoadingError } from 'containers/PostsPage/actions';

export function* loadPosts() {
  const { invokeUrl } = Api;
  invokeUrl.path = '/posts';
  const parameters = {
    Authorization: 'abc',
  };
  try {
    const endPointPath = `${invokeUrl}${invokeUrl.path}`;
    const posts = yield call(axios.get(endPointPath, parameters));
    // const posts = [
    //   {
    //     PostId: 'SomePostId',
    //     Post: {
    //       title: 'Hello world',
    //       body: 'Post body',
    //     },
    //   },
    // ];
    yield put(postsLoaded(posts));
  } catch (error) {
    yield put(postsLoadingError(error));
  }
}

/**
 * Root saga manages watcher lifecycle
 */
export default function* postData() {
  // Watches for GET_POSTS actions and calls getRepos when one comes in.
  // By using `takeLatest` only the result of the latest API call is applied.
  // It returns task descriptor (just like fork) so we can continue execution
  // It will be cancelled autom matically on component unmount
  yield takeLatest(GET_POSTS, loadPosts);
}
