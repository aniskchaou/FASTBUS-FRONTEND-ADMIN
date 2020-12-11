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
            <th>Actions</th>
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
            <td><button disabled type="button" className="btn btn-primary btn-sm">voir</button>
              <button disabled type="button" className="btn btn-warning btn-sm">editer</button>
              <button disabled type="button" className="btn btn-danger btn-sm">Supprimer</button></td>
          </tr></tbody>
      </table>
      <button  type="button" className="btn btn-success btn-sm">Ajouter</button>

    </div>
  </div>
);

Travel.propTypes = {};

Travel.defaultProps = {};

export default Travel;
