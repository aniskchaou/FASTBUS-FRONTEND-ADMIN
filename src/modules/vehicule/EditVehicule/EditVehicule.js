import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';
import VehiculeTestService from '../../../main/mocks/VehiculeTestService';
import showMessage from '../../../libraries/messages/messages';
import vehiculeMessage from '../../../main/messages/vehiculeMessage';
import vehiculeValidation from '../../../main/validations/vehiculeValidation';
import vehiculeHTTPService from '../../../main/services/vehiculeHTTPService';

const EditVehicule = (props) => {
  const { register, handleSubmit, errors } = useForm() // initialise the hook
  const [vehicule, setVehicule] = useState(props.vehicule);

  useEffect(() => {
    setVehicule(props.vehicule)
  }, [props.vehicule]);


  const onSubmit = (data) => {

    // VehiculeTestService.update(props.vehicule, data)
    // showMessage('Confirmation', vehiculeMessage.edit, 'success')
    vehiculeHTTPService.editVehicule(props.vehicule.id, data).then(() => {
      props.closeModal()
    })
  }

  const handleInputChange = event => {
    const { name, value } = event.target;
    setVehicule({ ...vehicule, [name]: value });
  };

  return (
    <div>    <form onSubmit={handleSubmit(onSubmit)} method="post" accept-charset="utf-8">


      <div class="form-group row">
        <label for="reg_no" class="col-sm-3 col-form-label"><font  ><font  >Registration *</font></font></label>
        <div class="col-sm-9">
          <input onChange={handleInputChange} value={vehicule.registration} ref={register({ required: true })}
            name="registration" class="form-control" type="text" placeholder="Registration" id="reg_no" />
          <div className="error text-danger">
            {errors.reg_no && vehiculeValidation.reg_no}
          </div>
        </div>
      </div>

      <div class="form-group row">
        <label for="reg_no" class="col-sm-3 col-form-label"><font  ><font  >Year *</font></font></label>
        <div class="col-sm-9">
          <input onChange={handleInputChange} value={vehicule.year} ref={register({ required: true })}
            name="year" class="form-control" type="text" placeholder="Year" id="reg_no" />
          <div className="error text-danger">
            {errors.reg_no && vehiculeValidation.reg_no}
          </div>
        </div>
      </div>


      <div class="form-group row">
        <label for="fleet_type_id" class="col-sm-3 col-form-label"><font  ><font  >Type  *</font></font></label>
        <div class="col-sm-9">
          <select onChange={handleInputChange} value={vehicule.type} ref={register({ required: true })}
            name="type" class="form-control select2-hidden-accessible" tabindex="-1" aria-hidden="true">
            <option value="Bus">Bus</option>
            <option value="Van">Van</option>
          </select>
          <div className="error text-danger">
            {errors.fleet_type_id && vehiculeValidation.fleet_type_id}
          </div>
        </div>
      </div>


      <div class="form-group row">
        <label for="engine_no" class="col-sm-3 col-form-label"><font  ><font  >Engine Number</font></font></label>
        <div class="col-sm-9">
          <input onChange={handleInputChange} value={vehicule.engine} ref={register({ required: true })}
            name="engine" class="form-control" type="text" placeholder="Engine Number" id="engine_no" />
          <div className="error text-danger">
            {errors.engine_no && vehiculeValidation.engine_no}
          </div>
        </div>
      </div>


      <div class="form-group row">
        <label for="model_no" class="col-sm-3 col-form-label"><font  ><font  >Model *</font></font></label>
        <div class="col-sm-9">
          <input onChange={handleInputChange} value={vehicule.model} ref={register({ required: true })}
            name="model" class="form-control" type="text" placeholder="Model" id="model_no" />
          <div className="error text-danger">
            {errors.model_no && vehiculeValidation.model_no}
          </div>
        </div>
      </div>

      <div class="form-group row">
        <label for="chasis_no" class="col-sm-3 col-form-label"><font  ><font  >Chassis Number *</font></font></label>
        <div class="col-sm-9">
          <input onChange={handleInputChange} value={vehicule.chassis} ref={register({ required: true })}
            name="chassis" class="form-control" type="text" placeholder="Chassis Number" id="chasis_no" />
          <div className="error text-danger">
            {errors.chasis_no && vehiculeValidation.chasis_no}
          </div>
        </div>
      </div>


      <div class="form-group row">
        <label for="owner" class="col-sm-3 col-form-label"><font  ><font  >Owner</font></font></label>
        <div class="col-sm-9">
          <input onChange={handleInputChange} value={vehicule.owner} ref={register({ required: true })}
            name="owner" class="form-control" type="text" placeholder="Owner" id="owner" />
          <div className="error text-danger">
            {errors.owner && vehiculeValidation.owner}
          </div>
        </div>
      </div>




      <div class="form-group row">
        <label for="company" class="col-sm-3 col-form-label"><font  ><font  >Brand</font></font></label>
        <div class="col-sm-9">
          <input onChange={handleInputChange} value={vehicule.brand} ref={register({ required: true })}
            name="brand" class="form-control" type="text" placeholder="Brand" id="company" />
          <div className="error text-danger">
            {errors.company && vehiculeValidation.company}
          </div>
        </div>
      </div>




      <div class="form-group text-left">

        <button type="submit" class="btn btn-success w-md m-b-5"><font  ><font  >Save</font></font></button>
      </div>
    </form></div>
  )
};

EditVehicule.propTypes = {};

EditVehicule.defaultProps = {};

export default EditVehicule;
