import React from 'react';
import './Offer.css';

const Offer = () => (
  <div className="card">
    <div className="card-header">
      <strong className="card-title">Offre</strong>
    </div>
    <div className="card-body">

      <table id="example1" className="table table-striped table-bordered">
        <thead>
          <tr>
            <th>Nom offre</th>
            <th>Date debut</th>
            <th>Date fin</th>
            <th>Code offre</th>
            <th>Remise</th>
            <th>Nom de route</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>3EE3</td>
            <td>22/10/2020</td>
            <td>24/10/2020</td>
            <td>13E2</td>
            <td>21</td>
            <td>AZAZAD</td>
            <td><button disabled type="button" className="btn btn-primary btn-sm">voir</button>
              <button disabled type="button" className="btn btn-warning btn-sm">editer</button>
              <button disabled type="button" className="btn btn-danger btn-sm">Supprimer</button></td>
          </tr></tbody>
      </table>
      <button  type="button" className="btn btn-success btn-sm">Ajouter</button>

    </div>
  </div>
);

Offer.propTypes = {};

Offer.defaultProps = {};

export default Offer;
