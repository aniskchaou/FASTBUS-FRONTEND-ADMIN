import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import './Driver.css';
import AddDriver from '../AddDriver/AddDriver';
import useForceUpdate from 'use-force-update';
import driverHTTPService from '../../../main/services/driverHTTPService';
import { LoadJS } from '../../../libraries/datatables/datatables';
import EditDriver from '../EditDriver/EditDriver';

const Driver = () => {

  const [drivers, setDrivers] = useState([]);
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
    //retrieveOffers()
    getAll()
  }, []);


  const getAll = () => {
    driverHTTPService.getAllDriver()
      .then(response => {
        setDrivers(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  };

  const remove = (e, data) => {
    e.preventDefault();
    var r = window.confirm("Are you sure ?");
    if (r) {
      /*  showMessage('Confirmation', offerMessage.delete, 'success')
       OfferTestService.remove(data) */
      //removeOne(data)
      driverHTTPService.removeDriver(data.id).then(() => {
        getAll()
      })

    }

  }

  const update = (e, data) => {
    e.preventDefault();
    setUpdatedItem(data)

  }

  return (
    <div className="Driver">
      <div className="card">
        <div className="card-header">
          <strong className="card-title"><i class="menu-icon fa fa-male "></i> Drivers</strong>
        </div>
        <div className="card-body">
          <button type="button" data-toggle="modal" data-target="#addRoute" className="btn btn-success btn-sm"><i class="fa fa-plus" aria-hidden="true"></i> Create</button>
          <table id="example1" className="table table-striped table-bordered">
            <thead>
              <tr>
                <th>Driver Licence</th>
                <th>Name</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {drivers.map(item =>
                <tr>
                  <td>{item.license}</td>
                  <td><span className="badge badge-primary">{item.name}</span></td>
                  <td>
                    <button onClick={e => update(e, item)} type="button" data-toggle="modal" data-target="#edit" class="btn btn-warning btn-sm"><i class="fas fa-edit"></i></button>
                    <button onClick={e => remove(e, item)} type="button" class="btn btn-danger btn-sm"><i class="fas fa-trash-alt"></i></button>
                  </td>
                </tr>
              )}

            </tbody>
            <tfoot>
              <tr>
                <th>Driver Licence</th>
                <th>Name</th>

                <th>Actions</th>
              </tr>
            </tfoot>
          </table>

          <div class="modal fade" id="addRoute" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title" id="exampleModalLongTitle">New</h5>
                  <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div class="modal-body">
                  <AddDriver closeModal={closeModalAdd} />
                </div>
                <div class="modal-footer">
                  <button ref={closeButtonAdd} type="button" class="btn btn-secondary" data-dismiss="modal"  >Close</button>

                </div>
              </div>
            </div>
          </div>

          <div class="modal fade" id="edit" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title" id="exampleModalLongTitle">Edit</h5>
                  <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div class="modal-body">
                  <EditDriver driver={updatedItem} closeModal={closeModalEdit} />
                </div>
                <div class="modal-footer">
                  <button ref={closeButtonEdit} type="button" class="btn btn-secondary" data-dismiss="modal"  >Close</button>

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
                  <button type="button" class="btn btn-secondary" data-dismiss="modal" >Fermer</button>

                </div>
              </div>
            </div>
          </div>


        </div>
      </div>
    </div>
  )
};

Driver.propTypes = {};

Driver.defaultProps = {};

export default Driver;
