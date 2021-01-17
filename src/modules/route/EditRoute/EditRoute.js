import React from 'react';
import PropTypes from 'prop-types';
import './EditRoute.css';

const EditRoute = () => (
  <div className="EditRoute">
    <form method="post" accept-charset="utf-8">

      <div class="form-group row">
        <label for="name" class="col-sm-3 col-form-label"> Nom de l'itinéraire * </label>
        <div class="col-sm-9" hei="">
          <input name="name" class="form-control" type="text" placeholder="Nom de la route" id="name" value="" />
        </div>
      </div>


      <div class="form-group row">
        <label for="start_point" class="col-sm-3 col-form-label"> Point de départ * </label>
        <div class="col-sm-9">
          <select name="start_point" class="form-control startend select2-hidden-accessible" id="start" tabindex="-1" aria-hidden="true">
            <option value="" selected="selected"> Sélectionnez une option </option>
            <option value="3"> Paris </option>

          </select>
        </div>
      </div>


      <div class="form-group row">
        <label for="end_point" class="col-sm-3 col-form-label"> Point final * </label>
        <div class="col-sm-9">
          <select name="end_point" class="form-control startend select2-hidden-accessible" id="end" tabindex="-1" aria-hidden="true">
            <option value="" selected="selected"> Sélectionnez une option </option>
            <option value="3"> Nice </option>

          </select>
        </div>
      </div>


      <div class="form-group row">
        <label for="stoppage_points" class="col-sm-3 col-form-label"> Points d'arrêt *  </label>
        <div class="col-sm-9">
          <input name="stoppage_points" class="form-control tokenfield" type="text" placeholder="Points d'arrêt" id="stoppage_points" value="" required="" />
          <ul class="answer_list" id="stopagediv" >
            <input type="hidden" name="proId" id="proId" />
          </ul>
          <ul class="answer_list" id="stopagediv2" >
            <li><label class="checkbox-inline"><input type="checkbox" class="checkbox-btn" value="Douala" /> Lyon </label></li>
            <li><label class="checkbox-inline"><input type="checkbox" class="checkbox-btn" value="Douala" /> Strasbourg </label></li> </ul>
        </div>
      </div>

      <div class="form-group row">
        <label for="distance" class="col-sm-3 col-form-label"> Distance </label>
        <div class="col-sm-9">
          <input name="distance" class="form-control" type="text" placeholder="1 km / mille" id="distance" value="" />
        </div>
      </div>


      <div class="form-group row">
        <label for="approximate_time" class="col-sm-3 col-form-label"> Temps approximatif </label>
        <div class="col-sm-9">
          <input name="approximate_time" class="form-control" type="text" placeholder="Temps approximatif" id="approximate_time" value="" />
        </div>
      </div>

      <div class="form-group row">
        <label for="children_seat" class="col-sm-3 col-form-label"> Siège enfant </label>
        <div class="col-sm-9">
          <input name="children_seat" class="form-control" type="text" placeholder="Siège enfant" id="children_seat" value="" />
        </div>
      </div>


      <div class="form-group row">
        <label for="special_seat" class="col-sm-3 col-form-label"> Siège spécial </label>
        <div class="col-sm-9">
          <input name="special_seat" class="form-control" type="text" placeholder="Siège spécial" id="special_seat" value="" />
        </div>
      </div>


      <div class="form-group row">
        <label for="status" class="col-sm-3 col-form-label"> Statut * </label>
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
      <div class="form-group text-right">
        <button type="reset" class="btn btn-primary w-md m-b-5"> Réinitialiser </button>
        <button type="submit" class="btn btn-success w-md m-b-5"> sauvegarder </button>
      </div>
    </form>
  </div>
);

EditRoute.propTypes = {};

EditRoute.defaultProps = {};

export default EditRoute;
