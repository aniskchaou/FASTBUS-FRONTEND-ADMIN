import React, { useEffect, useState } from 'react';

import './Destination.css';
import { LoadJS } from '../../../libraries/datatables/datatables';
import EditDestination from '../EditDestination/EditDestination';
import AddDestination from '../AddDestination/AddDestination';
import useForceUpdate from 'use-force-update';
import showMessage from '../../../libraries/messages/messages';
import destinationMessage from '../../../main/messages/destinationMessage';
import DestinationTestService from '../../../main/mocks/DestinationTestService';
import HTTPService from '../../../main/services/HTTPService';

const Destination = () => {
  const [destinations, setDestinations] = useState([]);
  const [updatedItem, setUpdatedItem] = useState({});
  const forceUpdate = useForceUpdate();


  useEffect(() => {
    LoadJS()
    retrieveDestinations()
  }, []);


  const getAll = () => {
    HTTPService.getAll()
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
    forceUpdate()
  }

  const remove = (e, data) => {
    e.preventDefault();
    var r = window.confirm("Etes-vous sûr que vous voulez supprimer ?");
    if (r) {
      showMessage('Confirmation', destinationMessage.delete, 'success')
      DestinationTestService.remove(data)
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
        <strong className="card-title">Destinations</strong>
      </div>
      <div className="card-body">

        <table id="example1" className="table table-striped table-bordered">
          <thead>
            <tr>
              <th>Nom destination</th>
              <th>description</th>
              <th>Statut</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {destinations.map(item =>
              <tr>
                <td>{item.name}</td>
                <td>{item.description}</td>
                <td ><span className="badge badge-success">{item.status}</span></td>
                <td>
                  <button onClick={e => update(e, item)} type="button" data-toggle="modal" data-target="#edit" class="btn btn-warning btn-sm"><i class="fas fa-edit"></i></button>
                  <button onClick={e => remove(e, destinations.indexOf(item))} type="button" class="btn btn-danger btn-sm"><i class="fas fa-trash-alt"></i></button>
                </td>
              </tr>
            )}
          </tbody>
          <tfoot>
            <tr>
              <th>Nom destination</th>
              <th>description</th>
              <th>Statut</th>
              <th>Actions</th>
            </tr>
          </tfoot>
        </table>
        <button data-toggle="modal" data-target="#addDestination" type="button" className="btn btn-success btn-sm"><i class="fas fa-plus-circle"></i></button>

        <div class="modal fade" id="addDestination" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
          <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLongTitle">Nouveau</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
                <AddDestination />
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
                <h5 class="modal-title" id="exampleModalLongTitle">Edit</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
                <EditDestination destination={updatedItem} />
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

Destination.propTypes = {};

Destination.defaultProps = {};

export default Destination;
