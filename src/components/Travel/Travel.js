import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import './Travel.css';
import AddTravel from './../AddTravel/AddTravel';
import { LoadJS } from './../init';
import Viewtravel from './../Viewtravel/Viewtravel';
import EditTravel from './../EditTravel/EditTravel';

const Travel = () => {
  
  useEffect(() => {
    // Runs ONCE after initial rendering
    LoadJS()
    console.log('hello')
  }, []);
  
  return(
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
            <th>distance</th>
            <th>durée</th>
            <th>Statut</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="badge badge-primary">COLOMIERS-PUTEAUX</td>
            <td>32E32</td>
            <td>07/11/2020</td>
            <td>12h00</td>
            <td>223</td>
            <td>43</td>
            <td className="badge badge-success">Active</td>
            <td>
                        <button  data-toggle="modal" data-target="#edit" type="button" class="btn btn-warning btn-sm"><i class="fas fa-edit"></i></button>
                        <button  type="button" class="btn btn-danger btn-sm" onClick="return confirm('Êtes-vous sûr de vouloir supprimer cet enregistrement ?');"><i class="fas fa-trash-alt"></i></button></td>
          </tr>
          <tr>
            <td className="badge badge-primary">LES ABYMES-SAINT-PAUL</td>
            <td>98U8J880</td>
            <td>2/8/2020</td>
            <td>11h00</td>
            
            <td>223</td>
            <td>43</td>
            <td className="badge badge-success">Active</td>
            <td>
                        <button  data-toggle="modal" data-target="#edit" type="button" class="btn btn-warning btn-sm"><i class="fas fa-edit"></i></button>
                        <button  type="button" class="btn btn-danger btn-sm" onClick="return confirm('Êtes-vous sûr de vouloir supprimer cet enregistrement ?');"><i class="fas fa-trash-alt"></i></button></td>
          </tr>
          
          </tbody>
          <tfoot>
          <tr>
            <th>Titre de voyage</th>
            <th>Nom de route</th>
            <th>Date</th>
            <th>Horaire</th>
            <th>distance</th>
            <th>durée</th>
            <th>Statut</th>
            <th>Actions</th>
          </tr>
        </tfoot>
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
            <EditTravel/>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
              
            </div>
          </div>
        </div>
      </div>

      <div class="modal fade" id="view" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLongTitle">Modal title</h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
           <Viewtravel/>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
            
            </div>
          </div>
        </div>
      </div>


    </div>
  </div>
)};

Travel.propTypes = {};

Travel.defaultProps = {};

export default Travel;
