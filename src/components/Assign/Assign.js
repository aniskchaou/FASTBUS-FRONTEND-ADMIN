import React from 'react';
import './Assign.css';
import AddAssign from './../AddAssign/AddAssign';

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
            <td><button  type="button" class="btn btn-primary btn-sm"><i class="fas fa-address-book"></i></button>
                        <button  type="button" class="btn btn-warning btn-sm"><i class="fas fa-edit"></i></button>
                        <button  type="button" class="btn btn-danger btn-sm" onclick="return confirm('Êtes-vous sûr de vouloir supprimer cet enregistrement ?');"><i class="fas fa-trash-alt"></i></button></td>
          </tr></tbody>
      </table>
      <button  data-toggle="modal" data-target="#addAssign" type="button" className="btn btn-success btn-sm">Ajouter</button>
      <div class="modal fade" id="addAssign" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLongTitle">Modal title</h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
            <AddAssign/>
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

Assign.propTypes = {};

Assign.defaultProps = {};

export default Assign;
