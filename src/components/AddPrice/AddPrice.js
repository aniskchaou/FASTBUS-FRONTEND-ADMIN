import React from 'react';
import PropTypes from 'prop-types';
import './AddPrice.css';

const AddPrice = () => (
  <div className="AddPrice">
    <form action="https://bus-ticket.bdtask.com/bus_demo_v5/price/price_controller/create_price" name="myForm" method="post" accept-charset="utf-8">
      <input type="hidden" name="csrf_test_name" value="af61c944c144a453877c302d4296947c" />
      <div class="form-group row">
        <label for="route_id" class="col-sm-4 col-form-label">
          Nom de l'itinéraire * </label>
        <div class="col-sm-8">
          <select name="route_id" class="form-control select2-hidden-accessible" tabindex="-1" aria-hidden="true">
            <option value="" selected="selected"> Sélectionnez une option </option>
            <option value="9"> Douala - Cameroun </option>
            <option value="10"> Douala - Bafoussam </option>
            <option value="11"> Douala - Kribi </option>
            <option value="12"> Douala - Yaoundé </option>
            <option value="13"> Bafoussam-Douala </option>
          </select><span class="select2 select2-container select2-container--default" dir="ltr" ><span class="selection"><span class="select2-selection select2-selection--single" role="combobox" aria-haspopup="true" aria-expanded="false" tabindex="0" aria-labelledby="select2-route_id-el-container"><span class="select2-selection__rendered" id="select2-route_id-el-container"><span class="select2-selection__placeholder"> Sélectionnez l'option </span></span><span class="select2-selection__arrow" role="presentation"><b role="presentation"></b></span></span></span><span class="dropdown-wrapper" aria-hidden="true"></span></span>
        </div>
      </div>
      <div class="form-group row">
        <label for="vehicle_type_id" class="col-sm-4 col-form-label">
          Type de véhicule * </label>
        <div class="col-sm-8">
          <select name="vehicle_type_id" class="form-control select2-hidden-accessible" tabindex="-1" aria-hidden="true">
            <option value="" selected="selected"> Sélectionnez une option </option>
            <option value="1"> VIP </option>
            <option value="2"> Prestige </option>
            <option value="3"> Classique </option>
            <option value="4"> Entraîneur </option>
          </select><span class="select2 select2-container select2-container--default" dir="ltr" ><span class="selection"><span class="select2-selection select2-selection--single" role="combobox" aria-haspopup="true" aria-expanded="false" tabindex="0" aria-labelledby="select2-vehicle_type_id-l4-container"><span class="select2-selection__rendered" id="select2-vehicle_type_id-l4-container"><span class="select2-selection__placeholder"> Sélectionnez l'option </span></span><span class="select2-selection__arrow" role="presentation"><b role="presentation"></b></span></span></span><span class="dropdown-wrapper" aria-hidden="true"></span></span>
        </div>
      </div>
      <div class="form-group row">
        <label for="price" class="col-sm-4 col-form-label">
          Prix ​​* </label>
        <div class="col-sm-8">
          <input name="price" class="form-control" type="text" placeholder="Prix" id="price" />
        </div>
      </div>
      <div class="form-group row">
        <label for="childere_price" class="col-sm-4 col-form-label">
          Prix ​​enfants * </label>
        <div class="col-sm-8">
          <input name="childere_price" class="form-control" type="text" placeholder="Prix ​​enfants" id="pchildere_rice" />
        </div>
      </div>
      <div class="form-group row">
        <label for="special_price" class="col-sm-4 col-form-label">
          Prix ​​spécial * </label>
        <div class="col-sm-8">
          <input name="special_price" class="form-control" type="text" placeholder="Prix ​​spécial" id="special_price" />
        </div>
      </div>
      <div class="form-group row">
        <label for="group_price_per_person" class="col-sm-4 col-form-label">
          Prix ​​de groupe par personne  </label>
        <div class="col-sm-8">
          <input name="group_price_per_person" class="form-control" type="text" placeholder="Prix ​​de groupe par personne" id="group_price_per_person" />
        </div>
      </div>
      <div class="form-group row">
        <label for="group_size" class="col-sm-4 col-form-label">
          Les membres du groupe  </label>
        <div class="col-sm-8">
          <input type="text" name="group_size" class="form-control" placeholder="Les membres du groupe" id="group_size" />
        </div>
      </div>
      <div class="form-group text-right">
        <button type="reset" class="btn btn-primary w-md m-b-5">
          Réinitialiser  </button>
        <button type="submit" class="btn btn-success w-md m-b-5">
          Ajouter  </button>
      </div>
    </form>
  </div>
);

AddPrice.propTypes = {};

AddPrice.defaultProps = {};

export default AddPrice;
