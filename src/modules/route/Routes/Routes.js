import React, { useEffect, useState } from 'react';
import './Routes.css';
import { LoadJS } from '../../../libraries/datatables/datatables';
import EditRoute from '../EditRoute/EditRoute';
import AddRoute from '../AddRoute/AddRoute';
import useForceUpdate from 'use-force-update';
import showMessage from '../../../libraries/messages/messages';
import routeMessage from '../../../main/messages/routeMessage';
import RouteTestService from '../../../main/mocks/RouteTestService';
import HTTPService from '../../../main/services/HTTPService';

const Routes = () => {
  const [routes, setRoutes] = useState([]);
  const [updatedItem, setUpdatedItem] = useState({});
  const forceUpdate = useForceUpdate();


  useEffect(() => {
    LoadJS()
    retrieveRoutes()
  }, []);


  const getAll = () => {
    HTTPService.getAll()
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
    retrieveRoutes()
    forceUpdate()
  }

  const remove = (e, data) => {
    e.preventDefault();
    var r = window.confirm("Etes-vous sûr que vous voulez supprimer ?");
    if (r) {
      showMessage('Confirmation', routeMessage.delete, 'success')
      RouteTestService.remove(data)
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
        <strong className="card-title">Routes</strong>
      </div>
      <div className="card-body">

        <table id="example1" className="table table-striped table-bordered">
          <thead>
            <tr>
              <th>Nom Route</th>
              <th>Point de depart</th>
              <th>Point final</th>
              <th>Point d'arret</th>
              <th>Distance</th>
              <th>Temps Approximatif</th>
              <th>Siege enfant </th>
              <th>Statut</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>

            {routes.map(item =>
              <tr>
                <td>{item.name}</td>
                <td><span className="badge badge-primary">{item.start_point}</span></td>
                <td>{item.end_point}</td>
                <td><span className="badge badge-secondary">{item.stoppage_points}</span></td>
                <td>{item.distance} km </td>
                <td>{item.approximate_time} h</td>
                <td>{item.special_seat}</td>
                <td><span className="badge badge-success" >{item.status}</span></td>
                <td>
                  <button onClick={e => update(e, item)} type="button" data-toggle="modal" data-target="#edit" class="btn btn-warning btn-sm"><i class="fas fa-edit"></i></button>
                  <button onClick={e => remove(e, routes.indexOf(item))} type="button" class="btn btn-danger btn-sm"><i class="fas fa-trash-alt"></i></button>
                </td>
              </tr>
            )}








          </tbody>
          <tfoot>
            <tr>
              <th>Nom Route</th>
              <th>Point de depart</th>
              <th>Point final</th>
              <th>Point d'arret</th>
              <th>Distance</th>
              <th>Temps Approximatif</th>
              <th>Siege enfant </th>
              <th>Statut</th>
              <th>Actions</th>
            </tr>
          </tfoot>
        </table>
        <button type="button" data-toggle="modal" data-target="#addRoute" className="btn btn-success btn-sm">Ajouter</button>
        <div class="modal fade" id="addRoute" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
          <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLongTitle">Nouveau</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
                <AddRoute />
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
                <EditRoute route={updatedItem} />
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

Routes.propTypes = {};

Routes.defaultProps = {};

export default Routes;
