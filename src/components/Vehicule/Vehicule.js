import React from 'react';
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
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>SEZ2E</td>
            <td>bus</td>
            <td>toyota</td>
            <td>aZS1Z-66</td>
            <td><button disabled type="button" className="btn btn-primary btn-sm">voir</button>
              <button disabled type="button" className="btn btn-warning btn-sm">editer</button>
              <button disabled type="button" className="btn btn-danger btn-sm">Supprimer</button></td>
          </tr></tbody>
      </table>
      <button  type="button" className="btn btn-success btn-sm">Ajouter</button>

    </div>
  </div>
);

Vehicule.propTypes = {};

Vehicule.defaultProps = {};

export default Vehicule;
