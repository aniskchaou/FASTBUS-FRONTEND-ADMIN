import React, { useState } from 'react';
import './AddTravel.css';
import { useForm } from 'react-hook-form';
import showMessage from '../../../libraries/messages/messages'
import travelMessage from '../../../main/messages/travelMessage'
import travelValidation from '../../../main/validations/travelValidation'
import TravelTestService from '../../../main/mocks/TravelTestService';
import HTTPService from '../../../main/services/HTTPService';

const AddTravel = () => {

  const initialState = {
    post: "",
    description: "",
    start: "",
    end: "",
    location: "",
    requirement: ""
  };

  const { register, handleSubmit, errors } = useForm()
  const [travel, setTravel] = useState(initialState);

  const onSubmit = (data) => {
    //saveTravel(data)
    TravelTestService.create(data)
    setTravel(initialState)
    showMessage('Confirmation', travelMessage.add, 'success')
  }

  const saveTravel = (data) => {

    HTTPService.create(data)
      .then(response => {
        setTravel(initialState)
      })
      .catch(e => {
        console.log(e);
      });

  };


  const handleInputChange = event => {
    const { name, value } = event.target;
    setTravel({ ...travel, [name]: value });
  };

  return (
    <div className="AddTravel">
      <form onSubmit={handleSubmit(onSubmit)} method="post" accept-charset="utf-8">


        <div class="form-group row">
          <label for="trip_title" class="col-sm-3 col-form-label"> Titre du voyage *</label>
          <div class="col-sm-9">
            <textarea onChange={handleInputChange} value={travel.trip_title}
              name="trip_title" id="trip_title" class="form-control" disabled ></textarea>
            <div className="error text-danger">
              {errors.trip_title && travelValidation.trip_title}
            </div>
          </div>
        </div>


        <div class="form-group row">
          <label for="types" class="col-sm-3 col-form-label"> Type *</label>
          <div class="col-sm-9">
            <select onChange={handleInputChange} value={travel.types} ref={register({ required: true })}
              name="types" class="form-control trips_info select2-hidden-accessible" tabindex="-1" aria-hidden="true">
              <option selected="selected"> Sélectionnez une option</option>
              <option value="Coach"> Entraîneur</option>
              <option value="Classic"> Classique</option>
              <option value="Prestige"> Prestige</option>
              <option value="VIP"> VIP</option>
            </select>
            <div className="error text-danger">
              {errors.types && travelValidation.types}
            </div>
          </div>
        </div>


        <div class="form-group row">
          <label for="route" class="col-sm-3 col-form-label"> Route *</label>
          <div class="col-sm-9">
            <select onChange={handleInputChange} value={travel.route} ref={register({ required: true })}
              name="route" class="form-control trips_info select2-hidden-accessible" tabindex="-1" aria-hidden="true">
              <option selected="selected"> Sélectionnez une option</option>
              <option value="Douala - YaoundÃƒÂ©"> Paris - Nice</option>
              <option value="Douala - Kribi"> Nice - Paris</option>

            </select>
            <div className="error text-danger">
              {errors.route && travelValidation.route}
            </div>
          </div>
        </div>


        <div class="form-group row">
          <label for="shedule" class="col-sm-3 col-form-label"> Horaires *</label>
          <div class="col-sm-9">
            <select onChange={handleInputChange} value={travel.shedule} ref={register({ required: true })}
              name="shedule" class="form-control trips_info select2-hidden-accessible" tabindex="-1" aria-hidden="true">
              <option selected="selected"> Sélectionnez une option</option>
              <option value="08:30:00 - 13:30:00"> 8h30 - 13h30</option>
              <option value="04:30:30 - 07:40:15"> 04:30:30 - 07:40:15</option>
            </select>
            <div className="error text-danger">
              {errors.shedule && travelValidation.shedule}
            </div>
          </div>
        </div>



        <div class="form-group row">
          <label for="status" class="col-sm-3 col-form-label"> Statut *</label>
          <div class="col-sm-9">
            <label class="radio-inline">
              <input type="radio" name="status" value="1" id="status" />
              actif
             </label>
            <label class="radio-inline">
              <input type="radio" name="status" value="0" id="status" />
              Inactif
            </label>
            <div className="error text-danger">
              {errors.status && travelValidation.status}
            </div>
          </div>
        </div>


        <div class="form-group row">
          <label class="col-sm-3 col-form-label" for="WorkWeek"> Jour</label>
          <div class="col-sm-9">
            <select onChange={handleInputChange} value={travel.weekend} ref={register({ required: true })}
              name="weekend" class="form-control tokenfield select2-hidden-accessible" multiple="" tabindex="-1" aria-hidden="true">
              <option value="1"> dimanche</option>
              <option value="2"> Lundi</option>
              <option value="3"> Mardi</option>
              <option value="4"> Mercredi</option>
              <option value="5"> Ce jour</option>
              <option value="6"> Vendredi</option>
              <option value="7"> Satarday</option>
            </select>
            <div className="error text-danger">
              {errors.weekend && travelValidation.weekend}
            </div>
          </div>
        </div>


        <div class="form-group text-right">
          <button type="reset" class="btn btn-primary w-md m-b-5"> Réinitialiser</button>
          <button type="submit" class="btn btn-success w-md m-b-5"> Sauvegarder</button>
        </div>

      </form>
    </div>
  )
};

AddTravel.propTypes = {};

AddTravel.defaultProps = {};

export default AddTravel;
