import React from 'react';
import PropTypes from 'prop-types';
import './EditAssign.css';

const EditAssign = () => (
  <div className="EditAssign">
    <form method="post" accept-charset="utf-8">


<div class="form-group row">
  <label for="trip" class="col-sm-3 col-form-label">  Voyages *   </label>
  <div class="col-sm-9">
    <select name="trip" class="form-control select2-hidden-accessible" tabindex="-1" aria-hidden="true">
      <option value="" selected="selected">  Sélectionnez une option   </option>
      <option value="1">  VIP-Paris - Nice-04: 30: 30 - 07:40:15   </option>
      <option value="2">  Prestige-Nice - Paris -08: 30: 00 - 13:30:00   </option>

    </select>
  </div>
</div>


<div class="form-group row">
  <label for="fleet_registration_id" class="col-sm-3 col-form-label">  Numéro d'enregistrement *   </label>
  <div class="col-sm-9">
    <select name="fleet_registration_id" class="form-control select2-hidden-accessible" tabindex="-1" aria-hidden="true">
      <option value="" selected="selected">  Sélectionnez une option   </option>
      <option value="1">  LT019EM   </option>
      <option value="2">  LT9873HG   </option>
      <option value="3">  LTm35656T   </option>
    </select>
  </div>
</div>


<div class="form-group row">
  <label for="date" class="col-sm-3 col-form-label">  Date *   </label>
  <div class="col-sm-9">
    <input type="date" name="assign_date" class="form-control datetimepicker" value="" placeholder="Date" />
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
    </select>
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
        </select>
      </div>
      <div class="col-xs-4">
        <select name="assistant_2" class="form-control select2-hidden-accessible" tabindex="-1" aria-hidden="true">
          <option value="" selected="selected">  Sélectionnez une option   </option>
          <option value="2">  Yung Ovien   </option>
          <option value="4">  Acena Lotie   </option>
          <option value="5">  Tab Basite   </option>
        </select>
      </div>
      <div class="col-xs-4">
        <select name="assistant_3" class="form-control select2-hidden-accessible" tabindex="-1" aria-hidden="true">
          <option value="" selected="selected">  Sélectionnez une option   </option>
          <option value="2">  Yung Ovien   </option>
          <option value="4">  Acena Lotie   </option>
          <option value="5">  Tab Basite   </option>
        </select>
      </div>
    </div>
  </div>
</div>



<div class="form-group row">
  <label for="status" class="col-sm-3 col-form-label">  Statut *   </label>
  <div class="col-sm-9">
    <label class="radio-inline">
      <input type="radio" name="status" value="1" id="status" />
         Actif</label>
    <label class="radio-inline">
      <input type="radio" name="status" value="0" id="status" />
         Inactif</label>
  </div>
</div>

<div class="form-group text-right">
  <button type="reset" class="btn btn-primary w-md m-b-5">  Réinitialiser   </button>
  <button type="submit" class="btn btn-success w-md m-b-5">  sauvegarder  </button>
</div>


</form>
  </div>
);

EditAssign.propTypes = {};

EditAssign.defaultProps = {};

export default EditAssign;
