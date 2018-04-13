import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';
import {
  makeSelectRepos,
  makeSelectLoading,
  makeSelectError,
} from 'containers/App/selectors';
import Section from './Section';
import messages from './messages';
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
  }
}
