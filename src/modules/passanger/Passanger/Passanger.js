import React, { useEffect, useRef, useState } from 'react';
import './Passanger.css';
import { LoadJS } from '../../../libraries/datatables/datatables';
import EditPassanger from '../EditPassanger/EditPassanger';
import AddPassanger from '../AddPassanger/AddPassanger';
import useForceUpdate from 'use-force-update';
import showMessage from '../../../libraries/messages/messages';
import passangerMessage from '../../../main/messages/passangerMessage';
import PassangerTestService from '../../../main/mocks/PassangerTestService';
import HTTPService from '../../../main/services/HTTPService';
import passengerHTTPService from '../../../main/services/passengerHTTPService';

const Passanger = () => {

  const [passangers, setPassangers] = useState([]);
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
    //retrievePassangers()
    getAll()
  }, []);


  const getAll = () => {
    passengerHTTPService.getAllPassenger()
      .then(response => {
        setPassangers(response.data);
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



  const retrievePassangers = () => {
    var passangers = PassangerTestService.getAll();
    setPassangers(passangers);
  };

  const resfresh = () => {
    retrievePassangers()
    //forceUpdate()
  }

  const remove = (e, data) => {
    e.preventDefault();
    var r = window.confirm("Are you sure ?");
    if (r) {
      /*  showMessage('Confirmation', passangerMessage.delete, 'success')
       PassangerTestService.remove(data)
       //removeOne(data)
       resfresh() */
      passengerHTTPService.removePassenger(data.id).then(() => {
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
        <strong className="card-title"><i class="menu-icon fa fa-users "></i> Passengers</strong>
      </div>
      <div className="card-body">
        <button data-toggle="modal" data-target="#addPassanger" type="button" className="btn btn-success btn-sm"><i class="fa fa-plus" aria-hidden="true"></i> Create</button>
        <table id="example1" className="table table-striped table-bordered">
          <thead>
            <tr>
              <th>Firstname</th>
              <th>Lastname</th>
              <th>Email</th>
              <th>Telephone</th>
              <th>Address</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>

            {passangers.map(item =>
              <tr>
                <td>{item.firstName}</td>
                <td>{item.lastName}</td>
                <td>{item.email}</td>
                <td>{item.telephone}</td>
                <td>{item.address}</td>
                <td>
                  <button onClick={e => update(e, item)} type="button" data-toggle="modal" data-target="#edit" class="btn btn-warning btn-sm"><i class="fas fa-edit"></i></button>
                  <button onClick={e => remove(e, item)} type="button" class="btn btn-danger btn-sm"><i class="fas fa-trash-alt"></i></button>
                </td>
              </tr>
            )}
          </tbody>
          <tfoot>
            <tr>
              <th>Firstname</th>
              <th>Lastname</th>
              <th>Email</th>
              <th>Telephone</th>
              <th>Adresse</th>
              <th>Actions</th>
            </tr>
          </tfoot>
        </table>

        <div class="modal fade" id="addPassanger" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
          <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLongTitle">New</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
                <AddPassanger passanger={updatedItem} closeModal={closeModalAdd} />
              </div>
              <div class="modal-footer">
                <button ref={closeButtonAdd} type="button" class="btn btn-secondary" data-dismiss="modal" onClick={resfresh} >Close</button>

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
                <EditPassanger passanger={updatedItem} closeModal={closeModalEdit} />
              </div>
              <div class="modal-footer">
                <button ref={closeButtonEdit} type="button" class="btn btn-secondary" data-dismiss="modal" onClick={resfresh} >Close</button>

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

Passanger.propTypes = {};

Passanger.defaultProps = {};

export default Passanger;
