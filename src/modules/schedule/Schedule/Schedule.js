import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import './Schedule.css';
import AddSchedule from '../AddSchedule/AddSchedule';
import { LoadJS } from '../../../libraries/datatables/datatables';
import ViewSchedule from '../ViewSchedule/ViewSchedule';
import EditSchedule from '../EditSchedule/EditSchedule';

const Schedule = () => {
  useEffect(() => {
    // Runs ONCE after initial rendering
    LoadJS()
  
  }, []);
  
  return(
  <div className="card">
  <div className="card-header">
    <strong className="card-title">Horaires</strong>
  </div>
  <div className="card-body">

    <table id="example1" className="table table-striped table-bordered">
    <thead>
                  <tr>
                    <th>Date debut</th>
                    <th>Date fin</th>
                    <th>Durée</th>
                    <th>Actions</th>
                    
                  </tr>
                  </thead>
                  <tbody>
                  <tr>
                    <td>14h00</td>
                    <td>16h00</td>
                    <th>2 heures</th>
                    <td>
                        <button  data-toggle="modal" data-target="#edit" type="button" class="btn btn-warning btn-sm"><i class="fas fa-edit"></i></button>
                        <button  type="button" class="btn btn-danger btn-sm" onClick="return confirm('Êtes-vous sûr de vouloir supprimer cet enregistrement ?');"><i class="fas fa-trash-alt"></i></button></td>
                  </tr>
                  <tr>
                    <td>10h00</td>
                    <td>13h00</td>
                    <th>3 heures</th>
                    <td>
                        <button  data-toggle="modal" data-target="#edit" type="button" class="btn btn-warning btn-sm"><i class="fas fa-edit"></i></button>
                        <button  type="button" class="btn btn-danger btn-sm" onClick="return confirm('Êtes-vous sûr de vouloir supprimer cet enregistrement ?');"><i class="fas fa-trash-alt"></i></button></td>
                  </tr>
                  
                  </tbody><tfoot>
                  <tr>
                    <th>Date debut</th>
                    <th>Date fin</th>
                    <th>Durée</th>
                    <th>Actions</th>
                    
                  </tr>
                  </tfoot>
    </table>
    <button data-toggle="modal" data-target="#addSchedule" type="button" className="btn btn-success btn-sm">Ajouter</button>
    <div class="modal fade" id="addSchedule" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLongTitle">Modal title</h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
            <AddSchedule/>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-dismiss="modal">Fermer</button>
                
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
            <EditSchedule/>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-dismiss="modal">Fermer</button>
                
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
           <ViewSchedule/>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-dismiss="modal">Fermer</button>
                
            </div>
          </div>
        </div>
      </div>

  </div>
</div>
)};

Schedule.propTypes = {};

Schedule.defaultProps = {};

export default Schedule;
