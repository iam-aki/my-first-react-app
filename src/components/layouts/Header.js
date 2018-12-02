     import React from 'react';
  import PropTypes from 'prop-types';
  import logo from '../../shared/images/logo.svg';

  // We create a component with a simple arrow function.
  const Header = props => {
    const {
      title = 'Welcome to React',
      url = 'https://reactjs.org/'
    } = props;

    return (
      <header className="App-header">
        <a href={url}>
          <img src={logo} className="App-logo" alt="logo" />
        </a>
        <h1 className="App-title">{title}</h1>
      </header>
    );
  };

  // Even with Functional Components we are able to validate our
  // PropTypes.
  Header.propTypes = {
    title: PropTypes.string.isRequired,
    url: PropTypes.string
  };

  export default Header;