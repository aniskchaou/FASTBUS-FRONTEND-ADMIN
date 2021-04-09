import React from 'react';
import Navigation from '../Navigation/Navigation';
import Header from '../Header/Header';
import Content from '../Content/Content';

import { BrowserRouter as Router } from "react-router-dom"
import Footer from '../Footer/Footer';
import Login from '../Login/Login';
import User from '../../config/user';

class Root extends React.Component {
  constructor(props) {
    super(props);
    this.state = { connected: User.CONNECTED_USER };
  }
  rerender = () => {
    this.forceUpdate();
  };
  forceUpdate = () => {
    this.setState((state) => ({
      connected: User.CONNECTED_USER
    }));
  };
  render() {

    return (
      <div>
        <Router>
          <Navigation />
          <Header rerender={this.rerender} />
          <div id="right-panel" className="right-panel">
            <div className="content">
              <div className="animated fadeIn">
                <div className="row">
                  <Content />
                </div>
              </div>
            </div>

            <div className="clearfix"></div>
            <Footer />
            <Login rerender={this.rerender} />
          </div>
        </Router>
      </div>
    );
  }
}



Root.propTypes = {};

Root.defaultProps = {};

export default Root;
