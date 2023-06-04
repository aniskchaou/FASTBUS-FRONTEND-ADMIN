import React, { useEffect, useRef, useState } from 'react';

import './Destination.css';
import { LoadJS } from '../../../libraries/datatables/datatables';
import EditDestination from '../EditDestination/EditDestination';
import AddDestination from '../AddDestination/AddDestination';
import useForceUpdate from 'use-force-update';
import showMessage from '../../../libraries/messages/messages';
import destinationMessage from '../../../main/messages/destinationMessage';
import DestinationTestService from '../../../main/mocks/DestinationTestService';
import HTTPService from '../../../main/services/HTTPService';
import destinationHTTPService from '../../../main/services/destinationHTTPService';

const Destination = () => {
  const [destinations, setDestinations] = useState([]);
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
    //retrieveDestinations()
    getAll()
  }, []);


  const getAll = () => {
    destinationHTTPService.getAllDestination()
      .then(response => {
        setDestinations(response.data);
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



  const retrieveDestinations = () => {
    var destinations = DestinationTestService.getAll();
    setDestinations(destinations);
  };

  const resfresh = () => {
    retrieveDestinations()
    //forceUpdate()
  }

  const remove = (e, data) => {
    e.preventDefault();
    var r = window.confirm("Are you sure ?");
    if (r) {
      /*  showMessage('Confirmation', destinationMessage.delete, 'success')
       DestinationTestService.remove(data) */
      //removeOne(data)
      destinationHTTPService.removeDestination(data.id).then(() => {
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
        <strong className="card-title"><i class="menu-icon fa fa-map-marked"></i> Destinations</strong>
      </div>
      <div className="card-body">
        <button data-toggle="modal" data-target="#addDestination" type="button" className="btn btn-success btn-sm"><i class="fa fa-plus" aria-hidden="true"></i> Create</button>

        <table id="example1" className="table table-striped table-bordered">
          <thead>
            <tr>
              <th> Name</th>
              <th>Description</th>

              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {destinations.map(item =>
              <tr>
                <td>{item.city}</td>
                <td>{item.description}</td>

                <td>
                  <button onClick={e => update(e, item)} type="button" data-toggle="modal" data-target="#edit" class="btn btn-warning btn-sm"><i class="fas fa-edit"></i></button>
                  <button onClick={e => remove(e, item)} type="button" class="btn btn-danger btn-sm"><i class="fas fa-trash-alt"></i></button>
                </td>
              </tr>
            )}
          </tbody>
          <tfoot>
            <tr>
              <th>Destination Name</th>
              <th>Description</th>
              <th>Actions</th>
            </tr>
          </tfoot>
        </table>

        <div class="modal fade" id="addDestination" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
          <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLongTitle">New</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
                <AddDestination closeModal={closeModalAdd} />
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
                <EditDestination destination={updatedItem} closeModal={closeModalEdit} />
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

Destination.propTypes = {};

Destination.defaultProps = {};

export default Destination;
