import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import './HR.css';
import AddHR from './../AddHR/AddHR';
import { LoadJS } from './../init';

const HR = () => {
  useEffect(() => {
    // Runs ONCE after initial rendering
    LoadJS()
  
  }, []);
  return(
  <div className="card">
  <div className="card-header">
    <strong className="card-title">Ressource Humaines</strong>
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
                    <td>Octave Pitre</td>
                    <td>Active</td>
                    <td><button  type="button" class="btn btn-primary btn-sm"><i class="fas fa-address-book"></i></button>
                        <button  type="button" class="btn btn-warning btn-sm"><i class="fas fa-edit"></i></button>
                        <button  type="button" class="btn btn-danger btn-sm" onclick="return confirm('Êtes-vous sûr de vouloir supprimer cet enregistrement ?');"><i class="fas fa-trash-alt"></i></button></td>
                  </tr>
                  <tr>
                    <td>3TT3T2</td>
                    <td>3TG4G</td>
                    <td>324G43</td>
                    <td>Zurie Deblois</td>
                    <td>Active</td>
                    <td><button  type="button" class="btn btn-primary btn-sm"><i class="fas fa-address-book"></i></button>
                        <button  type="button" class="btn btn-warning btn-sm"><i class="fas fa-edit"></i></button>
                        <button  type="button" class="btn btn-danger btn-sm" onclick="return confirm('Êtes-vous sûr de vouloir supprimer cet enregistrement ?');"><i class="fas fa-trash-alt"></i></button></td>
                  </tr>
                  
                  
                  </tbody>
                  <tfoot>
                  <tr>
                    <th>Nom voyage</th>
                    <th>No enregistrement</th>
                    <th>Nom de la route</th>
                    <th>Nom de conducteur</th>
                    <th>Statut</th>
                    <th>Actions</th>
                  </tr>
                  </tfoot>
    </table>
    <button  data-toggle="modal" data-target="#addHR" type="button" className="btn btn-success btn-sm">Ajouter</button>
    <div class="modal fade" id="addHR" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLongTitle">Modal title</h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
            <AddHR/>
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

HR.propTypes = {};

HR.defaultProps = {};

export default HR;
