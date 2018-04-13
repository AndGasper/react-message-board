import { createSelector, createStructuredSelector } from 'reselect';

const selectGlobal = (state) => state.get('global');

const selectRoute = (state) => state.get('route');

// const makeSelectCurrentUser = () =>
//   createStructuredSelector(selectGlobal, (globalState) =>
//     globalState.get('currentUser')
//   );

const makeSelectPosts = () =>
  createSelector(selectGlobal, (globalState) =>
    globalState.getIn(['postsData', 'posts'])
  );

const makeSelectLoading = () =>
  createSelector(selectGlobal, (globalState) => globalState.get('loading'));

const makeSelectError = () =>
  createSelector(selectGlobal, (globalState) => globalState.get('error'));

export {
  selectGlobal,
  selectRoute,
  makeSelectPosts,
  makeSelectLoading,
  makeSelectError,
};
