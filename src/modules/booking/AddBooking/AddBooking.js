import React, { useState } from 'react';
import './AddBooking.css';
import { useForm } from 'react-hook-form';
import showMessage from '../../../libraries/messages/messages'
import bookingMessage from '../../../main/messages/bookingMessage'
import bookingValidation from '../../../main/validations/bookingValidation'
import BookingTestService from '../../../main/mocks/BookingTestService';
import HTTPService from '../../../main/services/HTTPService';

const AddBooking = () => {

  const initialState = {
    post: "",
    description: "",
    start: "",
    end: "",
    location: "",
    requirement: ""
  };

  const { register, handleSubmit, errors } = useForm()
  const [booking, setBooking] = useState(initialState);

  const onSubmit = (data) => {
    //saveBooking(data)
    BookingTestService.create(data)
    setBooking(initialState)
    showMessage('Confirmation', bookingMessage.add, 'success')
  }

  const saveBooking = (data) => {

    HTTPService.create(data)
      .then(response => {
        setBooking(initialState)
      })
      .catch(e => {
        console.log(e);
      });

  };


  const handleInputChange = event => {
    const { name, value } = event.target;
    setBooking({ ...booking, [name]: value });
  };

  return (
    <div className="AddBooking">
      <form onSubmit={handleSubmit(onSubmit)} id="bookingFrm" method="post" accept-charset="utf-8">


        <div class="form-group row">
          <label for="name" class="col-md-3 col-form-label">  Nom *  </label>
          <div class="col-sm-9">
            <input onChange={handleInputChange} value={booking.name} ref={register({ required: true })}
              name="name" class="findTripByRouteDate form-control datepicker hasDatepicker"
              type="text" placeholder="Nom" id="approximate_time" />
            <div className="error text-danger">
              {errors.name && bookingValidation.name}
            </div>

          </div>
        </div>


        <div class="form-group row">
          <label for="approximate_time" class="col-md-3 col-form-label">  Date de réservation *  </label>
          <div class="col-sm-9">
            <input onChange={handleInputChange} value={booking.approximate_time} ref={register({ required: true })}
              name="approximate_time" class="findTripByRouteDate form-control datepicker hasDatepicker" type="date" placeholder="Date de réservation" id="approximate_time" />
            <div className="error text-danger">
              {errors.approximate_time && bookingValidation.approximate_time}
            </div>

          </div>
        </div>



        <div class="form-group row">
          <label for="ftypes" class="col-md-3 col-form-label">  Les types *  </label>
          <div class="col-sm-9">
            <select onChange={handleInputChange} value={booking.ftypes} ref={register({ required: true })}
              name="ftypes" id="ftypes" class="findTripByRouteDate form-control select2-hidden-accessible" tabindex="-1" aria-hidden="true">
              <option selected="selected">  Sélectionnez-en un ...  </option>
              <option value="1">  VIP  </option>
              <option value="2">  Prestige  </option>
              <option value="3">  Classique  </option>
              <option value="4">  Entraîneur  </option>
            </select>

            <div className="error text-danger">
              {errors.ftypes && bookingValidation.ftypes}
            </div>
          </div>
        </div>



        <div class="form-group row">
          <label for="route_id" class="col-md-3 col-form-label">  Nom de l'itinéraire *  </label>
          <div class="col-sm-9">
            <select onChange={handleInputChange} value={booking.route_id} ref={register({ required: true })}
              name="route_id" id="route_id" class="findTripByRouteDate form-control select2-hidden-accessible" tabindex="-1" aria-hidden="true">
              <option selected="selected">  Sélectionnez une option  </option>
              <option value="13">  Paris-Nice </option>
              <option value="10">  Nice - Paris  </option>
              <option value="9">  Lyon - Strasbourg  </option>
              <option value="11">  Strasbourg - Lyon  </option>
            </select>

            <div className="error text-danger">
              {errors.route_id && bookingValidation.route_id}
            </div>
          </div>
        </div>


        <div class="form-group row">
          <label for="adult" class="col-md-3 col-form-label">  Adulte  </label>
          <div class="col-sm-9">
            <input onChange={handleInputChange} value={booking.adult} ref={register({ required: true })}
              name="adult" id="adult" class="form-control seatno" placeholder="Adulte" autocomplete="off" type="number" />

            <div className="error text-danger">
              {errors.adult && bookingValidation.adult}
            </div>
          </div>
        </div>


        <div class="form-group row">
          <label for="child_no" class="col-md-3 col-form-label">  Enfant  </label>
          <div class="col-sm-9">
            <input onChange={handleInputChange} value={booking.child_no} ref={register({ required: true })}
              name="child_no" id="child_no" class="form-control seatno" placeholder="Enfant" autocomplete="off" type="number" />
            <div className="error text-danger">
              {errors.child_no && bookingValidation.child_no}
            </div>
          </div>
        </div>


        <div class="form-group row">
          <label for="special" class="col-md-3 col-form-label">  Spécial  </label>
          <div class="col-sm-9">
            <input onChange={handleInputChange} value={booking.special} ref={register({ required: true })}
              name="special" id="special" class="form-control seatno" placeholder="Spécial" autocomplete="off" type="number" />
            <div className="error text-danger">
              {errors.special && bookingValidation.special}
            </div>
          </div>
        </div>


        <div class="form-group row">
          <label for="offerCode" class="col-md-3 col-form-label">  Code d'offre  </label>
          <div class="col-sm-9">
            <input onChange={handleInputChange} value={booking.offer_code} ref={register({ required: true })}
              name="offer_code" class="form-control" type="text" placeholder="Code d'offre" id="offerCode" />
            <div id="offerHelpText"></div>
            <div className="error text-danger">
              {errors.offer_code && bookingValidation.offer_code}
            </div>
          </div>
        </div>


        <div class="form-group row">
          <label for="price" class="col-md-3 col-form-label">  Prix ​​*  </label>
          <div class="col-sm-9">
            <div class="row">
              <strong class="col-sm-4">  Prix  </strong>
              <strong class="col-sm-4">  Remise  </strong>
              <strong class="col-sm-4">  Montant  </strong>
            </div>
            <div class="row">
              <div class="col-sm-4">
                <input onChange={handleInputChange} value={booking.price} ref={register({ required: true })}
                  name="price" class="form-control text-right" type="number" placeholder="Prix" id="price" />
                <div className="error text-danger">
                  {errors.price && bookingValidation.price}
                </div>
              </div>
              <div class="col-sm-4">
                <input onChange={handleInputChange} value={booking.discount} ref={register({ required: true })}
                  name="discount" class="form-control text-right" type="number" placeholder="Remise" id="discount" />
                <div className="error text-danger">
                  {errors.discount && bookingValidation.discount}
                </div>

              </div>
              <div class="col-sm-4">
                <input onChange={handleInputChange} value={booking.amount} ref={register({ required: true })}
                  name="amount" class="form-control text-right" type="number" placeholder="Montant" id="amount" />
                <div className="error text-danger">
                  {errors.amount && bookingValidation.amount}
                </div>

              </div>
            </div>
          </div>
        </div>


        <div class="form-group row">
          <label for="passenger_id_no" class="col-md-3 col-form-label">  email *  </label>
          <div class="col-sm-9">

            <input onChange={handleInputChange} value={booking.passenger_email} ref={register({ required: true })}
              name="passenger_email" class="form-control" type="text" placeholder="email" id="passenger_email" />
            <div className="error text-danger">
              {errors.passenger_email && bookingValidation.passenger_email}
            </div>
          </div>
        </div>

        <div class="form-group row">
          <label for="pickup_location" class="col-md-3 col-form-label">  Lieu de départ  </label>
          <div class="col-sm-9">
            <select onChange={handleInputChange} value={booking.pickup_location} ref={register({ required: true })}
              class="tripLocation form-control select2-hidden-accessible" name="pickup_location" id="pickup_location" tabindex="-1" aria-hidden="true">
              <option>Paris</option>
              <option>Nice</option>
            </select>
            <div className="error text-danger">
              {errors.pickup_location && bookingValidation.pickup_location}
            </div>
          </div>
        </div>


        <div class="form-group row">
          <label for="drop_location" class="col-md-3 col-form-label">  Lieu d'arrivé  </label>
          <div class="col-sm-9">
            <select onChange={handleInputChange} value={booking.drop_location} ref={register({ required: true })}
              class="tripLocation form-control select2-hidden-accessible" name="drop_location"
              id="drop_location" tabindex="-1" aria-hidden="true">
              <option>Paris</option>
              <option>Nice</option>
            </select>
            <div className="error text-danger">
              {errors.drop_location && bookingValidation.drop_location}
            </div>
          </div>
        </div>



        <div class="form-group row">
          <label for="payment_status" class="col-md-3 col-form-label">  Statut de paiement*  </label>
          <div class="col-sm-9">
            <select onChange={handleInputChange} value={booking.status} ref={register({ required: true })}
              class="form-control select2-hidden-accessible" name="status" id="status" required=""
              tabindex="-1" aria-hidden="true">
              <option value="NULL">  Payé  </option>
              <option value="1">  Non payé  </option>
            </select>
            <div className="error text-danger">
              {errors.status && bookingValidation.status}
            </div>
          </div>
        </div>


        <div class="form-group text-right">
          <button type="reset" class="btn btn-primary w-md m-b-5">  Réinitialiser  </button>
          <button type="submit" class="btn btn-success w-md m-b-5">  sauvegarder </button>
        </div>
      </form>
    </div>
  )
};

AddBooking.propTypes = {};

AddBooking.defaultProps = {};

export default AddBooking;
