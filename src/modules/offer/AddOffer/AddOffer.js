import React from 'react';
import PropTypes from 'prop-types';
import './AddOffer.css';

const AddOffer = () => (
  <div className="AddOffer">
    <form  method="post" accept-charset="utf-8">
     
      <div class="form-group row">
        <div for="offer_name" class="col-sm-3 col-form-div">  
          Nom   *  </div>
        <div class="col-sm-9">
          <input name="offer_name" class="form-control" type="text" placeholder="Nom  " id="offer_name" />
        </div>
      </div>


      <div class="form-group row">
        <div for="offer_start_date" class="col-sm-3 col-form-div">  
          Date de début   *  </div>
        <div class="col-sm-9">
          <input name="offer_start_date" class="datepicker form-control hasDatepicker" type="text" placeholder="Date de début  " id="offer_start_date" />
        </div>
      </div>

      <div class="form-group row">
        <div for="offer_end_date" class="col-sm-3 col-form-div">  
          Dernière date   *  </div>
        <div class="col-sm-9">
          <input type="text" name="offer_end_date" class="datepicker form-control hasDatepicker" placeholder="Dernière date  " id="offer_end_date" />
        </div>
      </div>

      <div class="form-group row">
        <div for="offer_code" class="col-sm-3 col-form-div">  
          Code d'offre *</div>
        <div class="col-sm-9">
          <input type="text" name="offer_code" class="form-control" placeholder="Code d'offre" id="offer_code" />
        </div>
      </div>


      <div class="form-group row">
        <div for="offer_discount" class="col-sm-3 col-form-div">  
          Remise *  </div>
        <div class="col-sm-9">
          <input type="text" name="offer_discount" class="form-control" placeholder="Remise" id="offer_discount" />
        </div>
      </div>


      <div class="form-group row">
        <div for="offer_terms" class="col-sm-3 col-form-div">  
          Conditions     </div>
        <div class="col-sm-9">
          <textarea name="offer_terms" class="form-control" placeholder="Conditions  " id="offer_terms"></textarea>
        </div>
      </div>


      <div class="form-group row">
        <div for="offer_route_id" class="col-sm-3 col-form-div">  
          Nom de l'itinéraire *  </div>
        <div class="col-sm-9">
          <select name="offer_route_id" class="form-control select2-hidden-accessible" tabindex="-1" aria-hidden="true">
            <option value="" selected="selected">  Sélectionnez une option  </option>
            <option value="9">  Douala - Cameroun  </option>
          </select>
        </div>
      </div>


      <div class="form-group row">
        <div for="offer_number" class="col-sm-3 col-form-div">  
          Numéro    </div>
        <div class="col-sm-9">
          <input name="offer_number" class="form-control" type="text" placeholder="Numéro  " id="offer_number" />
        </div>
      </div>


      <div class="form-group text-right">
        <button type="reset" class="btn btn-primary w-md m-b-5">  
          Réinitialiser    </button>
        <button type="submit" class="btn btn-success w-md m-b-5" id="check_username_availability">  
          Sauvegarder   </button>
      </div>


    </form>
  </div>
);

AddOffer.propTypes = {};

AddOffer.defaultProps = {};

export default AddOffer;
