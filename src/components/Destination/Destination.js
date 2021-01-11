import React, { useEffect } from 'react';

import './Destination.css';
import AddDestination from './../AddDestination/AddDestination';
import { LoadJS } from './../init';
import EditDestination from './../EditDestination/EditDestination';

const Destination = () => {
  useEffect(() => {
    // Runs ONCE after initial rendering
    LoadJS()
    
  }, []);
  
  return(

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
            <td>
                        <button  data-toggle="modal" data-target="#edit" type="button" class="btn btn-warning btn-sm"><i class="fas fa-edit"></i></button>
                        <button  type="button" class="btn btn-danger btn-sm" onclick="return confirm('Êtes-vous sûr de vouloir supprimer cet enregistrement ?');"><i class="fas fa-trash-alt"></i></button></td>
          </tr></tbody>
      </table>
      <button  data-toggle="modal" data-target="#addDestination" type="button" className="btn btn-success btn-sm">Ajouter</button>
      <div class="modal fade" id="addDestination" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLongTitle">Modal title</h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
            <AddDestination/>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
              <button type="button" class="btn btn-primary">Save changes</button>
            </div>
          </div>
        </div>
      </div>


      <div class="modal fade" id="edit" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLongTitle">Modal title</h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
            <EditDestination/>
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




















)};

Destination.propTypes = {};

Destination.defaultProps = {};

export default Destination;
