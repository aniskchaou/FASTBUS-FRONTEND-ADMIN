import React from 'react';
import PropTypes from 'prop-types';
import './EditTravel.css';

const EditTravel = () => (
  <div className="EditTravel">
    <form action="https://bus-ticket.bdtask.com/bus_demo_v5/trip/trip/form" method="post" accept-charset="utf-8">
      <input type="hidden" name="csrf_test_name" value="af61c944c144a453877c302d4296947c" />
      <input type="hidden" name="trip_id" value="" />
      <div class="form-group row">
        <label for="trip_title" class="col-sm-3 col-form-label"><font    ><font    >Titre du voyage *</font></font></label>
        <div class="col-sm-9">
          <textarea name="trip_title" id="trip_title" class="form-control" readonly=""></textarea>
        </div>
      </div>
      <div class="form-group row">
        <label for="types" class="col-sm-3 col-form-label"><font    ><font    >Les types *</font></font></label>
        <div class="col-sm-9">
          <select name="types" class="form-control trips_info select2-hidden-accessible" tabindex="-1" aria-hidden="true">
            <option value="" selected="selected"><font    ><font    >Sélectionnez une option</font></font></option>
            <option value="Coach"><font    ><font    >Entraîneur</font></font></option>
            <option value="Classic"><font    ><font    >Classique</font></font></option>
            <option value="Prestige"><font    ><font    >Prestige</font></font></option>
            <option value="VIP"><font    ><font    >VIP</font></font></option>
          </select><span class="select2 select2-container select2-container--default" dir="ltr" ><span class="selection"><span class="select2-selection select2-selection--single" role="combobox" aria-haspopup="true" aria-expanded="false" tabindex="0" aria-labelledby="select2-types-yt-container"><span class="select2-selection__rendered" id="select2-types-yt-container"><span class="select2-selection__placeholder"><font    ><font    >Sélectionnez l'option</font></font></span></span><span class="select2-selection__arrow" role="presentation"><b role="presentation"></b></span></span></span><span class="dropdown-wrapper" aria-hidden="true"></span></span>
        </div>
      </div>
      <div class="form-group row">
        <label for="route" class="col-sm-3 col-form-label"><font    ><font    >Route *</font></font></label>
        <div class="col-sm-9">
          <select name="route" class="form-control trips_info select2-hidden-accessible" tabindex="-1" aria-hidden="true">
            <option value="" selected="selected"><font    ><font    >Sélectionnez une option</font></font></option>
            <option value="Douala - YaoundÃƒÂ©"><font    ><font    >Douala - Yaoundé</font></font></option>
            <option value="Douala - Kribi"><font    ><font    >Douala - Kribi</font></font></option>
            <option value="Douala - Cameroun"><font    ><font    >Douala - Cameroun</font></font></option>
            <option value="Douala - Bafoussam"><font    ><font    >Douala - Bafoussam</font></font></option>
            <option value="Bafoussam-Douala"><font    ><font    >Bafoussam-Douala</font></font></option>
          </select><span class="select2 select2-container select2-container--default" dir="ltr" ><span class="selection"><span class="select2-selection select2-selection--single" role="combobox" aria-haspopup="true" aria-expanded="false" tabindex="0" aria-labelledby="select2-route-jg-container"><span class="select2-selection__rendered" id="select2-route-jg-container"><span class="select2-selection__placeholder"><font    ><font    >Sélectionnez l'option</font></font></span></span><span class="select2-selection__arrow" role="presentation"><b role="presentation"></b></span></span></span><span class="dropdown-wrapper" aria-hidden="true"></span></span>
        </div>
      </div>
      <div class="form-group row">
        <label for="shedule" class="col-sm-3 col-form-label"><font    ><font    >Calendrier *</font></font></label>
        <div class="col-sm-9">
          <select name="shedule" class="form-control trips_info select2-hidden-accessible" tabindex="-1" aria-hidden="true">
            <option value="" selected="selected"><font    ><font    >Sélectionnez une option</font></font></option>
            <option value="08:30:00 - 13:30:00"><font    ><font    >8h30 - 13h30</font></font></option>
            <option value="04:30:30 - 07:40:15"><font    ><font    >04:30:30 - 07:40:15</font></font></option>
          </select><span class="select2 select2-container select2-container--default" dir="ltr" ><span class="selection"><span class="select2-selection select2-selection--single" role="combobox" aria-haspopup="true" aria-expanded="false" tabindex="0" aria-labelledby="select2-shedule-kc-container"><span class="select2-selection__rendered" id="select2-shedule-kc-container"><span class="select2-selection__placeholder"><font    ><font    >Sélectionnez l'option</font></font></span></span><span class="select2-selection__arrow" role="presentation"><b role="presentation"></b></span></span></span><span class="dropdown-wrapper" aria-hidden="true"></span></span>
        </div>
      </div>
      <div class="form-group row">
        <label for="status" class="col-sm-3 col-form-label"><font    ><font    >Statut *</font></font></label>
        <div class="col-sm-9">
          <label class="radio-inline">
            <input type="radio" name="status" value="1" id="status" /><font    ><font    >
              actif
</font></font></label>
          <label class="radio-inline">
            <input type="radio" name="status" value="0" id="status" /><font    ><font    >
              Inactif
</font></font></label>
        </div>
      </div>
      <div class="form-group row">
        <label class="col-sm-3 col-form-label" for="WorkWeek"><font    ><font    >Weekend</font></font></label>
        <div class="col-sm-9">
          <select name="weekend[]" class="form-control tokenfield select2-hidden-accessible" multiple="" tabindex="-1" aria-hidden="true">
            <option value="1"><font    ><font    >dimanche</font></font></option>
            <option value="2"><font    ><font    >Lundi</font></font></option>
            <option value="3"><font    ><font    >Mardi</font></font></option>
            <option value="4"><font    ><font    >Mercredi</font></font></option>
            <option value="5"><font    ><font    >Ce jour</font></font></option>
            <option value="6"><font    ><font    >Vendredi</font></font></option>
            <option value="7"><font    ><font    >Satarday</font></font></option>
          </select><span class="select2 select2-container select2-container--default" dir="ltr" ><span class="selection"><span class="select2-selection select2-selection--multiple" role="combobox" aria-haspopup="true" aria-expanded="false" tabindex="-1"><ul class="select2-selection__rendered"><li class="select2-search select2-search--inline"><input class="select2-search__field" type="search" tabindex="0" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false" role="textbox" aria-autocomplete="list" placeholder="Sélectionnez l'option" /></li></ul></span></span><span class="dropdown-wrapper" aria-hidden="true"></span></span>
        </div>
      </div>
      <div class="form-group text-right">
        <button type="reset" class="btn btn-primary w-md m-b-5"><font    ><font    >Réinitialiser</font></font></button>
        <button type="submit" class="btn btn-success w-md m-b-5"><font    ><font    >sauver</font></font></button>
      </div>
    </form>
  </div>
);

EditTravel.propTypes = {};

EditTravel.defaultProps = {};

export default EditTravel;
