import React from 'react';
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
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Anis</td>
            <td>anis@gmail.com</td>
            <td> </td>
            <td>Paris</td>
            <td><button disabled type="button" className="btn btn-primary btn-sm">voir</button>
              <button disabled type="button" className="btn btn-warning btn-sm">editer</button>
              <button disabled type="button" className="btn btn-danger btn-sm">Supprimer</button></td>
          </tr></tbody>
      </table>
      <button  type="button" className="btn btn-success btn-sm">Ajouter</button>

    </div>
  </div>
);

Passanger.propTypes = {};

Passanger.defaultProps = {};

export default Passanger;
