import React, { useEffect, useState } from 'react';
import './Assign.css';
import { LoadJS } from '../../../libraries/datatables/datatables';
import EditAssign from '../EditAssign/EditAssign';
import AddAssign from '../AddAssign/AddAssign';
import useForceUpdate from 'use-force-update';
import showMessage from '../../../libraries/messages/messages';
import assignMessage from '../../../main/messages/assignMessage';
import AssignTestService from '../../../main/mocks/AssignTestService';
import HTTPService from '../../../main/services/HTTPService';


const Assign = () => {
  const [assigns, setAssigns] = useState([]);
  const [updatedItem, setUpdatedItem] = useState({});
  const forceUpdate = useForceUpdate();


  useEffect(() => {
    LoadJS()
    retrieveAssigns()
  }, []);


  const getAll = () => {
    HTTPService.getAll()
      .then(response => {
        setAssigns(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  };

  const removeOne = (data) => {
    HTTPService.remove(data)
      .then(response => {

      })
      .catch(e => {

      });
  }



  const retrieveAssigns = () => {
    var assigns = AssignTestService.getAll();
    setAssigns(assigns);
  };

  const resfresh = () => {
    retrieveAssigns()
    forceUpdate()
  }

  const remove = (e, data) => {
    e.preventDefault();
    var r = window.confirm("Etes-vous sûr que vous voulez supprimer ?");
    if (r) {
      showMessage('Confirmation', assignMessage.delete, 'success')
      AssignTestService.remove(data)
      //removeOne(data)
      resfresh()
    }

  }

  const update = (e, data) => {
    e.preventDefault();
    setUpdatedItem(data)
    resfresh()
  }


  return (
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
              <th>Date</th>
              <th>Nom de conducteur</th>
              <th>Statut</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>

            {assigns.map(item =>
              <tr>
                <td>{item.trip}</td>
                <td ><span className="badge badge-primary">{item.fleet_registration_id}</span></td>
                <td>{item.assign_date}</td>
                <td>{item.driver_id}</td>
                <td ><span className="badge badge-success">{item.status}</span></td>
                <td>
                  <button onClick={e => update(e, item)} type="button" data-toggle="modal" data-target="#edit" class="btn btn-warning btn-sm"><i class="fas fa-edit"></i></button>
                  <button onClick={e => remove(e, assigns.indexOf(item))} type="button" class="btn btn-danger btn-sm"><i class="fas fa-trash-alt"></i></button>
                </td>

              </tr>
            )}
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
        <button data-toggle="modal" data-target="#addAssign" type="button" className="btn btn-success btn-sm"><i class="fas fa-plus-circle"></i></button>


        <div class="modal fade" id="addAssign" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
          <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLongTitle">Ajouter</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
                <AddAssign />
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-dismiss="modal" onClick={resfresh} >Fermer</button>

              </div>
            </div>
          </div>
        </div>

        <div class="modal fade" id="edit" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
          <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLongTitle">Editer</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
                <EditAssign assign={updatedItem} />
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

Assign.propTypes = {};

Assign.defaultProps = {};

export default Assign;
