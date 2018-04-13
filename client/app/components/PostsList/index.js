import React from 'react';
import PropTypes from 'prop-types';

import { List, ListItem } from 'material-ui/List';
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

// Generic PropTypes shape for a post?

// PropTypes.shape({
//   title: PropTypes.string,
//   body: PropTypes.string,
//   dealership: PropTypes.string,
//   group: PropTypes.string,
//   replies: PropTypes.array,
// });

PostsList.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.oneOfType([PropTypes.bool, PropTypes.object]),
  posts: PropTypes.oneOfType([PropTypes.bool, PropTypes.object]),
};

export default PostsList;
