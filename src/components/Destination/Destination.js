import React from 'react';

import './Destination.css';

const Destination = () => (

  <div className="card">
    <div className="card-header">
      <strong className="card-title">Destinations</strong>
    </div>
    <div className="card-body">

      <table id="example1" className="table table-striped table-bordered">
        <thead>
          <tr>
            <th>Nom destination</th>
            <th>description</th>
            <th>Statut</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Pris</td>
            <td>desc</td>
            <td>Actif</td>
            <td><button disabled type="button" className="btn btn-primary btn-sm">voir</button>
              <button disabled type="button" className="btn btn-warning btn-sm">editer</button>
              <button disabled type="button" className="btn btn-danger btn-sm">Supprimer</button></td>
          </tr></tbody>
      </table>
      <button  type="button" className="btn btn-success btn-sm">Ajouter</button>

    </div>
  </div>




















);

Destination.propTypes = {};

Destination.defaultProps = {};

export default Destination;
