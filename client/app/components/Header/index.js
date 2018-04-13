import React from 'react';
import { FormattedMessage } from 'react-intl';

import NavBar from './NavBar';
import HeaderLink from './HeaderLink';
import messages from './messages';

class Header extends React.Component {
  // eslint-disable-line react/prefer-stateless-function

  render() {
    console.log('messages inside of header', messages);
    return (
      <div>
        <NavBar>
          <HeaderLink to="/">
            {/* <FormattedMessage {...messages.home} /> */}
            <p>Home</p>
          </HeaderLink>
          <HeaderLink to="/login">
            {/* <FormattedMessage {...messages.login} /> */}
            <p>Login</p>
          </HeaderLink>
        </NavBar>
      </div>
    );
  }
}

export default Header;
