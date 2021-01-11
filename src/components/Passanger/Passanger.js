import React, { useEffect } from 'react';
import './Passanger.css';
import AddPassanger from './../AddPassanger/AddPassanger';
import { LoadJS } from './../init';
import ViewPassanger from './../ViewPassanger/ViewPassanger';
import EditPassanger from './../EditPassanger/EditPassanger';

const Passanger = () => {

  useEffect(() => {
    // Runs ONCE after initial rendering
    LoadJS()

  }, []);

  return (
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
              <td><button  data-toggle="modal" data-target="#view" type="button" class="btn btn-primary btn-sm"><i class="fas fa-address-book"></i></button>
                        <button  data-toggle="modal" data-target="#edit" type="button" class="btn btn-warning btn-sm"><i class="fas fa-edit"></i></button>
                        <button  type="button" class="btn btn-danger btn-sm" onClick="return confirm('Êtes-vous sûr de vouloir supprimer cet enregistrement ?');"><i class="fas fa-trash-alt"></i></button></td>
            </tr></tbody>
        </table>
        <button data-toggle="modal" data-target="#addPassanger" type="button" className="btn btn-success btn-sm">Ajouter</button>
        <div class="modal fade" id="addPassanger" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
          <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLongTitle">Modal title</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
                <AddPassanger />
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
            <EditPassanger/>
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
           <ViewPassanger/>
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
  )
};

Passanger.propTypes = {};

Passanger.defaultProps = {};

export default Passanger;
