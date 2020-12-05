import React from 'react';
import PropTypes from 'prop-types';
import './Vehicule.css';

const Vehicule = () => (
  <div className="card">
    <div className="card-header">
      <strong className="card-title">Véhicules</strong>
    </div>
    <div className="card-body">

      <table id="example1" className="table table-striped table-bordered">
        <thead>
          <tr>
            <th>N enregistrement</th>
            <th>Type</th>
            <th>modele</th>
            <th>Chasssis</th>

          </tr>
        </thead>
        <tbody>
          <tr>
            <td>SEZ2E</td>
            <td>bus</td>
            <td>toyota</td>
            <td>aZS1Z-66</td>

          </tr></tbody>
      </table>
    </div>
  </div>
);

Vehicule.propTypes = {};

Vehicule.defaultProps = {};

export default Vehicule;
