import React, { useEffect } from 'react';
import './Offer.css';
import AddOffer from './../AddOffer/AddOffer';
import { LoadJS } from './../init';
import ViewOffer from './../ViewOffer/ViewOffer';
import EditOffer from './../EditOffer/EditOffer';

const Offer = () => {
  useEffect(() => {
    // Runs ONCE after initial rendering
    LoadJS()
  }, []);
  return(
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
            <td><button  data-toggle="modal" data-target="#view" type="button" class="btn btn-primary btn-sm"><i class="fas fa-address-book"></i></button>
                        <button  data-toggle="modal" data-target="#edit" type="button" class="btn btn-warning btn-sm"><i class="fas fa-edit"></i></button>
                        <button  type="button" class="btn btn-danger btn-sm" onClick="return confirm('Êtes-vous sûr de vouloir supprimer cet enregistrement ?');"><i class="fas fa-trash-alt"></i></button></td>
          </tr></tbody>
      </table>
      <button  data-toggle="modal" data-target="#addOffer" type="button" className="btn btn-success btn-sm">Ajouter</button>
      <div class="modal fade" id="addOffer" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLongTitle">Modal title</h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
            <AddOffer/>
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
            <EditOffer/>
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
           <ViewOffer/>
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

Offer.propTypes = {};

Offer.defaultProps = {};

export default Offer;
