import React from 'react';
import PropTypes from 'prop-types';
import { Card, CardTitle, CardText } from 'material-ui/Card';

const PostListItem = (props) => {
  const { title: postTitle, body: postBody } = props;
  return (
    <Card>
      <CardTitle title={postTitle} />
      <CardText>{postBody}</CardText>
    </Card>
  );
};

PostListItem.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
};

export default PostListItem;
