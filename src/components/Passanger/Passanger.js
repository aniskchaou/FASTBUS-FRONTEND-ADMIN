import React from 'react';
import PropTypes from 'prop-types';
import './Passanger.css';

const Passanger = () => (
  <div className="card">
    <div className="card-header">
      <strong className="card-title">Passagers</strong>
    </div>
    <div className="card-body">

      <table id="example1" className="table table-striped table-bordered">
        <thead>
          <tr>
            <th>Nom</th>
            <th>Email</th>
            <th>Adresse</th>
            <th>Ville</th>

          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Anis</td>
            <td>anis@gmail.com</td>
            <td> </td>
            <td>Paris</td>

          </tr></tbody>
      </table>
    </div>
  </div>
);

Passanger.propTypes = {};

Passanger.defaultProps = {};

export default Passanger;
