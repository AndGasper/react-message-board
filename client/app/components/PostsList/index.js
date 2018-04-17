import React from 'react';
import PropTypes from 'prop-types';

import List from 'components/List';
import ListItem from 'components/ListItem';
import LoadingIndicator from 'components/LoadingIndicator';
import PostsListItem from 'containers/PostsListItem';

function PostsList({ loading, error, posts }) {
  if (loading) {
    return <List component={LoadingIndicator} />;
  }

  if (error !== false) {
    const ErrorComponent = () => (
      <ListItem item={'Something went wrong, please try again!'} />
    );
    return <List component={ErrorComponent} />;
  }

  if (posts !== false) {
    return <List items={posts} component={PostsListItem} />;
  }

  return null;
}

PostsList.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.any,
  posts: PropTypes.oneOfType([PropTypes.bool, PropTypes.object]),
};

export default PostsList;
