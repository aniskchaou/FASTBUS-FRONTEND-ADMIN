import React from 'react';
import PropTypes from 'prop-types';
import './EditOffer.css';

const EditOffer = () => (
  <div className="EditOffer">
    <form action="https://bus-ticket.bdtask.com/bus_demo_v5/offer/offer_controller/create_offer" method="post" accept-charset="utf-8">
      <input type="hidden" name="csrf_test_name" value="af61c944c144a453877c302d4296947c" />
      <div class="form-group row">
        <div for="offer_name" class="col-sm-3 col-form-div"><font   ><font   >
          Nom de l'offre *</font></font></div>
        <div class="col-sm-9">
          <input name="offer_name" class="form-control" type="text" placeholder="Nom de l'offre" id="offer_name" />
        </div>
      </div>
      <div class="form-group row">
        <div for="offer_start_date" class="col-sm-3 col-form-div"><font   ><font   >
          Date de début de l'offre *</font></font></div>
        <div class="col-sm-9">
          <input name="offer_start_date" class="datepicker form-control hasDatepicker" type="text" placeholder="Date de début de l'offre" id="offer_start_date" />
        </div>
      </div>
      <div class="form-group row">
        <div for="offer_end_date" class="col-sm-3 col-form-div"><font   ><font   >
          Dernière date de l'offre *</font></font></div>
        <div class="col-sm-9">
          <input type="text" name="offer_end_date" class="datepicker form-control hasDatepicker" placeholder="Dernière date de l'offre" id="offer_end_date" />
        </div>
      </div>
      <div class="form-group row">
        <div for="offer_code" class="col-sm-3 col-form-div"><font   ><font   >
          Code d'offre *
</font></font></div>
        <div class="col-sm-9">
          <input type="text" name="offer_code" class="form-control" placeholder="Code d'offre" id="offer_code" />
        </div>
      </div>
      <div class="form-group row">
        <div for="offer_discount" class="col-sm-3 col-form-div"><font   ><font   >
          Remise *</font></font></div>
        <div class="col-sm-9">
          <input type="text" name="offer_discount" class="form-control" placeholder="Remise" id="offer_discount" />
        </div>
      </div>
      <div class="form-group row">
        <div for="offer_terms" class="col-sm-3 col-form-div"><font   ><font   >
          Conditions de l'offre </font></font></div>
        <div class="col-sm-9">
          <textarea name="offer_terms" class="form-control" placeholder="Conditions de l'offre" id="offer_terms"></textarea>
        </div>
      </div>
      <div class="form-group row">
        <div for="offer_route_id" class="col-sm-3 col-form-div"><font   ><font   >
          Nom de l'itinéraire *</font></font></div>
        <div class="col-sm-9">
          <select name="offer_route_id" class="form-control select2-hidden-accessible" tabindex="-1" aria-hidden="true">
            <option value="" selected="selected"><font   ><font   >Sélectionnez une option</font></font></option>
            <option value="9"><font   ><font   >Douala - Cameroun</font></font></option>
            <option value="10"><font   ><font   >Douala - Bafoussam</font></font></option>
            <option value="11"><font   ><font   >Douala - Kribi</font></font></option>
            <option value="12"><font   ><font   >Douala - Yaoundé</font></font></option>
            <option value="13"><font   ><font   >Bafoussam-Douala</font></font></option>
          </select><span class="select2 select2-container select2-container--default" dir="ltr" ><span class="selection"><span class="select2-selection select2-selection--single" role="combobox" aria-haspopup="true" aria-expanded="false" tabindex="0" aria-labelledby="select2-offer_route_id-6t-container"><span class="select2-selection__rendered" id="select2-offer_route_id-6t-container"><span class="select2-selection__placeholder"><font   ><font   >Sélectionnez l'option</font></font></span></span><span class="select2-selection__arrow" role="presentation"><b role="presentation"></b></span></span></span><span class="dropdown-wrapper" aria-hidden="true"></span></span>
        </div>
      </div>
      <div class="form-group row">
        <div for="offer_number" class="col-sm-3 col-form-div"><font   ><font   >
          Numéro de l'offre</font></font></div>
        <div class="col-sm-9">
          <input name="offer_number" class="form-control" type="text" placeholder="Numéro de l'offre" id="offer_number" />
        </div>
      </div>
      <div class="form-group text-right">
        <button type="reset" class="btn btn-primary w-md m-b-5"><font   ><font   >
          Réinitialiser  </font></font></button>
        <button type="submit" class="btn btn-success w-md m-b-5" id="check_username_availability"><font   ><font   >
          Ajouter </font></font></button>
      </div>
    </form>
  </div>
);

EditOffer.propTypes = {};

EditOffer.defaultProps = {};

export default EditOffer;
