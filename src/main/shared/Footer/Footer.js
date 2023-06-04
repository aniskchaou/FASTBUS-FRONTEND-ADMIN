import React from 'react';
import PropTypes from 'prop-types';
import './Footer.css';
import User from '../../config/user';

const Footer = () => (


  <footer className="site-footer" style={{ display: (User.CONNECTED_USER ? 'block' : 'none') }}>
    <div className="footer-inner bg-white">
      <div className="row">
        <div className="col-sm-6">
          Developed by Delta Dev Software
        </div>
        <div className="col-sm-6 text-right">

        </div>
      </div>
    </div>
  </footer>
);

Footer.propTypes = {};

Footer.defaultProps = {};

export default Footer;
