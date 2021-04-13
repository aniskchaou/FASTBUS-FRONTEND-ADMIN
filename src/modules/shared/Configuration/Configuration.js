import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import './Configuration.css';
import { LoadJS } from '../../../libraries/datatables/datatables';
import ConfigurationContent from '../Configuration-content/Configuration-content';

const Configuration = () => {
  useEffect(() => {
    // Runs ONCE after initial rendering
    LoadJS()
  }, []);


  return (

    <div className="card">
      <div className="card-header">
        <strong className="card-title">Paramètres</strong>
      </div>
      <div className="card-body">
        <ConfigurationContent />

      </div>
    </div>
  )
};

Configuration.propTypes = {};

Configuration.defaultProps = {};

export default Configuration;
