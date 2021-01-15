import React from 'react';
import PropTypes from 'prop-types';
import './AddTravel.css';

const AddTravel = () => (
  <div className="AddTravel">
    <form method="post" accept-charset="utf-8">
      <input type="hidden" name="csrf_test_name" value="af61c944c144a453877c302d4296947c" />
      <input type="hidden" name="trip_id" value="" />
      <div class="form-group row">
        <label for="trip_title" class="col-sm-3 col-form-label"> Titre du voyage *</label>
        <div class="col-sm-9">
          <textarea name="trip_title" id="trip_title" class="form-control" ></textarea>
        </div>
      </div>
      <div class="form-group row">
        <label for="types" class="col-sm-3 col-form-label"> Les types *</label>
        <div class="col-sm-9">
          <select name="types" class="form-control trips_info select2-hidden-accessible" tabindex="-1" aria-hidden="true">
            <option value="" selected="selected"> Sélectionnez une option</option>
            <option value="Coach"> Entraîneur</option>
            <option value="Classic"> Classique</option>
            <option value="Prestige"> Prestige</option>
            <option value="VIP"> VIP</option>
          </select><span class="select2 select2-container select2-container--default" dir="ltr" ><span class="selection"><span class="select2-selection select2-selection--single" role="combobox" aria-haspopup="true" aria-expanded="false" tabindex="0" aria-labelledby="select2-types-yt-container"><span class="select2-selection__rendered" id="select2-types-yt-container"><span class="select2-selection__placeholder"> Sélectionnez l'option</span></span><span class="select2-selection__arrow" role="presentation"><b role="presentation"></b></span></span></span><span class="dropdown-wrapper" aria-hidden="true"></span></span>
        </div>
      </div>
      <div class="form-group row">
        <label for="route" class="col-sm-3 col-form-label"> Route *</label>
        <div class="col-sm-9">
          <select name="route" class="form-control trips_info select2-hidden-accessible" tabindex="-1" aria-hidden="true">
            <option value="" selected="selected"> Sélectionnez une option</option>
            <option value="Douala - YaoundÃƒÂ©"> Douala - Yaoundé</option>
            <option value="Douala - Kribi"> Douala - Kribi</option>
            <option value="Douala - Cameroun"> Douala - Cameroun</option>
            <option value="Douala - Bafoussam"> Douala - Bafoussam</option>
            <option value="Bafoussam-Douala"> Bafoussam-Douala</option>
          </select><span class="select2 select2-container select2-container--default" dir="ltr" ><span class="selection"><span class="select2-selection select2-selection--single" role="combobox" aria-haspopup="true" aria-expanded="false" tabindex="0" aria-labelledby="select2-route-jg-container"><span class="select2-selection__rendered" id="select2-route-jg-container"><span class="select2-selection__placeholder"> Sélectionnez l'option</span></span><span class="select2-selection__arrow" role="presentation"><b role="presentation"></b></span></span></span><span class="dropdown-wrapper" aria-hidden="true"></span></span>
        </div>
      </div>
      <div class="form-group row">
        <label for="shedule" class="col-sm-3 col-form-label"> Calendrier *</label>
        <div class="col-sm-9">
          <select name="shedule" class="form-control trips_info select2-hidden-accessible" tabindex="-1" aria-hidden="true">
            <option value="" selected="selected"> Sélectionnez une option</option>
            <option value="08:30:00 - 13:30:00"> 8h30 - 13h30</option>
            <option value="04:30:30 - 07:40:15"> 04:30:30 - 07:40:15</option>
          </select><span class="select2 select2-container select2-container--default" dir="ltr" ><span class="selection"><span class="select2-selection select2-selection--single" role="combobox" aria-haspopup="true" aria-expanded="false" tabindex="0" aria-labelledby="select2-shedule-kc-container"><span class="select2-selection__rendered" id="select2-shedule-kc-container"><span class="select2-selection__placeholder"> Sélectionnez l'option</span></span><span class="select2-selection__arrow" role="presentation"><b role="presentation"></b></span></span></span><span class="dropdown-wrapper" aria-hidden="true"></span></span>
        </div>
      </div>
      <div class="form-group row">
        <label for="status" class="col-sm-3 col-form-label"> Statut *</label>
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
      <div class="form-group row">
        <label class="col-sm-3 col-form-label" for="WorkWeek"> Weekend</label>
        <div class="col-sm-9">
          <select name="weekend[]" class="form-control tokenfield select2-hidden-accessible" multiple="" tabindex="-1" aria-hidden="true">
            <option value="1"> dimanche</option>
            <option value="2"> Lundi</option>
            <option value="3"> Mardi</option>
            <option value="4"> Mercredi</option>
            <option value="5"> Ce jour</option>
            <option value="6"> Vendredi</option>
            <option value="7"> Satarday</option>
          </select>
        </div>
      </div>
      <div class="form-group text-right">
        <button type="reset" class="btn btn-primary w-md m-b-5"> Réinitialiser</button>
        <button type="submit" class="btn btn-success w-md m-b-5"> sauvegarder</button>
      </div>
    </form>
  </div>
);

AddTravel.propTypes = {};

AddTravel.defaultProps = {};

export default AddTravel;
