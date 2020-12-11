import React from 'react';
import './Assign.css';

const Assign = () => (
  <div className="card">
    <div className="card-header">
      <strong className="card-title">Affectation</strong>
    </div>
    <div className="card-body">

      <table id="example1" className="table table-striped table-bordered">
        <thead>
          <tr>
            <th>Nom voyage</th>
            <th>No enregistrement</th>
            <th>Nom de la route</th>
            <th>Nom de conducteur</th>
            <th>Statut</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>3EE3</td>
            <td>223S2</td>
            <td>3E23</td>
            <td>Anis</td>
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

Assign.propTypes = {};

Assign.defaultProps = {};

export default Assign;
