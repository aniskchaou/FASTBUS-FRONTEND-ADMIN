import React from 'react';
import PropTypes from 'prop-types';
import './AddAssign.css';

const AddAssign = () => (
  <div className="AddAssign">
    <form action="https://bus-ticket.bdtask.com/bus_demo_v5/trip/assign/form/" method="post" accept-charset="utf-8">
      <input type="hidden" name="csrf_test_name" value="af61c944c144a453877c302d4296947c" />
      <input type="hidden" name="id" value="" />
      <input type="hidden" name="id_no" value="201230083857" />
      <div class="form-group row">
        <label for="trip" class="col-sm-3 col-form-label"><font    ><font    >Voyages *</font></font></label>
        <div class="col-sm-9">
          <select name="trip" class="form-control select2-hidden-accessible" tabindex="-1" aria-hidden="true">
            <option value="" selected="selected"><font    ><font    >Sélectionnez une option</font></font></option>
            <option value="1"><font    ><font    >VIP-Douala - Bafoussam-04: 30: 30 - 07:40:15</font></font></option>
            <option value="2"><font    ><font    >Prestige-Douala - Yaoundé -08: 30: 00 - 13:30:00</font></font></option>
            <option value="3"><font    ><font    >VIP-Douala - Kribi-08: 30: 00 - 13:30:00</font></font></option>
            <option value="4"><font    ><font    >Autocar-Bafoussam-Douala-08: 30: 00 - 13:30:00</font></font></option>
            <option value="5"><font    ><font    >Classique-Bafoussam-Douala-08: 30: 00 - 13:30:00</font></font></option>
            <option value="6"><font    ><font    >VIP-Bafoussam-Douala-04: 30: 30 - 07:40:15</font></font></option>
            <option value="7"><font    ><font    >VIP-Bafoussam-Douala-08: 30: 00 - 13:30:00</font></font></option>
          </select><span class="select2 select2-container select2-container--default" dir="ltr"    ><span class="selection"><span class="select2-selection select2-selection--single" role="combobox" aria-haspopup="true" aria-expanded="false" tabindex="0" aria-labelledby="select2-trip-1i-container"><span class="select2-selection__rendered" id="select2-trip-1i-container"><span class="select2-selection__placeholder"><font    ><font    >Sélectionnez l'option</font></font></span></span><span class="select2-selection__arrow" role="presentation"><b role="presentation"></b></span></span></span><span class="dropdown-wrapper" aria-hidden="true"></span></span>
        </div>
      </div>
      <div class="form-group row">
        <label for="fleet_registration_id" class="col-sm-3 col-form-label"><font    ><font    >Numéro d'enregistrement de la flotte *</font></font></label>
        <div class="col-sm-9">
          <select name="fleet_registration_id" class="form-control select2-hidden-accessible" tabindex="-1" aria-hidden="true">
            <option value="" selected="selected"><font    ><font    >Sélectionnez une option</font></font></option>
            <option value="1"><font    ><font    >LT019EM</font></font></option>
            <option value="2"><font    ><font    >LT9873HG</font></font></option>
            <option value="3"><font    ><font    >LTm35656T</font></font></option>
          </select><span class="select2 select2-container select2-container--default" dir="ltr"    ><span class="selection"><span class="select2-selection select2-selection--single" role="combobox" aria-haspopup="true" aria-expanded="false" tabindex="0" aria-labelledby="select2-fleet_registration_id-4y-container"><span class="select2-selection__rendered" id="select2-fleet_registration_id-4y-container"><span class="select2-selection__placeholder"><font    ><font    >Sélectionnez l'option</font></font></span></span><span class="select2-selection__arrow" role="presentation"><b role="presentation"></b></span></span></span><span class="dropdown-wrapper" aria-hidden="true"></span></span>
        </div>
      </div>
      <div class="form-group row">
        <label for="date" class="col-sm-3 col-form-label"><font    ><font    >Date *</font></font></label>
        <div class="col-sm-9">
          <input type="text" name="assign_date" class="form-control datetimepicker" value="" placeholder="Date" />
        </div>
      </div>
      <div class="form-group row">
        <label for="driver_id" class="col-sm-3 col-form-label"><font    ><font    >Nom du conducteur *</font></font></label>
        <div class="col-sm-9">
          <select name="driver_id" class="form-control select2-hidden-accessible" tabindex="-1" aria-hidden="true">
            <option value="" selected="selected"><font    ><font    >Sélectionnez une option</font></font></option>
            <option value="6"><font    ><font    >Nathan Plus</font></font></option>
            <option value="3"><font    ><font    >Robben Hoden</font></font></option>
            <option value="7"><font    ><font    >John Briden</font></font></option>
          </select><span class="select2 select2-container select2-container--default" dir="ltr"    ><span class="selection"><span class="select2-selection select2-selection--single" role="combobox" aria-haspopup="true" aria-expanded="false" tabindex="0" aria-labelledby="select2-driver_id-sz-container"><span class="select2-selection__rendered" id="select2-driver_id-sz-container"><span class="select2-selection__placeholder"><font    ><font    >Sélectionnez l'option</font></font></span></span><span class="select2-selection__arrow" role="presentation"><b role="presentation"></b></span></span></span><span class="dropdown-wrapper" aria-hidden="true"></span></span>
        </div>
      </div>
      <div class="form-group row">
        <label for="assistants_ids" class="col-sm-3 col-form-label"><font    ><font    >Assistants </font></font></label>
        <div class="col-sm-9">
          <div class="row" >
            <div class="col-xs-4">
              <select name="assistant_1" class="form-control select2-hidden-accessible" tabindex="-1" aria-hidden="true">
                <option value="" selected="selected"><font    ><font    >Sélectionnez une option</font></font></option>
                <option value="2"><font    ><font    >Yung Ovien</font></font></option>
                <option value="4"><font    ><font    >Acena Lotie</font></font></option>
                <option value="5"><font    ><font    >Tab Basite</font></font></option>
              </select><span class="select2 select2-container select2-container--default" dir="ltr" ><span class="selection"><span class="select2-selection select2-selection--single" role="combobox" aria-haspopup="true" aria-expanded="false" tabindex="0" aria-labelledby="select2-assistant_1-nn-container"><span class="select2-selection__rendered" id="select2-assistant_1-nn-container"><span class="select2-selection__placeholder"><font    ><font    >Sélectionnez l'option</font></font></span></span><span class="select2-selection__arrow" role="presentation"><b role="presentation"></b></span></span></span><span class="dropdown-wrapper" aria-hidden="true"></span></span>
            </div>
            <div class="col-xs-4">
              <select name="assistant_2" class="form-control select2-hidden-accessible" tabindex="-1" aria-hidden="true">
                <option value="" selected="selected"><font    ><font    >Sélectionnez une option</font></font></option>
                <option value="2"><font    ><font    >Yung Ovien</font></font></option>
                <option value="4"><font    ><font    >Acena Lotie</font></font></option>
                <option value="5"><font    ><font    >Tab Basite</font></font></option>
              </select><span class="select2 select2-container select2-container--default" dir="ltr" ><span class="selection"><span class="select2-selection select2-selection--single" role="combobox" aria-haspopup="true" aria-expanded="false" tabindex="0" aria-labelledby="select2-assistant_2-7s-container"><span class="select2-selection__rendered" id="select2-assistant_2-7s-container"><span class="select2-selection__placeholder"><font    ><font    >Sélectionnez l'option</font></font></span></span><span class="select2-selection__arrow" role="presentation"><b role="presentation"></b></span></span></span><span class="dropdown-wrapper" aria-hidden="true"></span></span>
            </div>
            <div class="col-xs-4">
              <select name="assistant_3" class="form-control select2-hidden-accessible" tabindex="-1" aria-hidden="true">
                <option value="" selected="selected"><font    ><font    >Sélectionnez une option</font></font></option>
                <option value="2"><font    ><font    >Yung Ovien</font></font></option>
                <option value="4"><font    ><font    >Acena Lotie</font></font></option>
                <option value="5"><font    ><font    >Tab Basite</font></font></option>
              </select><span class="select2 select2-container select2-container--default" dir="ltr" ><span class="selection"><span class="select2-selection select2-selection--single" role="combobox" aria-haspopup="true" aria-expanded="false" tabindex="0" aria-labelledby="select2-assistant_3-kq-container"><span class="select2-selection__rendered" id="select2-assistant_3-kq-container"><span class="select2-selection__placeholder"><font    ><font    >Sélectionnez l'option</font></font></span></span><span class="select2-selection__arrow" role="presentation"><b role="presentation"></b></span></span></span><span class="dropdown-wrapper" aria-hidden="true"></span></span>
            </div>
          </div>
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
      <div class="form-group text-right">
        <button type="reset" class="btn btn-primary w-md m-b-5"><font    ><font    >Réinitialiser</font></font></button>
        <button type="submit" class="btn btn-success w-md m-b-5"><font    ><font    >sauver</font></font></button>
      </div>
    </form>
  </div>
);

AddAssign.propTypes = {};

AddAssign.defaultProps = {};

export default AddAssign;
