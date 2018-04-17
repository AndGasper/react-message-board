import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
// import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';
import Paper from 'material-ui/Paper';
import {
  makeSelectPosts,
  makeSelectLoading,
  makeSelectError,
} from 'containers/PostsPage/selectors';
import { loadPosts } from 'containers/PostsPage/actions';
// import messages from './messages';
import PostsList from 'components/PostsList/index';

import reducer from './reducer';
import saga from './saga';

class PostsPage extends React.PureComponent {
  componentDidMount() {
    this.props.getAllPosts();
  }

  render() {
    const { loading, error, posts } = this.props;
    const postsListProps = {
      loading,
      error,
      posts,
    };
    return (
      <section>
        <article>
          <Helmet>
            <title>Posts Page</title>
            <meta name="description" content="The posts page" />
          </Helmet>
        </article>
        <Paper>
          <PostsList {...postsListProps} />
        </Paper>
      </section>
    );
  }
}

PostsPage.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  posts: PropTypes.oneOfType([PropTypes.array, PropTypes.bool]),
  getAllPosts: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  posts: makeSelectPosts(),
  loading: makeSelectLoading(),
  error: makeSelectError(),
});

export function mapDispatchToProps(dispatch) {
  return {
    getAllPosts: () => {
      dispatch(loadPosts());
    },
  };
}
const withConnect = connect(mapStateToProps, mapDispatchToProps);
const withReducer = injectReducer({ key: 'postsPage', reducer });
const withSaga = injectSaga({ key: 'postsPage', saga });

export default compose(withReducer, withSaga, withConnect)(PostsPage);
