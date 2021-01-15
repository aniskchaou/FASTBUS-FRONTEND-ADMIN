import React, { useEffect } from 'react';
import './Routes.css';
import AddRoute from './../AddRoute/AddRoute';
import { LoadJS } from './../init';
import ViewRoute from './../ViewRoute/ViewRoute';
import EditRoute from './../EditRoute/EditRoute';

const Routes = () => {
  useEffect(() => {
    // Runs ONCE after initial rendering
    LoadJS()
  }, []);
  return(
  <div className="card">
    <div className="card-header">
      <strong className="card-title">Routes</strong>
    </div>
    <div className="card-body">

      <table id="example1" className="table table-striped table-bordered">
        <thead>
          <tr>
            <th>Nom Route</th>
            <th>Point de depart</th>
            <th>Point final</th>
            <th>Point d'arret</th>
            <th>Distance</th>
            <th>Temps Approximatif</th>
            <th>Siege enfant </th>
            <th>Siege principale</th>
            <th>Statut</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>8Y8Y779T</td>
            <td className="badge badge-primary">POISSY</td>
            <td>SAINT-PAUL</td>
            <td className="badge badge-secondary">NICE</td>
            <td>226 km </td>
            <td>2h</td>
            <td>3</td>
            <td>1A</td>
            <td className="badge badge-success">Active</td>
            <td>
                        <button  data-toggle="modal" data-target="#edit" type="button" class="btn btn-warning btn-sm"><i class="fas fa-edit"></i></button>
                        <button  type="button" class="btn btn-danger btn-sm" onClick="return confirm('Êtes-vous sûr de vouloir supprimer cet enregistrement ?');"><i class="fas fa-trash-alt"></i></button></td>
          </tr></tbody>
          <tfoot>
          <tr>
            <th>Nom Route</th>
            <th>Point de depart</th>
            <th>Point final</th>
            <th>Point d'arret</th>
            <th>Distance</th>
            <th>Temps Approximatif</th>
            <th>Siege enfant </th>
            <th>Siege principale</th>
            <th>Statut</th>
            <th>Actions</th>
          </tr>
        </tfoot>
      </table>
      <button  type="button" data-toggle="modal" data-target="#addRoute" className="btn btn-success btn-sm">Ajouter</button>
      <div class="modal fade" id="addRoute" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLongTitle">Modal title</h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
            <AddRoute/>
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
            <EditRoute/>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
              <button type="button" class="btn btn-primary">Save changes</button>
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
           <ViewRoute/>
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

Routes.propTypes = {};

Routes.defaultProps = {};

export default Routes;
