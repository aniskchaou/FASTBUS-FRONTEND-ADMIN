import React from 'react';
import PropTypes from 'prop-types';
import './EditVehicule.css';

const EditVehicule = () => (
  <div className="EditVehicule">
     <form action="https://bus-ticket.bdtask.com/bus_demo_v5/fleet/fleet_registration/form/" method="post" accept-charset="utf-8">
      <input type="hidden" name="csrf_test_name" value="af61c944c144a453877c302d4296947c" />
      <input type="hidden" name="id" value="" />
      <div class="form-group row">
        <label for="reg_no" class="col-sm-3 col-form-label"><font  ><font  >N ° d'enregistrement. *</font></font></label>
        <div class="col-sm-9">
          <input name="reg_no" class="form-control" type="text" placeholder="N ° d'enregistrement." id="reg_no" value="" />
        </div>
      </div>
      <div class="form-group row">
        <label for="fleet_type_id" class="col-sm-3 col-form-label"><font  ><font  >Type de flotte *</font></font></label>
        <div class="col-sm-9">
          <select name="fleet_type_id" class="form-control select2-hidden-accessible" tabindex="-1" aria-hidden="true">
            <option value="" selected="selected"><font  ><font  >Sélectionnez une option</font></font></option>
            <option value="1"><font  ><font  >VIP</font></font></option>
            <option value="2"><font  ><font  >Prestige</font></font></option>
            <option value="3"><font  ><font  >Classique</font></font></option>
            <option value="4"><font  ><font  >Entraîneur</font></font></option>
          </select><span class="select2 select2-container select2-container--default" dir="ltr" ><span class="selection"><span class="select2-selection select2-selection--single" role="combobox" aria-haspopup="true" aria-expanded="false" tabindex="0" aria-labelledby="select2-fleet_type_id-tn-container"><span class="select2-selection__rendered" id="select2-fleet_type_id-tn-container"><span class="select2-selection__placeholder"><font  ><font  >Sélectionnez l'option</font></font></span></span><span class="select2-selection__arrow" role="presentation"><b role="presentation"></b></span></span></span><span class="dropdown-wrapper" aria-hidden="true"></span></span>
        </div>
      </div>
      <div class="form-group row">
        <label for="engine_no" class="col-sm-3 col-form-label"><font  ><font  >Moteur No.</font></font></label>
        <div class="col-sm-9">
          <input name="engine_no" class="form-control" type="text" placeholder="Moteur No." id="engine_no" value="" />
        </div>
      </div>
      <div class="form-group row">
        <label for="model_no" class="col-sm-3 col-form-label"><font  ><font  >Numéro de modèle *</font></font></label>
        <div class="col-sm-9">
          <input name="model_no" class="form-control" type="text" placeholder="Modèle No." id="model_no" value="" />
        </div>
      </div>
      <div class="form-group row">
        <label for="chasis_no" class="col-sm-3 col-form-label"><font  ><font  >Chasis No. *</font></font></label>
        <div class="col-sm-9">
          <input name="chasis_no" class="form-control" type="text" placeholder="Chasis No." id="chasis_no" value=""/>
      </div>
        </div>
        <div class="form-group row">
          <label for="owner" class="col-sm-3 col-form-label"><font  ><font  >Propriétaire</font></font></label>
          <div class="col-sm-9">
            <input name="owner" class="form-control" type="text" placeholder="Propriétaire" id="owner" value="" />
          </div>
        </div>
        <div class="form-group row">
          <label for="owner_phone" class="col-sm-3 col-form-label"><font  ><font  >Numéro de téléphone du propriétaire</font></font></label>
          <div class="col-sm-9">
            <input name="owner_phone" class="form-control" type="text" placeholder="Numéro de téléphone du propriétaire" id="owner_phone" value="" />
          </div>
        </div>
        <div class="form-group row">
          <label for="company" class="col-sm-3 col-form-label"><font  ><font  >Marque</font></font></label>
          <div class="col-sm-9">
            <input name="company" class="form-control" type="text" placeholder="Marque" id="company" value="" />
          </div>
        </div>
        <div class="form-group row">
          <label for="status" class="col-sm-3 col-form-label"><font  ><font  >Statut *</font></font></label>
          <div class="col-sm-9">
            <label class="radio-inline">
              <input type="radio" name="status" value="1" id="status" /><font  ><font  >
                actif </font></font></label>
            <label class="radio-inline">
              <input type="radio" name="status" value="0" id="status" /><font  ><font  >
                Inactif </font></font></label>
          </div>
        </div>
        <div class="form-group text-right">
          <button type="reset" class="btn btn-primary w-md m-b-5"><font  ><font  >Réinitialiser</font></font></button>
          <button type="submit" class="btn btn-success w-md m-b-5"><font  ><font  >sauver</font></font></button>
        </div>
</form>
  </div>
);

EditVehicule.propTypes = {};

EditVehicule.defaultProps = {};

export default EditVehicule;
