import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import './EditTravel.css';
import { useForm } from 'react-hook-form';
import TravelTestService from '../../../main/mocks/TravelTestService';
import showMessage from '../../../libraries/messages/messages';
import travelMessage from '../../../main/messages/travelMessage';
import travelValidation from '../../../main/validations/travelValidation';
import travelHTTPService from '../../../main/services/travelHTTPService';
import routeHTTPService from '../../../main/services/routeHTTPService';

const EditTravel = (props) => {
  const { register, handleSubmit, errors } = useForm() // initialise the hook
  const [travel, setTravel] = useState(props.travel);

  useEffect(() => {
    setTravel(props.travel)
  }, [props.travel]);


  const onSubmit = (data) => {

    /* TravelTestService.update(props.travel, data)
    showMessage('Confirmation', travelMessage.edit, 'success') */
    travelHTTPService.editTravel(props.travel.id, data).then(() => {
      props.closeModal()
    })
  }

  const [routes, setRoutes] = useState([]);
  useEffect(() => {
    getAllRoutes()
  }, []);
  const getAllRoutes = () => {

    routeHTTPService.getAllRoute()
      .then(response => {
        setRoutes(response.data);
      })
      .catch(e => {
        showMessage('Confirmation', e, 'warning')
      });
  };

  const handleInputChange = event => {
    const { name, value } = event.target;
    setTravel({ ...travel, [name]: value });
  };

  return (
    <div className="EditTravel">
      <form onSubmit={handleSubmit(onSubmit)} method="post" accept-charset="utf-8">


        <div class="form-group row">
          <label for="trip_title" class="col-sm-3 col-form-label"> Title</label>
          <div class="col-sm-9">
            <input onChange={handleInputChange} value={travel.title} ref={register({ required: true })}
              name="title" id="title" class="form-control" placeholder='Title' />
            <div className="error text-danger">
              {/* {errors.trip_title && travelValidation.trip_title} */}
            </div>
          </div>
        </div>

        <div class="form-group row">
          <label for="trip_title" class="col-sm-3 col-form-label"> Price</label>
          <div class="col-sm-9">
            <input onChange={handleInputChange} value={travel.price} placeholder='Price' ref={register({ required: true })}
              name="price" id="price" class="form-control" />
            <div className="error text-danger">
              {/* {errors.trip_title && travelValidation.trip_title} */}
            </div>
          </div>
        </div>


        <div class="form-group row">
          <label for="types" class="col-sm-3 col-form-label"> Travel Type *</label>
          <div class="col-sm-9">
            <select onChange={handleInputChange} value={travel.type} ref={register({ required: true })}
              name="type" class="form-control trips_info select2-hidden-accessible" tabindex="-1" aria-hidden="true">
              <option value="Normal"> Normal</option>
              <option value="Holiday"> Holiday</option>
              <option value="Private"> Private</option>
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
              {routes.map(item =>
                <option value={item.name}>{item.name}</option>
              )}

            </select>
            <div className="error text-danger">
              {errors.route && travelValidation.route}
            </div>
          </div>
        </div>


        <div class="form-group row">
          <label for="shedule" class="col-sm-3 col-form-label"> Date *</label>
          <div class="col-sm-9">
            <input onChange={handleInputChange} value={travel.date} ref={register({ required: true })}
              name="date" class="form-control" type="date" placeholder="Date" id="company" />
            <div className="error text-danger">
              {errors.shedule && travelValidation.shedule}
            </div>
          </div>
        </div>

        <div class="form-group text-left">

          <button type="submit" class="btn btn-success w-md m-b-5"> Save</button>
        </div>

      </form>
    </div>
  )
};

EditTravel.propTypes = {};

EditTravel.defaultProps = {};

export default EditTravel;
