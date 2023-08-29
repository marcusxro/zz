// Router.js
import React, { Component } from 'react';
import HomePage from './pages/HomePage';
import { About } from './pages/AboutPage';
import Firstpage from './pages/Firstpage';
import Secpage from './pages/SecPage';
import Thirdpage from './pages/ThirdPage';

class Router extends Component {
  constructor() {
    super();
    this.state = {
      currentRoute: window.location.pathname,
    };
  }

  componentDidMount() {
    // Listen for changes in the URL
    window.addEventListener('popstate', () => {
      this.setState({ currentRoute: window.location.pathname });
    });
  }

  render() {
    const { currentRoute } = this.state;

    switch (currentRoute) {
      case '/':
        return <HomePage />;
      case '/about':
        return <About />;
      // Add more cases for other routes
      case '/firstpage':
        return <Firstpage />;
      case '/secpage':
        return <Secpage />;
      case '/thirdpage':
        return <Thirdpage />
      default:
        return <div>404 - Not Found</div>;
    }
  }
}

export default Router;
