import React from 'react';
import './Booking.css';

const Booking = () => (
  <div className="card">
    <div className="card-header">
      <strong className="card-title">Réservations</strong>
    </div>
    <div className="card-body">

      <table id="example1" className="table table-striped table-bordered">
        <thead>
          <tr>
            <th>Date reservation</th>
            <th>Nom de passager</th>
            <th>Nom route</th>
            <th>siege</th>
            <th>Prix</th>
            <th>Numero siege</th>
            <th>Type paiement</th>
            <th>Statut</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>22/11/2020</td>
            <td>Anis</td>
            <td>233E2</td>
            <th>2</th>
            <th>22</th>
            <th>223,22</th>
            <th>Espece</th>
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

Booking.propTypes = {};

Booking.defaultProps = {};

export default Booking;
