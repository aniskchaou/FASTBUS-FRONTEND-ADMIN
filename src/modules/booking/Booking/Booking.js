import React, { useEffect, useState } from 'react';
import './Booking.css';
import { LoadJS } from '../../../libraries/datatables/datatables';
import EditBooking from '../EditBooking/EditBooking';
import AddBooking from '../AddBooking/AddBooking';
import useForceUpdate from 'use-force-update';
import showMessage from '../../../libraries/messages/messages';
import bookingMessage from '../../../main/messages/bookingMessage';
import BookingTestService from '../../../main/mocks/BookingTestService';
import HTTPService from '../../../main/services/HTTPService';

const Booking = () => {
  const [bookings, setBookings] = useState([]);
  const [updatedItem, setUpdatedItem] = useState({});
  const forceUpdate = useForceUpdate();


  useEffect(() => {
    LoadJS()
    retrieveBookings()
  }, []);


  const getAll = () => {
    HTTPService.getAll()
      .then(response => {
        setBookings(response.data);
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



  const retrieveBookings = () => {
    var bookings = BookingTestService.getAll();
    setBookings(bookings);
  };

  const resfresh = () => {
    retrieveBookings()
    forceUpdate()
  }

  const remove = (e, data) => {
    e.preventDefault();
    var r = window.confirm("Etes-vous sûr que vous voulez supprimer ?");
    if (r) {
      showMessage('Confirmation', bookingMessage.delete, 'success')
      BookingTestService.remove(data)
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
        <strong className="card-title">Réservations</strong>
      </div>
      <div className="card-body">

        <table id="example1" className="table table-striped table-bordered">
          <thead>
            <tr>
              <th>Date reservation</th>
              <th>Nom de passager</th>
              <th>Nom route</th>
              <th>siege</th>
              <th>Prix</th>
              <th>Numero siege</th>
              <th>Type paiement</th>
              <th>Statut</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>

            {bookings.map(item =>
              <tr>
                <td>{item.approximate_time}</td>
                <td>{item.vname}</td>
                <td>{item.route_id}</td>
                <td>343</td>
                <td className="badge badge-primary">{item.price}$</td>
                <td>222</td>
                <td>{item.ftypes}</td>
                <td className="badge badge-success">{item.status}</td>
                <td>
                  <button onClick={e => update(e, item)} type="button" data-toggle="modal" data-target="#edit" class="btn btn-warning btn-sm"><i class="fas fa-edit"></i></button>
                  <button onClick={e => remove(e, bookings.indexOf(item))} type="button" class="btn btn-danger btn-sm"><i class="fas fa-trash-alt"></i></button>
                </td>
              </tr>
            )}


            <tr>
              <td>23/5/2020</td>
              <td>Raymond Rhéaume</td>
              <td>3322D23D</td>
              <td>2B</td>
              <td className="badge badge-primary">12$</td>
              <td>22</td>
              <td>Virement bancaire</td>
              <td className="badge badge-success">Active</td>
              <td><button data-toggle="modal" data-target="#view" type="button" class="btn btn-primary btn-sm"><i class="fas fa-address-book"></i></button>
                <button data-toggle="modal" data-target="#edit" type="button" class="btn btn-warning btn-sm"><i class="fas fa-edit"></i></button>
                <button type="button" class="btn btn-danger btn-sm" onClick="return confirm('Êtes-vous sûr de vouloir supprimer cet enregistrement ?');"><i class="fas fa-trash-alt"></i></button></td>
            </tr>






          </tbody>
          <tfoot>
            <tr>
              <th>Date reservation</th>
              <th>Nom de passager</th>
              <th>Nom route</th>
              <th>siege</th>
              <th>Prix</th>
              <th>Numero siege</th>
              <th>Type paiement</th>
              <th>Statut</th>
              <th>Actions</th>
            </tr>
          </tfoot>

        </table>
        <button type="button" data-toggle="modal" data-target="#addBooking" className="btn btn-success btn-sm">Ajouter</button>
        <div class="modal fade" id="addBooking" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
          <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLongTitle">Nouveau</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
                <AddBooking />
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
                <EditBooking booking={updatedItem} />
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

Booking.propTypes = {};

Booking.defaultProps = {};

export default Booking;
