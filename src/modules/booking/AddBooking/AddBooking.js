import React, { useEffect, useState } from 'react';
import './AddBooking.css';
import { useForm } from 'react-hook-form';
import showMessage from '../../../libraries/messages/messages'
import bookingMessage from '../../../main/messages/bookingMessage'
import bookingValidation from '../../../main/validations/bookingValidation'
import BookingTestService from '../../../main/mocks/BookingTestService';
import bookingHTTPService from '../../../main/services/bookingHTTPService';
import passengerHTTPService from '../../../main/services/passengerHTTPService';
import travelHTTPService from '../../../main/services/travelHTTPService';

const AddBooking = (props) => {

  const initialState = {
    date: "",
    passenger: "",
    trip: "",
    payment: "",
    adults: "",
    kids: ""
  };

  const { register, handleSubmit, errors } = useForm()
  const [booking, setBooking] = useState(initialState);

  const onSubmit = (data) => {
    //saveBooking(data)
    /*   BookingTestService.create(data)
      setBooking(initialState)
      showMessage('Confirmation', bookingMessage.add, 'success') */
    bookingHTTPService.createBooking(data)
      .then(response => {
        setBooking(initialState)
        props.closeModal()
      })
      .catch(e => {
        console.log(e);
      });
  }

  const saveBooking = (data) => {

    /*  HTTPService.create(data)
       .then(response => {
         setBooking(initialState)
       })
       .catch(e => {
         console.log(e);
       }); */

  };


  const handleInputChange = event => {
    const { name, value } = event.target;
    setBooking({ ...booking, [name]: value });
  };

  const [passengers, setPassenger] = useState([]);
  const [travels, setTravels] = useState([]);
  useEffect(() => {
    getPassengers()
    getAllTravels()
  }, []);
  const getPassengers = () => {

    passengerHTTPService.getAllPassenger()
      .then(response => {
        setPassenger(response.data);
      })
      .catch(e => {
        showMessage('Confirmation', e, 'warning')
      });
  };

  const getAllTravels = () => {

    travelHTTPService.getAllTravel()
      .then(response => {
        setTravels(response.data);
      })
      .catch(e => {
        showMessage('Confirmation', e, 'warning')
      });
  };




  return (
    <div className="AddBooking">
      <form onSubmit={handleSubmit(onSubmit)} id="bookingFrm" method="post" accept-charset="utf-8">





        <div class="form-group row">
          <label for="approximate_time" class="col-md-3 col-form-label">  Date *  </label>
          <div class="col-sm-9">
            <input onChange={handleInputChange} value={booking.date} ref={register({ required: true })}
              name="date" class="findTripByRouteDate form-control datepicker hasDatepicker" type="date" placeholder="Date de réservation" id="approximate_time" />
            <div className="error text-danger">
              {errors.approximate_time && bookingValidation.approximate_time}
            </div>

          </div>
        </div>



        <div class="form-group row">
          <label for="ftypes" class="col-md-3 col-form-label">  Passenger *  </label>
          <div class="col-sm-9">
            <select onChange={handleInputChange} value={booking.passenger} ref={register({ required: true })}
              name="passenger" id="ftypes" class="findTripByRouteDate form-control select2-hidden-accessible" tabindex="-1" aria-hidden="true">
              {passengers.map(item =>
                <option value={item.firstName + ' ' + item.lastName}>{item.firstName + ' ' + item.lastName}</option>
              )}
            </select>

            <div className="error text-danger">
              {errors.ftypes && bookingValidation.ftypes}
            </div>
          </div>
        </div>



        <div class="form-group row">
          <label for="route_id" class="col-md-3 col-form-label">  Trip *  </label>
          <div class="col-sm-9">
            <select onChange={handleInputChange} value={booking.trip} ref={register({ required: true })}
              name="trip" id="route_id" class="findTripByRouteDate form-control select2-hidden-accessible" tabindex="-1" aria-hidden="true">
              {travels.map(item =>
                <option value={item.title}>{item.title}</option>
              )}
            </select>

            <div className="error text-danger">
              {errors.route_id && bookingValidation.route_id}
            </div>
          </div>
        </div>


        <div class="form-group row">
          <label for="adult" class="col-md-3 col-form-label">  Adults  </label>
          <div class="col-sm-9">
            <input onChange={handleInputChange} value={booking.adults} ref={register({ required: true })}
              name="adults" id="adult" class="form-control seatno" placeholder="Adulte" autocomplete="off" type="number" />

            <div className="error text-danger">
              {errors.adult && bookingValidation.adult}
            </div>
          </div>
        </div>


        <div class="form-group row">
          <label for="child_no" class="col-md-3 col-form-label">  kids  </label>
          <div class="col-sm-9">
            <input onChange={handleInputChange} value={booking.kids} ref={register({ required: true })}
              name="kids" id="child_no" class="form-control seatno" placeholder="Enfant" autocomplete="off" type="number" />
            <div className="error text-danger">
              {errors.child_no && bookingValidation.child_no}
            </div>
          </div>
        </div>

        <div class="form-group row">
          <label for="payment_status" class="col-md-3 col-form-label"> Payment Statuts *  </label>
          <div class="col-sm-9">
            <select onChange={handleInputChange} value={booking.payment} ref={register({ required: true })}
              class="form-control select2-hidden-accessible" name="payment" id="status" required=""
              tabindex="-1" aria-hidden="true">
              <option value="Paid">  Paid  </option>
              <option value="Pending">  Pending </option>
            </select>
            <div className="error text-danger">
              {errors.status && bookingValidation.status}
            </div>
          </div>
        </div>


        <div class="form-group text-left">

          <button type="submit" class="btn btn-success w-md m-b-5">  Save </button>
        </div>
      </form>
    </div>
  )
};

AddBooking.propTypes = {};

AddBooking.defaultProps = {};

export default AddBooking;
