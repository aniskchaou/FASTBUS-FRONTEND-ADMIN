import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import './EditAssign.css';
import { useForm } from 'react-hook-form';
import showMessage from '../../../libraries/messages/messages'
import assignMessage from '../../../main/messages/assignMessage'
import assignValidation from '../../../main/validations/assignValidation'
import AssignTestService from '../../../main/mocks/AssignTestService';
import HTTPService from '../../../main/services/HTTPService';

const EditAssign = (props) => {
  const { register, handleSubmit, errors } = useForm() // initialise the hook
  const [assign, setAssign] = useState(props.assign);

  useEffect(() => {
    setAssign(props.assign)
  }, [props.assign]);


  const onSubmit = (data) => {

    AssignTestService.update(props.assign, data)
    showMessage('Confirmation', assignMessage.edit, 'success')
  }

  const handleInputChange = event => {
    const { name, value } = event.target;
    setAssign({ ...assign, [name]: value });
  };

  return (
    <div className="EditAssign">
      <form onSubmit={handleSubmit(onSubmit)} >


        <div class="form-group row">
          <label for="trip" class="col-sm-3 col-form-label">  Voyages *   </label>
          <div class="col-sm-9">
            <select onChange={handleInputChange} value={assign.trip} ref={register({ required: true })}
              name="trip" class="form-control select2-hidden-accessible" tabindex="-1"
              aria-hidden="true">
              <option selected="selected">  Sélectionnez une option   </option>
              <option value="1">  VIP-Paris - Nice-04: 30: 30 - 07:40:15   </option>
              <option value="2">  Prestige-Nice - Paris -08: 30: 00 - 13:30:00   </option>

            </select>
            <div className="error text-danger">
              {errors.trip && assignValidation.trip}
            </div>
          </div>
        </div>


        <div class="form-group row">
          <label for="fleet_registration_id" class="col-sm-3 col-form-label">  Numéro d'enregistrement *   </label>
          <div class="col-sm-9">
            <select onChange={handleInputChange} value={assign.fleet_registration_id} ref={register({ required: true })}
              name="fleet_registration_id" class="form-control select2-hidden-accessible"
              tabindex="-1" aria-hidden="true">
              <option selected="selected">  Sélectionnez une option   </option>
              <option value="1">  LT019EM   </option>
              <option value="2">  LT9873HG   </option>
              <option value="3">  LTm35656T   </option>
            </select>
            <div className="error text-danger">
              {errors.fleet_registration_id && assignValidation.fleet_registration_id}
            </div>
          </div>
        </div>


        <div class="form-group row">
          <label for="date" class="col-sm-3 col-form-label">  Date *   </label>
          <div class="col-sm-9">
            <input onChange={handleInputChange} value={assign.assign_date} ref={register({ required: true })}
              type="date" name="assign_date" class="form-control datetimepicker"
              placeholder="Date" />
            <div className="error text-danger">
              {errors.assign_date && assignValidation.assign_date}
            </div>
          </div>
        </div>

        <div class="form-group row">
          <label for="driver_id" class="col-sm-3 col-form-label">  Nom du conducteur *   </label>
          <div class="col-sm-9">
            <select onChange={handleInputChange} value={assign.driver_id} ref={register({ required: true })}
              name="driver_id" class="form-control select2-hidden-accessible" tabindex="-1"
              aria-hidden="true">
              <option selected="selected">  Sélectionnez une option   </option>
              <option value="6">  Nathan Plus   </option>
              <option value="3">  Robben Hoden   </option>
              <option value="7">  John Briden   </option>
            </select>
            <div className="error text-danger">
              {errors.driver_id && assignValidation.driver_id}
            </div>
          </div>
        </div>


        <div class="form-group row">
          <label for="assistants_ids" class="col-sm-3 col-form-label">  Assistants    </label>
          <div class="col-sm-9">
            <div class="row" >


              <div class="col-xs-4">
                <select onChange={handleInputChange} value={assign.assistant_1} ref={register({ required: true })}
                  name="assistant_1" class="form-control select2-hidden-accessible"
                  tabindex="-1" aria-hidden="true">
                  <option selected="selected">  Sélectionnez une option   </option>
                  <option value="2">  Yung Ovien   </option>
                  <option value="4">  Acena Lotie   </option>
                  <option value="5">  Tab Basite   </option>
                </select>
                <div className="error text-danger">
                  {errors.assistant_1 && assignValidation.assistant_1}
                </div>
              </div>


              <div class="col-xs-4">
                <select onChange={handleInputChange} value={assign.assistant_2} ref={register({ required: true })}
                  name="assistant_2" class="form-control select2-hidden-accessible"
                  tabindex="-1" aria-hidden="true">
                  <option selected="selected">  Sélectionnez une option   </option>
                  <option value="2">  Yung Ovien   </option>
                  <option value="4">  Acena Lotie   </option>
                  <option value="5">  Tab Basite   </option>
                </select>
                <div className="error text-danger">
                  {errors.assistant_2 && assignValidation.assistant_2}
                </div>
              </div>

              <div class="col-xs-4">
                <select onChange={handleInputChange} value={assign.assistant_3} ref={register({ required: true })}
                  name="assistant_3" class="form-control select2-hidden-accessible" tabindex="-1" aria-hidden="true">
                  <option selected="selected">  Sélectionnez une option   </option>
                  <option value="2">  Yung Ovien   </option>
                  <option value="4">  Acena Lotie   </option>
                  <option value="5">  Tab Basite   </option>
                </select>
                <div className="error text-danger">
                  {errors.assistant_3 && assignValidation.assistant_3}
                </div>
              </div>
            </div>
          </div>
        </div>



        <div class="form-group row">
          <label for="status" class="col-sm-3 col-form-label">  Statut *   </label>
          <div class="col-sm-9">
            <label class="radio-inline">
              <input type="radio" name="status" value="1" id="status" />
               Actif</label>
            <label class="radio-inline">
              <input type="radio" name="status" value="0" id="status" />
               Inactif</label>
            <div className="error text-danger">
              {errors.status && assignValidation.status}
            </div>
          </div>
        </div>

        <div class="form-group text-right">
          <button type="reset" class="btn btn-primary w-md m-b-5">  Réinitialiser   </button>
          <button type="submit" class="btn btn-success w-md m-b-5">  sauvegarder  </button>
        </div>


      </form>
    </div>
  )
};

EditAssign.propTypes = {};

EditAssign.defaultProps = {};

export default EditAssign;
