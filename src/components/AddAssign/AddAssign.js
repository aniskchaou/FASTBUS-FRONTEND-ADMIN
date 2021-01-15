import React from 'react';
import PropTypes from 'prop-types';
import './AddAssign.css';

const AddAssign = () => (
  <div className="AddAssign">
    <form  method="post" accept-charset="utf-8">
      <input type="hidden" name="csrf_test_name" value="af61c944c144a453877c302d4296947c" />
      <input type="hidden" name="id" value="" />
      <input type="hidden" name="id_no" value="201230083857" />
      <div class="form-group row">
        <label for="trip" class="col-sm-3 col-form-label">  Voyages *   </label>
        <div class="col-sm-9">
          <select name="trip" class="form-control select2-hidden-accessible" tabindex="-1" aria-hidden="true">
            <option value="" selected="selected">  Sélectionnez une option   </option>
            <option value="1">  VIP-Douala - Bafoussam-04: 30: 30 - 07:40:15   </option>
            <option value="2">  Prestige-Douala - Yaoundé -08: 30: 00 - 13:30:00   </option>
            <option value="3">  VIP-Douala - Kribi-08: 30: 00 - 13:30:00   </option>
            <option value="4">  Autocar-Bafoussam-Douala-08: 30: 00 - 13:30:00   </option>
            <option value="5">  Classique-Bafoussam-Douala-08: 30: 00 - 13:30:00   </option>
            <option value="6">  VIP-Bafoussam-Douala-04: 30: 30 - 07:40:15   </option>
            <option value="7">  VIP-Bafoussam-Douala-08: 30: 00 - 13:30:00   </option>
          </select><span class="select2 select2-container select2-container--default" dir="ltr"    ><span class="selection"><span class="select2-selection select2-selection--single" role="combobox" aria-haspopup="true" aria-expanded="false" tabindex="0" aria-labelledby="select2-trip-1i-container"><span class="select2-selection__rendered" id="select2-trip-1i-container"><span class="select2-selection__placeholder">  Sélectionnez l'option   </span></span><span class="select2-selection__arrow" role="presentation"><b role="presentation"></b></span></span></span><span class="dropdown-wrapper" aria-hidden="true"></span></span>
        </div>
      </div>
      <div class="form-group row">
        <label for="fleet_registration_id" class="col-sm-3 col-form-label">  Numéro d'enregistrement de la flotte *   </label>
        <div class="col-sm-9">
          <select name="fleet_registration_id" class="form-control select2-hidden-accessible" tabindex="-1" aria-hidden="true">
            <option value="" selected="selected">  Sélectionnez une option   </option>
            <option value="1">  LT019EM   </option>
            <option value="2">  LT9873HG   </option>
            <option value="3">  LTm35656T   </option>
          </select><span class="select2 select2-container select2-container--default" dir="ltr"    ><span class="selection"><span class="select2-selection select2-selection--single" role="combobox" aria-haspopup="true" aria-expanded="false" tabindex="0" aria-labelledby="select2-fleet_registration_id-4y-container"><span class="select2-selection__rendered" id="select2-fleet_registration_id-4y-container"><span class="select2-selection__placeholder">  Sélectionnez l'option   </span></span><span class="select2-selection__arrow" role="presentation"><b role="presentation"></b></span></span></span><span class="dropdown-wrapper" aria-hidden="true"></span></span>
        </div>
      </div>
      <div class="form-group row">
        <label for="date" class="col-sm-3 col-form-label">  Date *   </label>
        <div class="col-sm-9">
          <input type="text" name="assign_date" class="form-control datetimepicker" value="" placeholder="Date" />
        </div>
      </div>
      <div class="form-group row">
        <label for="driver_id" class="col-sm-3 col-form-label">  Nom du conducteur *   </label>
        <div class="col-sm-9">
          <select name="driver_id" class="form-control select2-hidden-accessible" tabindex="-1" aria-hidden="true">
            <option value="" selected="selected">  Sélectionnez une option   </option>
            <option value="6">  Nathan Plus   </option>
            <option value="3">  Robben Hoden   </option>
            <option value="7">  John Briden   </option>
          </select><span class="select2 select2-container select2-container--default" dir="ltr"    ><span class="selection"><span class="select2-selection select2-selection--single" role="combobox" aria-haspopup="true" aria-expanded="false" tabindex="0" aria-labelledby="select2-driver_id-sz-container"><span class="select2-selection__rendered" id="select2-driver_id-sz-container"><span class="select2-selection__placeholder">  Sélectionnez l'option   </span></span><span class="select2-selection__arrow" role="presentation"><b role="presentation"></b></span></span></span><span class="dropdown-wrapper" aria-hidden="true"></span></span>
        </div>
      </div>
      <div class="form-group row">
        <label for="assistants_ids" class="col-sm-3 col-form-label">  Assistants    </label>
        <div class="col-sm-9">
          <div class="row" >
            <div class="col-xs-4">
              <select name="assistant_1" class="form-control select2-hidden-accessible" tabindex="-1" aria-hidden="true">
                <option value="" selected="selected">  Sélectionnez une option   </option>
                <option value="2">  Yung Ovien   </option>
                <option value="4">  Acena Lotie   </option>
                <option value="5">  Tab Basite   </option>
              </select><span class="select2 select2-container select2-container--default" dir="ltr" ><span class="selection"><span class="select2-selection select2-selection--single" role="combobox" aria-haspopup="true" aria-expanded="false" tabindex="0" aria-labelledby="select2-assistant_1-nn-container"><span class="select2-selection__rendered" id="select2-assistant_1-nn-container"><span class="select2-selection__placeholder">  Sélectionnez l'option   </span></span><span class="select2-selection__arrow" role="presentation"><b role="presentation"></b></span></span></span><span class="dropdown-wrapper" aria-hidden="true"></span></span>
            </div>
            <div class="col-xs-4">
              <select name="assistant_2" class="form-control select2-hidden-accessible" tabindex="-1" aria-hidden="true">
                <option value="" selected="selected">  Sélectionnez une option   </option>
                <option value="2">  Yung Ovien   </option>
                <option value="4">  Acena Lotie   </option>
                <option value="5">  Tab Basite   </option>
              </select><span class="select2 select2-container select2-container--default" dir="ltr" ><span class="selection"><span class="select2-selection select2-selection--single" role="combobox" aria-haspopup="true" aria-expanded="false" tabindex="0" aria-labelledby="select2-assistant_2-7s-container"><span class="select2-selection__rendered" id="select2-assistant_2-7s-container"><span class="select2-selection__placeholder">  Sélectionnez l'option   </span></span><span class="select2-selection__arrow" role="presentation"><b role="presentation"></b></span></span></span><span class="dropdown-wrapper" aria-hidden="true"></span></span>
            </div>
            <div class="col-xs-4">
              <select name="assistant_3" class="form-control select2-hidden-accessible" tabindex="-1" aria-hidden="true">
                <option value="" selected="selected">  Sélectionnez une option   </option>
                <option value="2">  Yung Ovien   </option>
                <option value="4">  Acena Lotie   </option>
                <option value="5">  Tab Basite   </option>
              </select><span class="select2 select2-container select2-container--default" dir="ltr" ><span class="selection"><span class="select2-selection select2-selection--single" role="combobox" aria-haspopup="true" aria-expanded="false" tabindex="0" aria-labelledby="select2-assistant_3-kq-container"><span class="select2-selection__rendered" id="select2-assistant_3-kq-container"><span class="select2-selection__placeholder">  Sélectionnez l'option   </span></span><span class="select2-selection__arrow" role="presentation"><b role="presentation"></b></span></span></span><span class="dropdown-wrapper" aria-hidden="true"></span></span>
            </div>
          </div>
        </div>
      </div>
      <div class="form-group row">
        <label for="status" class="col-sm-3 col-form-label">  Statut *   </label>
        <div class="col-sm-9">
          <label class="radio-inline">
            <input type="radio" name="status" value="1" id="status" />  
              actif
   </label>
          <label class="radio-inline">
            <input type="radio" name="status" value="0" id="status" />  
              Inactif
   </label>
        </div>
      </div>
      <div class="form-group text-right">
        <button type="reset" class="btn btn-primary w-md m-b-5">  Réinitialiser   </button>
        <button type="submit" class="btn btn-success w-md m-b-5">  sauvegarder  </button>
      </div>
    </form>
  </div>
);

AddAssign.propTypes = {};

AddAssign.defaultProps = {};

export default AddAssign;
