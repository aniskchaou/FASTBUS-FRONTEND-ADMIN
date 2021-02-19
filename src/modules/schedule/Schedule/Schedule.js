import React, { useEffect, useState } from 'react';
import './Schedule.css';
import { LoadJS } from '../../../libraries/datatables/datatables';
import EditSchedule from '../EditSchedule/EditSchedule';
import AddSchedule from '../AddSchedule/AddSchedule';
import useForceUpdate from 'use-force-update';
import showMessage from '../../../libraries/messages/messages';
import scheduleMessage from '../../../main/messages/scheduleMessage';
import ScheduleTestService from '../../../main/mocks/ScheduleTestService';
import HTTPService from '../../../main/services/HTTPService';

const Schedule = () => {
  const [schedules, setSchedules] = useState([]);
  const [updatedItem, setUpdatedItem] = useState({});
  const forceUpdate = useForceUpdate();


  useEffect(() => {
    LoadJS()
    retrieveSchedules()
  }, []);


  const getAll = () => {
    HTTPService.getAll()
      .then(response => {
        setSchedules(response.data);
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



  const retrieveSchedules = () => {
    var schedules = ScheduleTestService.getAll();
    setSchedules(schedules);
  };

  const resfresh = () => {
    retrieveSchedules()
    forceUpdate()
  }

  const remove = (e, data) => {
    e.preventDefault();
    var r = window.confirm("Etes-vous sûr que vous voulez supprimer ?");
    if (r) {
      showMessage('Confirmation', scheduleMessage.delete, 'success')
      ScheduleTestService.remove(data)
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
        <strong className="card-title">Horaires</strong>
      </div>
      <div className="card-body">

        <table id="example1" className="table table-striped table-bordered">
          <thead>
            <tr>
              <th>Date debut</th>
              <th>Date fin</th>
              <th>Durée</th>
              <th>Actions</th>

            </tr>
          </thead>
          <tbody>


            {schedules.map(item =>
              <tr>
                <td>{item.start}</td>
                <td>{item.end}</td>
                <th>{item.duration}</th>
                <td>
                  <button onClick={e => update(e, item)} type="button" data-toggle="modal" data-target="#edit" class="btn btn-warning btn-sm"><i class="fas fa-edit"></i></button>
                  <button onClick={e => remove(e, schedules.indexOf(item))} type="button" class="btn btn-danger btn-sm"><i class="fas fa-trash-alt"></i></button>

                </td>
              </tr>
            )}


            <tr>
              <td>14h00</td>
              <td>16h00</td>
              <th>2 heures</th>
              <td>
                <button data-toggle="modal" data-target="#edit" type="button" class="btn btn-warning btn-sm"><i class="fas fa-edit"></i></button>
                <button type="button" class="btn btn-danger btn-sm" onClick="return confirm('Êtes-vous sûr de vouloir supprimer cet enregistrement ?');"><i class="fas fa-trash-alt"></i></button></td>
            </tr>



            <tr>
              <td>10h00</td>
              <td>13h00</td>
              <th>3 heures</th>
              <td>
                <button data-toggle="modal" data-target="#edit" type="button" class="btn btn-warning btn-sm"><i class="fas fa-edit"></i></button>
                <button type="button" class="btn btn-danger btn-sm" onClick="return confirm('Êtes-vous sûr de vouloir supprimer cet enregistrement ?');"><i class="fas fa-trash-alt"></i></button></td>
            </tr>

          </tbody><tfoot>
            <tr>
              <th>Date debut</th>
              <th>Date fin</th>
              <th>Durée</th>
              <th>Actions</th>

            </tr>
          </tfoot>
        </table>
        <button data-toggle="modal" data-target="#addSchedule" type="button" className="btn btn-success btn-sm">Ajouter</button>
        <div class="modal fade" id="addSchedule" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
          <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLongTitle">Nouveau</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
                <AddSchedule />
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
                <EditSchedule schedule={updatedItem} />
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

Schedule.propTypes = {};

Schedule.defaultProps = {};

export default Schedule;
