import React, { useEffect, useRef, useState } from 'react';
import './Routes.css';
import { LoadJS } from '../../../libraries/datatables/datatables';
import EditRoute from '../EditRoute/EditRoute';
import AddRoute from '../AddRoute/AddRoute';
import useForceUpdate from 'use-force-update';
import showMessage from '../../../libraries/messages/messages';
import routeMessage from '../../../main/messages/routeMessage';
import RouteTestService from '../../../main/mocks/RouteTestService';
import HTTPService from '../../../main/services/HTTPService';
import routeHTTPService from '../../../main/services/routeHTTPService';

const Routes = () => {
  const [routes, setRoutes] = useState([]);
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
    // retrieveRoutes()
    getAll()
  }, []);


  const getAll = () => {
    routeHTTPService.getAllRoute()
      .then(response => {
        setRoutes(response.data);
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



  const retrieveRoutes = () => {
    var routes = RouteTestService.getAll();
    setRoutes(routes);
  };

  const resfresh = () => {
    //retrieveRoutes()
    // forceUpdate()
  }

  const remove = (e, data) => {
    e.preventDefault();
    var r = window.confirm("Are you sure ?");
    if (r) {
      /* showMessage('Confirmation', routeMessage.delete, 'success')
      RouteTestService.remove(data)
      //removeOne(data)
      resfresh() */
      routeHTTPService.removeRoute(data.id).then(() => {
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
        <strong className="card-title"><i class="menu-icon fa fa-route"></i> Routes</strong>
      </div>
      <div className="card-body">
        <button type="button" data-toggle="modal" data-target="#addRoute" className="btn btn-success btn-sm"><i class="fa fa-plus" aria-hidden="true"></i> Create</button>
        <table id="example1" className="table table-striped table-bordered">
          <thead>
            <tr>
              <th>Route Name</th>
              <th>From</th>
              <th>To</th>
              <th>Break Points</th>
              <th>Distance</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>

            {routes.map(item =>
              <tr>
                <td>{item.name}</td>
                <td><span className="badge badge-primary">{item.from}</span></td>
                <td>{item.to}</td>
                <td><span className="badge badge-secondary">{item.breakPoints}</span></td>
                <td>{item.distance} km </td>
                <td>
                  <button onClick={e => update(e, item)} type="button" data-toggle="modal" data-target="#edit" class="btn btn-warning btn-sm"><i class="fas fa-edit"></i></button>
                  <button onClick={e => remove(e, item)} type="button" class="btn btn-danger btn-sm"><i class="fas fa-trash-alt"></i></button>
                </td>
              </tr>
            )}








          </tbody>
          <tfoot>
            <tr>
              <th>Route Name</th>
              <th>From</th>
              <th>To</th>
              <th>Break Points</th>
              <th>Distance</th>
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
                <AddRoute closeModal={closeModalAdd} />
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
                <EditRoute route={updatedItem} closeModal={closeModalEdit} />
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

Routes.propTypes = {};

Routes.defaultProps = {};

export default Routes;
