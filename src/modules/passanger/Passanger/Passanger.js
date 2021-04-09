import React, { useEffect, useState } from 'react';
import './Passanger.css';
import { LoadJS } from '../../../libraries/datatables/datatables';
import EditPassanger from '../EditPassanger/EditPassanger';
import AddPassanger from '../AddPassanger/AddPassanger';
import useForceUpdate from 'use-force-update';
import showMessage from '../../../libraries/messages/messages';
import passangerMessage from '../../../main/messages/passangerMessage';
import PassangerTestService from '../../../main/mocks/PassangerTestService';
import HTTPService from '../../../main/services/HTTPService';

const Passanger = () => {

  const [passangers, setPassangers] = useState([]);
  const [updatedItem, setUpdatedItem] = useState({});
  const forceUpdate = useForceUpdate();


  useEffect(() => {
    LoadJS()
    retrievePassangers()
  }, []);


  const getAll = () => {
    HTTPService.getAll()
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
    forceUpdate()
  }

  const remove = (e, data) => {
    e.preventDefault();
    var r = window.confirm("Etes-vous sûr que vous voulez supprimer ?");
    if (r) {
      showMessage('Confirmation', passangerMessage.delete, 'success')
      PassangerTestService.remove(data)
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
        <strong className="card-title">Passagers</strong>
      </div>
      <div className="card-body">

        <table id="example1" className="table table-striped table-bordered">
          <thead>
            <tr>
              <th>Nom</th>
              <th>Email</th>
              <th>Adresse</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>

            {passangers.map(item =>
              <tr>
                <td>{item.firstname}</td>
                <td>{item.email}</td>
                <td>{item.address_line_1}</td>
                <td>
                  <button onClick={e => update(e, item)} type="button" data-toggle="modal" data-target="#edit" class="btn btn-warning btn-sm"><i class="fas fa-edit"></i></button>
                  <button onClick={e => remove(e, passangers.indexOf(item))} type="button" class="btn btn-danger btn-sm"><i class="fas fa-trash-alt"></i></button>
                </td>
              </tr>
            )}





          </tbody>
          <tfoot>
            <tr>
              <th>Nom</th>
              <th>Email</th>
              <th>Adresse</th>
              <th>Actions</th>
            </tr>
          </tfoot>
        </table>
        <button data-toggle="modal" data-target="#addPassanger" type="button" className="btn btn-success btn-sm">Ajouter</button>
        <div class="modal fade" id="addPassanger" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
          <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLongTitle">Nouveau</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
                <AddPassanger passanger={updatedItem} />
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
                <EditPassanger passanger={updatedItem} />
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

Passanger.propTypes = {};

Passanger.defaultProps = {};

export default Passanger;
