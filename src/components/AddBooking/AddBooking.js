import React from 'react';
import PropTypes from 'prop-types';
import './AddBooking.css';

const AddBooking = () => (
  <div className="AddBooking">
    <form id="bookingFrm" method="post" accept-charset="utf-8">
      <input type="hidden" name="csrf_test_name" value="af61c944c144a453877c302d4296947c" />
      <div class="form-group row">
        <label for="approximate_time" class="col-md-3 col-form-label">  Date de réservation *  </label>
        <div class="col-sm-9">
          <input name="approximate_time" class="findTripByRouteDate form-control datepicker hasDatepicker" type="text" placeholder="Date de réservation" id="approximate_time" value="30-12-2020" />
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
          </select><span class="select2 select2-container select2-container--default" dir="ltr"    ><span class="selection"><span class="select2-selection select2-selection--single" role="combobox" aria-haspopup="true" aria-expanded="false" tabindex="0" aria-labelledby="select2-ftypes-container"><span class="select2-selection__rendered" id="select2-ftypes-container"><span class="select2-selection__placeholder">  Sélectionnez l'option  </span></span><span class="select2-selection__arrow" role="presentation"><b role="presentation"></b></span></span></span><span class="dropdown-wrapper" aria-hidden="true"></span></span>
          <div id="typeHelpText"></div>
        </div>
      </div>
      <div class="form-group row">
        <label for="route_id" class="col-md-3 col-form-label">  Nom de l'itinéraire *  </label>
        <div class="col-sm-9">
          <select name="route_id" id="route_id" class="findTripByRouteDate form-control select2-hidden-accessible" tabindex="-1" aria-hidden="true">
            <option value="" selected="selected">  Sélectionnez une option  </option>
            <option value="13">  Bafoussam-Douala  </option>
            <option value="10">  Douala - Bafoussam  </option>
            <option value="9">  Douala - Cameroun  </option>
            <option value="11">  Douala - Kribi  </option>
            <option value="12">  Douala - Yaoundé  </option>
          </select><span class="select2 select2-container select2-container--default" dir="ltr"    ><span class="selection"><span class="select2-selection select2-selection--single" role="combobox" aria-haspopup="true" aria-expanded="false" tabindex="0" aria-labelledby="select2-route_id-container"><span class="select2-selection__rendered" id="select2-route_id-container"><span class="select2-selection__placeholder">  Sélectionnez l'option  </span></span><span class="select2-selection__arrow" role="presentation"><b role="presentation"></b></span></span></span><span class="dropdown-wrapper" aria-hidden="true"></span></span>
          <div id="routeHelpText"></div>
        </div>
      </div>
      <div class="form-group">
        <label for="tripTable" class="col-md-3">  ID de voyage.  *  </label>
        <div class="col-sm-9">
          <div class="row">
            <div class="col-sm-6" id="availableSeats">
              <h4 class="bg-primary" >  Sélectionnez les sièges  </h4>
            </div>
            <div class="col-sm-6" id="tripTable">
              <table class="table table-condensed table-striped">
                <thead>
                  <tr class="bg-primary">
                    <th>  #  </th>
                    <th>  Temps  </th>
                    <th>  Places libres  </th>
                    <th>  AC disponible  </th>
                  </tr>
                </thead>
              </table>
            </div>
          </div>
          <input type="hidden" name="total_seat" />
          <input type="hidden" name="seat_number" />
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
        <label for="passenger_id_no" class="col-md-3 col-form-label">  Courriel du passager *  </label>
        <div class="col-sm-9">
          <div class="row">
            <div class="col-sm-9">
              <input name="passenger_email" class="form-control" type="text" placeholder="Courriel du passager" id="passenger_email" value="" />
              <input name="passenger_id_no" class="form-control" type="hidden" placeholder="ID du passager." id="passenger_id_no" value="" />
              <div id="passengerHelpText"></div>
            </div>
            <div class="col-md-3">
              <a href="#" data-toggle="modal" data-target="#myModal" class="btn btn-success">  Ajouter  </a>
            </div>
          </div>
        </div>
      </div>
      <div class="form-group row">
        <label for="requestFacilities" class="col-md-3 col-form-label">  Demander des installations  </label>
        <div class="col-sm-9" id="requestFacilities"></div>
      </div>
      <div class="form-group row">
        <label for="pickup_location" class="col-md-3 col-form-label">  Lieu de ramassage  </label>
        <div class="col-sm-9">
          <select class="tripLocation form-control select2-hidden-accessible" name="pickup_location" id="pickup_location" tabindex="-1" aria-hidden="true"></select><span class="select2 select2-container select2-container--default" dir="ltr"    ><span class="selection"><span class="select2-selection select2-selection--single" role="combobox" aria-haspopup="true" aria-expanded="false" tabindex="0" aria-labelledby="select2-pickup_location-container"><span class="select2-selection__rendered" id="select2-pickup_location-container"><span class="select2-selection__placeholder">  Sélectionnez l'option  </span></span><span class="select2-selection__arrow" role="presentation"><b role="presentation"></b></span></span></span><span class="dropdown-wrapper" aria-hidden="true"></span></span>
        </div>
      </div>
      <div class="form-group row">
        <label for="drop_location" class="col-md-3 col-form-label">  Lieu de dépôt  </label>
        <div class="col-sm-9">
          <select class="tripLocation form-control select2-hidden-accessible" name="drop_location" id="drop_location" tabindex="-1" aria-hidden="true"></select><span class="select2 select2-container select2-container--default" dir="ltr"    ><span class="selection"><span class="select2-selection select2-selection--single" role="combobox" aria-haspopup="true" aria-expanded="false" tabindex="0" aria-labelledby="select2-drop_location-container"><span class="select2-selection__rendered" id="select2-drop_location-container"><span class="select2-selection__placeholder">  Sélectionnez l'option  </span></span><span class="select2-selection__arrow" role="presentation"><b role="presentation"></b></span></span></span><span class="dropdown-wrapper" aria-hidden="true"></span></span>
        </div>
      </div>
      <div class="form-group row">
        <label for="payment_status" class="col-md-3 col-form-label">  Statut de paiement*  </label>
        <div class="col-sm-9">
          <select class="form-control select2-hidden-accessible" name="status" id="status" required="" tabindex="-1" aria-hidden="true">
            <option value="">  Sélectionnez une option  </option>
            <option value="NULL">  Payé  </option>
            <option value="1">  Non payé  </option>
          </select><span class="select2 select2-container select2-container--default" dir="ltr"    ><span class="selection"><span class="select2-selection select2-selection--single" role="combobox" aria-haspopup="true" aria-expanded="false" tabindex="0" aria-labelledby="select2-status-container"><span class="select2-selection__rendered" id="select2-status-container"><span class="select2-selection__placeholder">  Sélectionnez l'option  </span></span><span class="select2-selection__arrow" role="presentation"><b role="presentation"></b></span></span></span><span class="dropdown-wrapper" aria-hidden="true"></span></span>
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
