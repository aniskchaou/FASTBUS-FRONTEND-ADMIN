import React from 'react';
import PropTypes from 'prop-types';
import './Travel.css';
import AddTravel from './../AddTravel/AddTravel';

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
            <td><button  type="button" class="btn btn-primary btn-sm"><i class="fas fa-address-book"></i></button>
                        <button  type="button" class="btn btn-warning btn-sm"><i class="fas fa-edit"></i></button>
                        <button  type="button" class="btn btn-danger btn-sm" onclick="return confirm('Êtes-vous sûr de vouloir supprimer cet enregistrement ?');"><i class="fas fa-trash-alt"></i></button></td>
          </tr></tbody>
      </table>
      <button data-toggle="modal" data-target="#addTravel" type="button" className="btn btn-success btn-sm">Ajouter</button>
      <div class="modal fade" id="addTravel" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLongTitle">Modal title</h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
            <AddTravel/>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
              <button type="button" class="btn btn-primary">Save changes</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

Travel.propTypes = {};

Travel.defaultProps = {};

export default Travel;
