import React, { useState } from 'react';
import './AddAssign.css';
import { useForm } from 'react-hook-form';
import showMessage from '../../../libraries/messages/messages'
import assignMessage from '../../../main/messages/assignMessage'
import assignValidation from '../../../main/validations/assignValidation'
import AssignTestService from '../../../main/mocks/AssignTestService';
import HTTPService from '../../../main/services/HTTPService';

const AddAssign = () => {

  const initialState = {
    post: "",
    description: "",
    start: "",
    end: "",
    location: "",
    requirement: ""
  };

  const { register, handleSubmit, errors } = useForm()
  const [assign, setAssign] = useState(initialState);

  const onSubmit = (data) => {
    //saveAssign(data)
    AssignTestService.create(data)
    setAssign(initialState)
    showMessage('Confirmation', assignMessage.add, 'success')
  }

  const saveAssign = (data) => {

    HTTPService.create(data)
      .then(response => {
        setAssign(initialState)
      })
      .catch(e => {
        console.log(e);
      });

  };


  const handleInputChange = event => {
    const { name, value } = event.target;
    setAssign({ ...assign, [name]: value });
  };


  return (
    <div className="AddAssign">
      <form onSubmit={handleSubmit(onSubmit)} >


        <div class="form-group row">
          <label for="trip" class="col-sm-3 col-form-label">  Voyages *   </label>
          <div class="col-sm-9">
            <select onChange={handleInputChange} value={assign.trip} ref={register({ required: true })}
              name="trip" class="form-control select2-hidden-accessible" tabindex="-1"
              aria-hidden="true">
              <option selected="selected">  Sélectionnez une option   </option>
              <option value="453Z3">  VIP-Paris - Nice-04: 30: 30 - 07:40:15   </option>
              <option value="56544">  Prestige-Nice - Paris -08: 30: 00 - 13:30:00   </option>
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
              <option value="LT019EM">  LT019EM   </option>
              <option value="LT9873HG">  LT9873HG   </option>
              <option value="LTm35656T">  LTm35656T   </option>
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
              <option value="Nathan Plus">  Nathan Plus   </option>
              <option value="Robben Hoden">  Robben Hoden   </option>
              <option value="John Briden">  John Briden   </option>
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
                  <option value="Yung Ovien">  Yung Ovien   </option>
                  <option value="Acena Lotie">  Acena Lotie   </option>
                  <option value="Tab Basite ">  Tab Basite   </option>
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
                  <option value="Yung Ovien">  Yung Ovien   </option>
                  <option value="Acena Lotie">  Acena Lotie   </option>
                  <option value="Tab Basite ">  Tab Basite   </option>
                </select>
                <div className="error text-danger">
                  {errors.assistant_2 && assignValidation.assistant_2}
                </div>
              </div>

              <div class="col-xs-4">
                <select onChange={handleInputChange} value={assign.assistant_3} ref={register({ required: true })}
                  name="assistant_3" class="form-control select2-hidden-accessible" tabindex="-1" aria-hidden="true">
                  <option selected="selected">  Sélectionnez une option   </option>
                  <option value="Yung Ovien">  Yung Ovien   </option>
                  <option value="Acena Lotie">  Acena Lotie   </option>
                  <option value="Tab Basite ">  Tab Basite   </option>
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
              <input onChange={handleInputChange} ref={register({ required: true })} type="radio" name="status" value="Active" id="status" />
               Active</label>
            <label class="radio-inline">
              <input onChange={handleInputChange} ref={register({ required: true })} type="radio" name="status" value="Inactive" id="status" />
               Inactive</label>
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

AddAssign.propTypes = {};

AddAssign.defaultProps = {};

export default AddAssign;
