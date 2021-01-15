import React from 'react';
import PropTypes from 'prop-types';
import './AddOffer.css';

const AddOffer = () => (
  <div className="AddOffer">
    <form action="https://bus-ticket.bdtask.com/bus_demo_v5/offer/offer_controller/create_offer" method="post" accept-charset="utf-8">
      <input type="hidden" name="csrf_test_name" value="af61c944c144a453877c302d4296947c" />
      <div class="form-group row">
        <div for="offer_name" class="col-sm-3 col-form-div">  
          Nom de l'offre *  </div>
        <div class="col-sm-9">
          <input name="offer_name" class="form-control" type="text" placeholder="Nom de l'offre" id="offer_name" />
        </div>
      </div>
      <div class="form-group row">
        <div for="offer_start_date" class="col-sm-3 col-form-div">  
          Date de début de l'offre *  </div>
        <div class="col-sm-9">
          <input name="offer_start_date" class="datepicker form-control hasDatepicker" type="text" placeholder="Date de début de l'offre" id="offer_start_date" />
        </div>
      </div>
      <div class="form-group row">
        <div for="offer_end_date" class="col-sm-3 col-form-div">  
          Dernière date de l'offre *  </div>
        <div class="col-sm-9">
          <input type="text" name="offer_end_date" class="datepicker form-control hasDatepicker" placeholder="Dernière date de l'offre" id="offer_end_date" />
        </div>
      </div>
      <div class="form-group row">
        <div for="offer_code" class="col-sm-3 col-form-div">  
          Code d'offre *
  </div>
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
          Conditions de l'offre   </div>
        <div class="col-sm-9">
          <textarea name="offer_terms" class="form-control" placeholder="Conditions de l'offre" id="offer_terms"></textarea>
        </div>
      </div>
      <div class="form-group row">
        <div for="offer_route_id" class="col-sm-3 col-form-div">  
          Nom de l'itinéraire *  </div>
        <div class="col-sm-9">
          <select name="offer_route_id" class="form-control select2-hidden-accessible" tabindex="-1" aria-hidden="true">
            <option value="" selected="selected">  Sélectionnez une option  </option>
            <option value="9">  Douala - Cameroun  </option>
            <option value="10">  Douala - Bafoussam  </option>
            <option value="11">  Douala - Kribi  </option>
            <option value="12">  Douala - Yaoundé  </option>
            <option value="13">  Bafoussam-Douala  </option>
          </select><span class="select2 select2-container select2-container--default" dir="ltr" ><span class="selection"><span class="select2-selection select2-selection--single" role="combobox" aria-haspopup="true" aria-expanded="false" tabindex="0" aria-labelledby="select2-offer_route_id-6t-container"><span class="select2-selection__rendered" id="select2-offer_route_id-6t-container"><span class="select2-selection__placeholder">  Sélectionnez l'option  </span></span><span class="select2-selection__arrow" role="presentation"><b role="presentation"></b></span></span></span><span class="dropdown-wrapper" aria-hidden="true"></span></span>
        </div>
      </div>
      <div class="form-group row">
        <div for="offer_number" class="col-sm-3 col-form-div">  
          Numéro de l'offre  </div>
        <div class="col-sm-9">
          <input name="offer_number" class="form-control" type="text" placeholder="Numéro de l'offre" id="offer_number" />
        </div>
      </div>
      <div class="form-group text-right">
        <button type="reset" class="btn btn-primary w-md m-b-5">  
          Réinitialiser    </button>
        <button type="submit" class="btn btn-success w-md m-b-5" id="check_username_availability">  
          Ajouter   </button>
      </div>
    </form>
  </div>
);

AddOffer.propTypes = {};

AddOffer.defaultProps = {};

export default AddOffer;
