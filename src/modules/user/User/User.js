import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import './User.css';
import AddUser from '../AddUser/AddUser';
import { LoadJS } from '../../../libraries/datatables/datatables';
import ViewUser from './../ViewUser/ViewUser';
import EditUser from './../EditUser/EditUser';

const User = () => {

  useEffect(() => {
    // Runs ONCE after initial rendering
    LoadJS()
    console.log('hello')
  }, []);

  return (
    <div className="card">
      <div className="card-header">
        <strong className="card-title">Utilisateurs</strong>
      </div>
      <div className="card-body">
        <table id="bootstrap-data-table" className="table table-striped table-bordered">
          <thead>
            <tr>
              <th>Nom</th>
              <th>Email</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>

            {users.map(item =>
              <tr>
                <td>{item.first_name}</td>
                <td>{item.email}</td>
                <td>
                  <button onClick={e => update(e, item)} type="button" data-toggle="modal" data-target="#editUser" class="btn btn-warning btn-sm"><i class="fas fa-edit"></i></button>
                  <button onClick={e => remove(e, users.indexOf(item))} type="button" class="btn btn-danger btn-sm"><i class="fas fa-trash-alt"></i></button>
                </td>
              </tr>
            )}



          </tbody>
        </table>
        <button data-toggle="modal" data-target="#addUser" type="button" className="btn btn-success btn-sm">Ajouter</button>
        <div class="modal fade" id="addUser" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
          <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLongTitle">Nouveau</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
                <AddUser />
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-dismiss="modal" onClick={resfresh} >Fermer</button>

              </div>
            </div>
          </div>
        </div>

        <div class="modal fade" id="editUser" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
          <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLongTitle">Edit</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
                <EditUser user={updatedItem} />
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-dismiss="modal" onClick={resfresh} >Fermer</button>

              </div>
            </div>
          </div>
        </div>

        <div class="modal fade" id="view" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
          <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLongTitle">Voir</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">

              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-dismiss="modal" onClick={resfresh} >Fermer</button>

              </div>
            </div>
          </div>
        </div>


      </div>
    </div>
  )
};

User.propTypes = {};

User.defaultProps = {};

export default User;
