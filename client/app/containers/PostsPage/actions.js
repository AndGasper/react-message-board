/*
 * App Actions
 *
 * Actions change things in your application
 * Since this boilerplate uses a uni-directional data flow, specifically redux,
 * we have these actions which are the only way your application interacts with
 * your application state. This guarantees that your state is up to date and nobody
 * messes it up weirdly somewhere.
 *
 * To add a new Action:
 * 1) Import your constant
 * 2) Add a function like this:
 *    export function yourAction(var) {
 *        return { type: YOUR_ACTION_CONSTANT, var: var }
 *    }
 */

import { GET_POSTS, GET_POSTS_SUCCEEDED, GET_POSTS_FAILED } from './constants';

/**
 * Load the postsitories, this action starts the request saga
 *
 * @return {object} An action object with a type of GET_POSTS
 */
export function loadPosts() {
  return {
    type: GET_POSTS,
  };
}

/**
 * Dispatched when the postsitories are loaded by the request saga
 *
 * @param  {array} posts The posts data
 *
 * @return {object}      An action object with a type of GET_POSTS_SUCCEEDED passing the posts
 */
export function postsLoaded(posts) {
  return {
    type: GET_POSTS_SUCCEEDED,
    posts,
  };
}

/**
 * Dispatched when loading the postsitories fails
 *
 * @param  {object} error The error
 *
 * @return {object}       An action object with a type of GET_POSTS_ERROR passing the error
 */
export function postsLoadingError(error) {
  return {
    type: GET_POSTS_FAILED,
    error,
  };
}
