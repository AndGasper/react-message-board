/**
 * PostsListItem
 *
 * Lists the title and body as a card
 */

import React from 'react';
import PropTypes from 'prop-types';
// import { connect } from 'react-redux';
// import { createStructuredSelector } from 'reselect';

// import { makeSelectPosts } from 'reselect';
import PostItem from 'components/PostItem';

export class PostListItem extends React.PureComponent {
  // eslint-disable-line react/prefer-stateless-function
  render() {
    const post = this.props.post;

    const { PostId: postId, Post: postContent } = { post };

    return <PostItem key={postId} item={postContent} />;
  }
}

PostListItem.propTypes = {
  post: PropTypes.object,
};

export default PostListItem;

// Relevant for when I bring back in auth
// export default connect(createStructuredSelector({
//   currentUser: makeSelectCurrentUser()
// }))(PostsListItem);
