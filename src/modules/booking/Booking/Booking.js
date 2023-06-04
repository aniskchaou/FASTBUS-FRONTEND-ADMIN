import React, { useEffect, useRef, useState } from 'react';
import './Booking.css';
import { LoadJS } from '../../../libraries/datatables/datatables';
import EditBooking from '../EditBooking/EditBooking';
import AddBooking from '../AddBooking/AddBooking';
import useForceUpdate from 'use-force-update';
import showMessage from '../../../libraries/messages/messages';
import bookingMessage from '../../../main/messages/bookingMessage';
import BookingTestService from '../../../main/mocks/BookingTestService';
import HTTPService from '../../../main/services/HTTPService';
import ViewBooking from '../ViewBooking/ViewBooking';
import bookingHTTPService from '../../../main/services/bookingHTTPService';
const Booking = () => {
  const [bookings, setBookings] = useState([]);
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
    // retrieveBookings()
    getAll()
  }, []);


  const getAll = () => {
    bookingHTTPService.getAllBooking()
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
    //retrieveBookings()
    //forceUpdate()
  }

  const remove = (e, data) => {
    e.preventDefault();
    var r = window.confirm("Are you sure ?");
    if (r) {
      bookingHTTPService.removeBooking(data.id).then(() => {
        getAll()
      })
    }

  }

  const update = (e, data) => {
    e.preventDefault();
    setUpdatedItem(data)
    resfresh()
  }

  const view = (e, data) => {
    e.preventDefault();
    setUpdatedItem(data)
    resfresh()
  }


  return (
    <div className="card">
      <div className="card-header">
        <strong className="card-title"><i class="menu-icon fa fa-location-arrow"></i> Bookings</strong>
      </div>
      <div className="card-body">
        <button type="button" data-toggle="modal" data-target="#addBooking" className="btn btn-success btn-sm"><i class="fa fa-plus" aria-hidden="true"></i> Create</button>

        <table id="example1" className="table table-striped table-bordered">
          <thead>
            <tr>
              <th>Date Booking</th>
              <th>Passenger</th>
              <th>Trip</th>
              <th>Payment</th>
              <th>Adult</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>

            {bookings.map(item =>
              <tr>
                <td>{item.date}</td>
                <td>{item.passenger}</td>
                <td>{item.trip}</td>
                <td ><span className="badge badge-primary">{item.payment}</span></td>
                <td ><span className="badge badge-success"></span>{item.adults}</td>
                <td>
                  {/*   <button onClick={e => view(e, item)} data-toggle="modal" data-target="#view" type="button" class="btn btn-primary btn-sm"><i class="fas fa-address-book"></i></button> */}
                  <button onClick={e => update(e, item)} type="button" data-toggle="modal" data-target="#edit" class="btn btn-warning btn-sm"><i class="fas fa-edit"></i></button>
                  <button onClick={e => remove(e, item)} type="button" class="btn btn-danger btn-sm"><i class="fas fa-trash-alt"></i></button>
                </td>
              </tr>
            )}
          </tbody>
          <tfoot>
            <tr>
              <th>Date Booking</th>
              <th>Passenger</th>
              <th>Route</th>
              <th>Price</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </tfoot>

        </table>


        <div class="modal fade" id="addBooking" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
          <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLongTitle">New</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
                <AddBooking closeModal={closeModalAdd} />
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
                <EditBooking booking={updatedItem} closeModal={closeModalEdit} />
              </div>
              <div class="modal-footer">
                <button ref={closeButtonEdit} type="button" class="btn btn-secondary" data-dismiss="modal" onClick={resfresh} >Close</button>

              </div>
            </div>
          </div>
        </div>

        {/*   <div class="modal fade" id="view" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
          <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLongTitle">Voir</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
                <ViewBooking booking={updatedItem} />
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-dismiss="modal" onClick={resfresh} >Fermer</button>

              </div>
            </div>
          </div>
        </div> */}


      </div>
    </div>
  )
};

Booking.propTypes = {};

Booking.defaultProps = {};

export default Booking;
