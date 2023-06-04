import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import './EditAssign.css';
import { useForm } from 'react-hook-form';
import showMessage from '../../../libraries/messages/messages'
import assignMessage from '../../../main/messages/assignMessage'
import assignValidation from '../../../main/validations/assignValidation'
import AssignTestService from '../../../main/mocks/AssignTestService';
import HTTPService from '../../../main/services/HTTPService';
import driverHTTPService from '../../../main/services/driverHTTPService';
import travelHTTPService from '../../../main/services/travelHTTPService';
import vehiculeHTTPService from '../../../main/services/vehiculeHTTPService';
import assignHTTPService from '../../../main/services/assignHTTPService';

const EditAssign = (props) => {
  const { register, handleSubmit, errors } = useForm() // initialise the hook
  const [assign, setAssign] = useState(props.assign);

  useEffect(() => {
    setAssign(props.assign)
    getAllDrivers()
    getAllTravels()
    getVehicules()
  }, [props.assign]);

  const [drivers, setDriver] = useState([]);
  const [tarvels, setravels] = useState([]);
  const [vehicules, setVehicules] = useState([]);

  const getAllDrivers = () => {

    driverHTTPService.getAllDriver()
      .then(response => {
        setDriver(response.data);
      })
      .catch(e => {
        showMessage('Confirmation', e, 'warning')
      });
  };

  const getAllTravels = () => {
    travelHTTPService.getAllTravel().then((data) => {
      console.log(data.data)
      setravels(data.data)
    })
  }

  const getVehicules = () => {
    vehiculeHTTPService.getAllVehicule().then((data) => {
      setVehicules(data.data)
    })
  }


  const onSubmit = (data) => {

    /*  AssignTestService.update(props.assign, data) */
    //showMessage('Confirmation', assignMessage.edit, 'success')
    assignHTTPService.editAssign(props.assign.id, data).then(() => {
      props.closeModal()
    })
  }

  const handleInputChange = event => {
    const { name, value } = event.target;
    setAssign({ ...assign, [name]: value });
  };

  return (
    <div className="EditAssign">
      <form onSubmit={handleSubmit(onSubmit)} >


        <div class="form-group row">
          <label for="trip" class="col-sm-3 col-form-label">  Travel *   </label>
          <div class="col-sm-9">
            <select onChange={handleInputChange} value={assign.travel} ref={register({ required: true })}
              name="travel" class="form-control select2-hidden-accessible" tabindex="-1"
              aria-hidden="true">
              {tarvels.map(item =>
                <option value={item.title}>{item.title}</option>
              )}
            </select>
            <div className="error text-danger">
              {/*  {errors.trip && assignValidation.trip} */}
            </div>
          </div>
        </div>


        <div class="form-group row">
          <label for="fleet_registration_id" class="col-sm-3 col-form-label">  Vehicule *   </label>
          <div class="col-sm-9">
            <select onChange={handleInputChange} value={assign.vehicule} ref={register({ required: true })}
              name="vehicule" class="form-control select2-hidden-accessible"
              tabindex="-1" aria-hidden="true">
              {vehicules.map(item =>
                <option value={item.registration}>{item.registration}</option>
              )}
            </select>
            <div className="error text-danger">
              {errors.fleet_registration_id && assignValidation.fleet_registration_id}
            </div>
          </div>
        </div>


        <div class="form-group row">
          <label for="date" class="col-sm-3 col-form-label">  Date *   </label>
          <div class="col-sm-9">
            <input onChange={handleInputChange} value={assign.date} ref={register({ required: true })}
              type="date" name="date" class="form-control datetimepicker"
              placeholder="Date" />
            <div className="error text-danger">
              {errors.assign_date && assignValidation.assign_date}
            </div>
          </div>
        </div>

        <div class="form-group row">
          <label for="driver_id" class="col-sm-3 col-form-label">  Driver *   </label>
          <div class="col-sm-9">
            <select onChange={handleInputChange} value={assign.driver} ref={register({ required: true })}
              name="driver" class="form-control select2-hidden-accessible" tabindex="-1"
              aria-hidden="true">
              {drivers.map(item =>
                <option value={item.name}>{item.name}</option>
              )}
            </select>
            <div className="error text-danger">
              {errors.driver_id && assignValidation.driver_id}
            </div>
          </div>
        </div>


        <div class="form-group text-left">

          <button type="submit" class="btn btn-success w-md m-b-5">  Save  </button>
        </div>


      </form>
    </div>
  )
};

EditAssign.propTypes = {};

EditAssign.defaultProps = {};

export default EditAssign;
