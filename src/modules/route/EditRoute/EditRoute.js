import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import './EditRoute.css';
import { useForm } from 'react-hook-form';
import RouteTestService from '../../../main/mocks/RouteTestService';
import showMessage from '../../../libraries/messages/messages';
import routeMessage from '../../../main/messages/routeMessage';
import routeValidation from '../../../main/validations/routeValidation';
import stationHTTPService from '../../../main/services/stationHTTPService';
import routeHTTPService from '../../../main/services/routeHTTPService';

const EditRoute = (props) => {
  const { register, handleSubmit, errors } = useForm() // initialise the hook
  const [route, setRoute] = useState(props.route);

  useEffect(() => {
    setRoute(props.route)
  }, [props.route]);


  const onSubmit = (data) => {

    /* outeTestService.update(props.route, data)
    showMessage('Confirmation', routeMessage.edit, 'success') */
    routeHTTPService.editRoute(props.route.id, data).then(() => {
      props.closeModal()
    })
  }

  const handleInputChange = event => {
    const { name, value } = event.target;
    setRoute({ ...route, [name]: value });
  };

  const [stations, setStations] = useState([]);
  useEffect(() => {
    getSations()
  }, []);
  const getSations = () => {

    stationHTTPService.getAllStation()
      .then(response => {
        setStations(response.data);
      })
      .catch(e => {
        showMessage('Confirmation', e, 'warning')
      });
  };

  return (
    <div className="EditRoute">
      <form onSubmit={handleSubmit(onSubmit)} method="post" accept-charset="utf-8">

        <div class="form-group row">
          <label for="name" class="col-sm-3 col-form-label"> Route Name * </label>
          <div class="col-sm-9" hei="">
            <input onChange={handleInputChange} value={route.name} ref={register({ required: true })}
              name="name" class="form-control" type="text" placeholder="Route Name" id="name" />
            <div className="error text-danger">
              {errors.name && routeValidation.name}
            </div>
          </div>
        </div>


        <div class="form-group row">
          <label for="start_point" class="col-sm-3 col-form-label"> From * </label>
          <div class="col-sm-9">
            <select onChange={handleInputChange} value={route.from} ref={register({ required: true })}
              name="from" class="form-control startend select2-hidden-accessible" id="start" tabindex="-1" aria-hidden="true">
              {stations.map(item =>
                <option value={item.name}> {item.name} </option>
              )}
            </select>
            <div className="error text-danger">
              {errors.start_point && routeValidation.start_point}
            </div>
          </div>
        </div>


        <div class="form-group row">
          <label for="end_point" class="col-sm-3 col-form-label"> To * </label>
          <div class="col-sm-9">
            <select onChange={handleInputChange} value={route.to} ref={register({ required: true })}
              name="to" class="form-control startend select2-hidden-accessible" id="end" tabindex="-1" aria-hidden="true">
              {stations.map(item =>
                <option value={item.name}> {item.name} </option>
              )}

            </select>
            <div className="error text-danger">
              {errors.end_point && routeValidation.end_point}
            </div>
          </div>
        </div>


        <div class="form-group row">
          <label for="stoppage_points" class="col-sm-3 col-form-label"> Break points *  </label>
          <div class="col-sm-9">
            <input onChange={handleInputChange} name="breakPoints" class="form-control tokenfield" type="text" value={route.breakPoints} ref={register({ required: false })}
              placeholder="Break points" id="stoppage_points" />
            <div className="error text-danger">
              {errors.stoppage_points && routeValidation.stoppage_points}
            </div>
          </div>
        </div>

        <div class="form-group row">
          <label for="distance" class="col-sm-3 col-form-label"> Distance </label>
          <div class="col-sm-9">
            <input onChange={handleInputChange} value={route.distance} ref={register({ required: true })}
              name="distance" class="form-control" type="text" placeholder="Distance" id="distance" />
            <div className="error text-danger">
              {errors.distance && routeValidation.distance}
            </div>

          </div>
        </div>


        <div class="form-group row">
          <label for="approximate_time" class="col-sm-3 col-form-label"> Approximate time </label>
          <div class="col-sm-9">
            <input onChange={handleInputChange} value={route.approximateTime} ref={register({ required: true })}
              name="approximateTime" class="form-control" type="text" placeholder="Approximate time" id="approximate_time" />
            <div className="error text-danger">
              {errors.approximate_time && routeValidation.approximate_time}
            </div>
          </div>
        </div>

        <div class="form-group row">
          <label for="children_seat" class="col-sm-3 col-form-label"> Child seats </label>
          <div class="col-sm-9">
            <input onChange={handleInputChange} value={route.childSeat} ref={register({ required: true })}
              name="childSeat" class="form-control" type="text" placeholder="Child seats " id="children_seat" />
            <div className="error text-danger">
              {errors.children_seat && routeValidation.children_seat}
            </div>
          </div>
        </div>


        <div class="form-group row">
          <label for="special_seat" class="col-sm-3 col-form-label"> Special Seats</label>
          <div class="col-sm-9">
            <input onChange={handleInputChange} value={route.SpacialSeat} ref={register({ required: true })}
              name="SpacialSeat" class="form-control" type="text" placeholder="Special Seats" id="special_seat" />
            <div className="error text-danger">
              {errors.special_seat && routeValidation.special_seat}
            </div>
          </div>
        </div>

        <div class="form-group text-left">

          <button type="submit" class="btn btn-success w-md m-b-5"> Save </button>
        </div>
      </form>
    </div>
  )
};

EditRoute.propTypes = {};

EditRoute.defaultProps = {};

export default EditRoute;
