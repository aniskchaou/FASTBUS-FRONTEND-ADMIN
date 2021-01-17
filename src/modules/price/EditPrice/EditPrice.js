import React from 'react';
import PropTypes from 'prop-types';
import './EditPrice.css';

const EditPrice = () => (
  <div className="EditPrice">
    <form  name="myForm" method="post" accept-charset="utf-8">
      

      <div class="form-group row">
        <label for="route_id" class="col-sm-4 col-form-label">
          Nom de l'itinéraire * </label>
        <div class="col-sm-8">
          <select name="route_id" class="form-control select2-hidden-accessible" tabindex="-1" aria-hidden="true">
            <option value="" selected="selected"> Sélectionnez une option </option>
            <option value="9"> Paris - Nice </option>
            <option value="10"> Nice - Paris </option>
          </select>
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
          </select>
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



      <div class="form-group text-right">
        <button type="reset" class="btn btn-primary w-md m-b-5">
          Réinitialiser  </button>
        <button type="submit" class="btn btn-success w-md m-b-5">
          Sauvegarder  </button>
      </div>
    </form>
  </div>
);

EditPrice.propTypes = {};

EditPrice.defaultProps = {};

export default EditPrice;
