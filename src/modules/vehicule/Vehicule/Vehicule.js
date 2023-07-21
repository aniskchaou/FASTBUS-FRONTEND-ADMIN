import React, { useEffect, useRef, useState } from 'react';
import './Vehicule.css';
import { LoadJS } from '../../../libraries/datatables/datatables';
import EditVehicule from '../EditVehicule/EditVehicule';
import AddVehicule from '../AddVehicule/AddVehicule';
import useForceUpdate from 'use-force-update';
import showMessage from '../../../libraries/messages/messages';
import vehiculeMessage from '../../../main/messages/vehiculeMessage';
import VehiculeTestService from '../../../main/mocks/VehiculeTestService';
import HTTPService from '../../../main/services/HTTPService';
import vehiculeHTTPService from '../../../main/services/vehiculeHTTPService';

const Vehicule = () => {
  const [vehicules, setVehicules] = useState([]);
  const [updatedItem, setUpdatedItem] = useState({});
  const forceUpdate = useForceUpdate();
  const closeButtonEdit = useRef(null);
  const closeButtonAdd = useRef(null);

  const closeModalEdit = (data) => {
    getAll()
    closeButtonEdit.current.click()
  }

  const closeModalAdd = (data) => {
    getAll()
    closeButtonAdd.current.click()
  }


  useEffect(() => {
    LoadJS()
    //retrieveVehicules()
    getAll()
  }, []);


  const getAll = () => {
    vehiculeHTTPService.getAllVehicule()
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
    //retrieveVehicules()
    //forceUpdate()
  }

  const remove = (e, data) => {
    e.preventDefault();
    var r = window.confirm("E?");
    if (r) {
      vehiculeHTTPService.removeVehicule(data.id).then(() => {
        getAll()
      })
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
        <strong className="card-title"><i class="menu-icon fa fa-bus"></i> Vehicules</strong>
      </div>
      <div className="card-body">
        <button data-toggle="modal" data-target="#addVehicule" type="button" className="btn btn-success btn-sm"><i class="fa fa-plus" aria-hidden="true"></i> Create</button>
        <table id="example1" className="table table-striped table-bordered">
          <thead>
            <tr>
              <th>Registration </th>
              <th>Brand</th>
              <th>Model</th>
              <th>Chasssis</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>

            {vehicules.map(item =>
              <tr>
                <td>{item.registration}</td>
                <td>{item.brand}</td>
                <td > <span className="badge badge-primary">{item.model}</span> </td>
                <td>{item.chassis}</td>
                <td>
                  <button onClick={e => update(e, item)} type="button" data-toggle="modal" data-target="#editVehicule" class="btn btn-warning btn-sm"><i class="fas fa-edit"></i></button>
                  <button onClick={e => remove(e, item)} type="button" class="btn btn-danger btn-sm"><i class="fas fa-trash-alt"></i></button>
                </td>
              </tr>
            )}


          </tbody>
          <tfoot>
            <tr>
              <th>Registration </th>
              <th>Type</th>
              <th>Model</th>
              <th>Chasssis</th>
              <th>Actions</th>
            </tr>
          </tfoot>
        </table>

        <div class="modal fade" id="addVehicule" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
          <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLongTitle">New</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
                <AddVehicule closeModal={closeModalAdd} />
              </div>
              <div class="modal-footer">
                <button ref={closeButtonAdd} type="button" class="btn btn-secondary" data-dismiss="modal" onClick={resfresh} >Close</button>
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
                <EditVehicule vehicule={updatedItem} closeModal={closeModalEdit} />
              </div>
              <div class="modal-footer">
                <button ref={closeButtonEdit} type="button" class="btn btn-secondary" data-dismiss="modal" onClick={resfresh} >Close</button>

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
