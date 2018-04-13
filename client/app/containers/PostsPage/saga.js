import { call, put, select, takeLatest } from 'redux-saga/effects';
// import Api from 'server/config.json';
import axios from 'axios';
import {
  GET_POSTS,
  GET_POSTS_SUCCEEDED,
  GET_POSTS_FAILED,
} from 'containers/PostsPage/constants';
import { postsLoaded, postsLoadingError } from 'containers/PostsPage/actions';
const Api = {
  invokeUrl:
    'https://bnhx68z7wk.execute-api.us-east-1.amazonaws.com/prod/posts',
};

export function* getPosts(action) {
  console.log('getPosts');
  const { invokeUrl } = Api;
  const parameters = {
    Authorization: 'abc',
  };
  try {
    // const posts = yield call(axios.get(invokeUrl, parameters));
    const posts = [
      {
        PostId: 'SomePostId',
        Post: {
          title: 'Hello world',
          body: 'Post body',
        },
      },
    ];
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
  // It will be cancelled automatically on component unmount
  yield takeLatest(GET_POSTS, getPosts);
}
