import React, { useEffect, useState } from 'react';
import './Vehicule.css';
import { LoadJS } from '../../../libraries/datatables/datatables';
import EditVehicule from '../EditVehicule/EditVehicule';
import AddVehicule from '../AddVehicule/AddVehicule';
import useForceUpdate from 'use-force-update';
import showMessage from '../../../libraries/messages/messages';
import vehiculeMessage from '../../../main/messages/vehiculeMessage';
import VehiculeTestService from '../../../main/mocks/VehiculeTestService';
import HTTPService from '../../../main/services/HTTPService';

const Vehicule = () => {
  const [vehicules, setVehicules] = useState([]);
  const [updatedItem, setUpdatedItem] = useState({});
  const forceUpdate = useForceUpdate();


  useEffect(() => {
    LoadJS()
    retrieveVehicules()
  }, []);


  const getAll = () => {
    HTTPService.getAll()
      .then(response => {
        setVehicules(response.data);
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



  const retrieveVehicules = () => {
    var vehicules = VehiculeTestService.getAll();
    setVehicules(vehicules);
  };

  const resfresh = () => {
    retrieveVehicules()
    forceUpdate()
  }

  const remove = (e, data) => {
    e.preventDefault();
    var r = window.confirm("Etes-vous sûr que vous voulez supprimer ?");
    if (r) {
      showMessage('Confirmation', vehiculeMessage.delete, 'success')
      VehiculeTestService.remove(data)
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
        <strong className="card-title">Véhicules</strong>
      </div>
      <div className="card-body">

        <table id="example1" className="table table-striped table-bordered">
          <thead>
            <tr>
              <th>N enregistrement</th>
              <th>Type</th>
              <th>modele</th>
              <th>Chasssis</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>

            {vehicules.map(item =>
              <tr>
                <td>{item.reg_no}</td>
                <td>{item.fleet_type_id}</td>
                <td > <span className="badge badge-primary">{item.model_no}</span> </td>
                <td>{item.chasis_no}</td>
                <td>
                  <button onClick={e => update(e, item)} type="button" data-toggle="modal" data-target="#editVehicule" class="btn btn-warning btn-sm"><i class="fas fa-edit"></i></button>
                  <button onClick={e => remove(e, vehicules.indexOf(item))} type="button" class="btn btn-danger btn-sm"><i class="fas fa-trash-alt"></i></button>
                </td>
              </tr>
            )}


          </tbody>
          <tfoot>
            <tr>
              <th>N enregistrement</th>
              <th>Type</th>
              <th>modele</th>
              <th>Chasssis</th>
              <th>Actions</th>
            </tr>
          </tfoot>
        </table>
        <button data-toggle="modal" data-target="#addVehicule" type="button" className="btn btn-success btn-sm">Ajouter</button>
        <div class="modal fade" id="addVehicule" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
          <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLongTitle">Nouveau</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
                <AddVehicule />
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-dismiss="modal" onClick={resfresh} >Fermer</button>

              </div>
            </div>
          </div>
        </div>


        <div class="modal fade" id="editVehicule" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
          <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLongTitle">Edit</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
                <EditVehicule vehicule={updatedItem} />
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

Vehicule.propTypes = {};

Vehicule.defaultProps = {};

export default Vehicule;
