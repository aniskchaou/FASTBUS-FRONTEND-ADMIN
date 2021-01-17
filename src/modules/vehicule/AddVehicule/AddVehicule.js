import React from 'react';
import PropTypes from 'prop-types';
import './AddVehicule.css';

const AddVehicule = () => (
  <div className="AddVehicule">
    <form method="post" accept-charset="utf-8">
 

      <div class="form-group row">
        <label for="reg_no" class="col-sm-3 col-form-label"><font  ><font  >N ° d'enregistrement. *</font></font></label>
        <div class="col-sm-9">
          <input name="reg_no" class="form-control" type="text" placeholder="N ° d'enregistrement." id="reg_no" value="" />
        </div>
      </div>

      
      <div class="form-group row">
        <label for="fleet_type_id" class="col-sm-3 col-form-label"><font  ><font  >Type  *</font></font></label>
        <div class="col-sm-9">
          <select name="fleet_type_id" class="form-control select2-hidden-accessible" tabindex="-1" aria-hidden="true">
            <option value="" selected="selected">Sélectionnez une option</option>
            <option value="1">VIP</option>
            <option value="2">Prestige</option>
            <option value="3">Classique</option>
            <option value="4">Entraîneur</option>
          </select>
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
          <input name="chasis_no" class="form-control" type="text" placeholder="Chasis No." id="chasis_no" value="" />
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
        <button type="submit" class="btn btn-success w-md m-b-5"><font  ><font  >Sauvegarder</font></font></button>
      </div>
    </form>
  </div>
);

AddVehicule.propTypes = {};

AddVehicule.defaultProps = {};

export default AddVehicule;
