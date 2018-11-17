    import React, { Component } from 'react';
    import PropTypes from 'prop-types';
    import logo from '../../shared/images/logo.svg';

    class Header extends Component {
        // Here you can define your PropTypes.
        static propTypes = {
            title: PropTypes.string.isRequired,
            url: PropTypes.string
        };

        render() {
            const {
                title = 'Welcome to React',
                url = 'https://reactjs.org/'
            } = this.props;

        return (
            <header className="App-header">
                <a href={url}>
                    <img src={logo} className="App-logo" alt="logo" />
                </a>
                <h1 className="App-title">{title}</h1>
          </header>
        );
      }
    }

    export default Header;