/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from 'react';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';

import { Switch, Route } from 'react-router-dom';

// import HomePage from 'containers/HomePage/Loadable';
import PostsPage from 'containers/PostsPage/Loadable';
// import LoginPage from 'containers/LoginPage/Loadable';
// import RegisterPage from 'containers/RegisterPage/Loadable';
import Header from 'components/Header';
import Footer from 'components/Footer';

const AppWrapper = styled.div`
  max-width: calc(768px + 16px * 2);
  margin: 0 auto;
  display: flex;
  min-height: 100%;
  padding: 0 16px;
  flex-direction: column;
`;
// More on Colors: http://www.material-ui.com/#/customization/colors

export default function App() {
  return (
    <AppWrapper>
      <Helmet
        titleTemplate="%s - Connect 2 Management"
        defaultTitle="Message Board"
      >
        <meta name="description" content="Connect 2 Management" />
      </Helmet>
      <Header />
      <Switch>
        <Route exact path="/" component={PostsPage} />
        {/* <Route path="/login" component={LoginPage} /> */}
        {/* <Route path="/register" component={RegisterPage} /> */}
        <Route path="" component={PostsPage} />
      </Switch>
      <Footer />
    </AppWrapper>
  );
}
