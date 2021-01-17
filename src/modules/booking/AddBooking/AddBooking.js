import React from 'react';
import PropTypes from 'prop-types';
import './AddBooking.css';

const AddBooking = () => (
  <div className="AddBooking">
    <form id="bookingFrm" method="post" accept-charset="utf-8">



      <div class="form-group row">
        <label for="approximate_time" class="col-md-3 col-form-label">  Date de réservation *  </label>
        <div class="col-sm-9">
          <input name="approximate_time" class="findTripByRouteDate form-control datepicker hasDatepicker" type="date" placeholder="Date de réservation" id="approximate_time" value="30-12-2020" />
        </div>
      </div>



      <div class="form-group row">
        <label for="ftypes" class="col-md-3 col-form-label">  Les types *  </label>
        <div class="col-sm-9">
          <select name="ftypes" id="ftypes" class="findTripByRouteDate form-control select2-hidden-accessible" tabindex="-1" aria-hidden="true">
            <option value="" selected="selected">  Sélectionnez-en un ...  </option>
            <option value="1">  VIP  </option>
            <option value="2">  Prestige  </option>
            <option value="3">  Classique  </option>
            <option value="4">  Entraîneur  </option>
          </select>
        </div>
      </div>



      <div class="form-group row">
        <label for="route_id" class="col-md-3 col-form-label">  Nom de l'itinéraire *  </label>
        <div class="col-sm-9">
          <select name="route_id" id="route_id" class="findTripByRouteDate form-control select2-hidden-accessible" tabindex="-1" aria-hidden="true">
            <option value="" selected="selected">  Sélectionnez une option  </option>
            <option value="13">  Paris-Nice </option>
            <option value="10">  Nice - Paris  </option>
            <option value="9">  Lyon - Strasbourg  </option>
            <option value="11">  Strasbourg - Lyon  </option>
          </select>
        </div>
      </div>


      <div class="form-group row">
        <label for="adult" class="col-md-3 col-form-label">  Adulte  </label>
        <div class="col-sm-9">
          <input name="adult" id="adult" class="form-control seatno" placeholder="Adulte" autocomplete="off" type="number" />
        </div>
      </div>


      <div class="form-group row">
        <label for="child_no" class="col-md-3 col-form-label">  Enfant  </label>
        <div class="col-sm-9">
          <input name="child_no" id="child_no" class="form-control seatno" placeholder="Enfant" autocomplete="off" type="number" />
        </div>
      </div>


      <div class="form-group row">
        <label for="special" class="col-md-3 col-form-label">  Spécial  </label>
        <div class="col-sm-9">
          <input name="special" id="special" class="form-control seatno" placeholder="Spécial" autocomplete="off" type="number" />
          <input type="hidden" name="ttlseatw" id="tseats" class="form-control" />
        </div>
      </div>


      <div class="form-group row">
        <label for="offerCode" class="col-md-3 col-form-label">  Code d'offre  </label>
        <div class="col-sm-9">
          <input name="offer_code" class="form-control" type="text" placeholder="Code d'offre" id="offerCode" value="" />
          <div id="offerHelpText"></div>
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
              <input name="price" class="form-control text-right" type="number" placeholder="Prix" id="price" value="" />
            </div>
            <div class="col-sm-4">
              <input name="discount" class="form-control text-right" type="number" placeholder="Remise" id="discount" value="" />
            </div>
            <div class="col-sm-4">
              <input name="amount" class="form-control text-right" type="number" placeholder="Montant" id="amount" value="" />
            </div>
          </div>
        </div>
      </div>


      <div class="form-group row">
        <label for="passenger_id_no" class="col-md-3 col-form-label">  email *  </label>
        <div class="col-sm-9">
         
              <input name="passenger_email" class="form-control" type="text" placeholder="email" id="passenger_email" value="" />
         
        </div>
      </div>

      <div class="form-group row">
        <label for="pickup_location" class="col-md-3 col-form-label">  Lieu de départ  </label>
        <div class="col-sm-9">
          <select class="tripLocation form-control select2-hidden-accessible" name="pickup_location" id="pickup_location" tabindex="-1" aria-hidden="true">
            <option>Paris</option>
            <option>Nice</option>
          </select>

        </div>
      </div>


      <div class="form-group row">
        <label for="drop_location" class="col-md-3 col-form-label">  Lieu d'arrivé  </label>
        <div class="col-sm-9">
          <select class="tripLocation form-control select2-hidden-accessible" name="drop_location" id="drop_location" tabindex="-1" aria-hidden="true">
            <option>Paris</option>
            <option>Nice</option>
          </select>
        </div>
      </div>



      <div class="form-group row">
        <label for="payment_status" class="col-md-3 col-form-label">  Statut de paiement*  </label>
        <div class="col-sm-9">
          <select class="form-control select2-hidden-accessible" name="status" id="status" required="" tabindex="-1" aria-hidden="true">
            <option value="NULL">  Payé  </option>
            <option value="1">  Non payé  </option>
          </select>
        </div>
      </div>


      <div class="form-group text-right">
        <button type="reset" class="btn btn-primary w-md m-b-5">  Réinitialiser  </button>
        <button type="submit" class="btn btn-success w-md m-b-5">  sauvegarder </button>
      </div>
    </form>
  </div>
);

AddBooking.propTypes = {};

AddBooking.defaultProps = {};

export default AddBooking;
