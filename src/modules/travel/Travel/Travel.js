import React, { useEffect, useRef, useState } from 'react';
import './Travel.css';
import { LoadJS } from '../../../libraries/datatables/datatables';
import EditTravel from '../EditTravel/EditTravel';
import AddTravel from '../AddTravel/AddTravel';
import useForceUpdate from 'use-force-update';
import showMessage from '../../../libraries/messages/messages';
import travelMessage from '../../../main/messages/travelMessage';
import TravelTestService from '../../../main/mocks/TravelTestService';
import HTTPService from '../../../main/services/HTTPService';
import travelHTTPService from '../../../main/services/travelHTTPService';

const Travel = () => {

  const [travels, setTravels] = useState([]);
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
    //retrieveTravels()
    getAll()
  }, []);


  const getAll = () => {
    travelHTTPService.getAllTravel()
      .then(response => {
        console.log(response.data)
        setTravels(response.data);
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



  const retrieveTravels = () => {
    var travels = TravelTestService.getAll();
    setTravels(travels);
  };

  const resfresh = () => {
    //retrieveTravels()
    //forceUpdate()
  }

  const remove = (e, data) => {
    e.preventDefault();
    var r = window.confirm("Are you sure ?");
    if (r) {
      /*  showMessage('Confirmation', travelMessage.delete, 'success')
       TravelTestService.remove(data)
       //removeOne(data)
       resfresh() */
      travelHTTPService.removeTravel(data.id).then(() => {
        getAll()
      })
    }

  }

  const update = (e, data) => {
    e.preventDefault();
    setUpdatedItem(data)
    //resfresh()
  }


  return (
    <div className="card">
      <div className="card-header">
        <strong className="card-title"><i class="menu-icon fa fa-suitcase"></i> Travels</strong>
      </div>
      <div className="card-body">
        <button data-toggle="modal" data-target="#addTravel" type="button" className="btn btn-success btn-sm"><i class="fa fa-plus" aria-hidden="true"></i> Create</button>
        <table id="example1" className="table table-striped table-bordered">
          <thead>
            <tr>
              <th>Title</th>
              <th>Route</th>
              <th>Date</th>
              <th>Price</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>



            {travels.map(item =>
              <tr>
                <td><span className="badge badge-primary">{item.title}</span></td>
                <td>{item.route}</td>
                <td>{item.date}</td>
                <td>{item.price}</td>
                <td>
                  <button onClick={e => update(e, item)} type="button" data-toggle="modal" data-target="#edit" class="btn btn-warning btn-sm"><i class="fas fa-edit"></i></button>
                  <button onClick={e => remove(e, item)} type="button" class="btn btn-danger btn-sm"><i class="fas fa-trash-alt"></i></button>
                </td>
              </tr>
            )}


          </tbody>
          <tfoot>
            <tr>
              <th>Title</th>
              <th>Route</th>
              <th>Date</th>
              <th>Price</th>
              <th>Actions</th>
            </tr>
          </tfoot>
        </table>

        <div class="modal fade" id="addTravel" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
          <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLongTitle">New</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
                <AddTravel closeModal={closeModalAdd} />
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
                <EditTravel travel={updatedItem} closeModal={closeModalEdit} />
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

Travel.propTypes = {};

Travel.defaultProps = {};

export default Travel;
