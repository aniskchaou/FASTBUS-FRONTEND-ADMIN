import React from 'react';
import PropTypes from 'prop-types';
import './Travel.css';

const Travel = () => (
  <div className="card">
    <div className="card-header">
      <strong className="card-title">Voyages</strong>
    </div>
    <div className="card-body">

      <table id="example1" className="table table-striped table-bordered">
        <thead>
          <tr>
            <th>Titre de voyage</th>
            <th>Nom de route</th>
            <th>Date</th>
            <th>Horaire</th>
            <th>Type</th>
            <th>distance</th>
            <th>durée</th>
            <th>Statut</th>

          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Nice-Pris</td>
            <td>32E32</td>
            <td>22/10</td>
            <th>12:00</th>
            <th></th>
            <th>223</th>
            <th>43</th>
            <th>Actif</th>

          </tr></tbody>
      </table>
    </div>
  </div>
);

Travel.propTypes = {};

Travel.defaultProps = {};

export default Travel;
