import React, { useState } from 'react';
import './AddRoute.css';
import { useForm } from 'react-hook-form';
import showMessage from '../../../libraries/messages/messages'
import routeMessage from '../../../main/messages/routeMessage'
import routeValidation from '../../../main/validations/routeValidation'
import RouteTestService from '../../../main/mocks/RouteTestService';
import HTTPService from '../../../main/services/HTTPService';

const AddRoute = () => {

  const initialState = {
    post: "",
    description: "",
    start: "",
    end: "",
    location: "",
    requirement: ""
  };

  const { register, handleSubmit, errors } = useForm()
  const [route, setRoute] = useState(initialState);

  const onSubmit = (data) => {
    //saveRoute(data)
    RouteTestService.create(data)
    setRoute(initialState)
    showMessage('Confirmation', routeMessage.add, 'success')
  }

  const saveRoute = (data) => {

    HTTPService.create(data)
      .then(response => {
        setRoute(initialState)
      })
      .catch(e => {
        console.log(e);
      });

  };


  const handleInputChange = event => {
    const { name, value } = event.target;
    setRoute({ ...route, [name]: value });
  };

  return (
    <div className="AddRoute">
      <form onSubmit={handleSubmit(onSubmit)} method="post" accept-charset="utf-8">

        <div class="form-group row">
          <label for="name" class="col-sm-3 col-form-label"> Nom de l'itinéraire * </label>
          <div class="col-sm-9" hei="">
            <input onChange={handleInputChange} value={route.name} ref={register({ required: true })}
              name="name" class="form-control" type="text" placeholder="Nom de la route" id="name" />
            <div className="error text-danger">
              {errors.name && routeValidation.name}
            </div>
          </div>
        </div>


        <div class="form-group row">
          <label for="start_point" class="col-sm-3 col-form-label"> Point de départ * </label>
          <div class="col-sm-9">
            <select onChange={handleInputChange} value={route.start_point} ref={register({ required: true })}
              name="start_point" class="form-control startend select2-hidden-accessible" id="start" tabindex="-1" aria-hidden="true">
              <option selected="selected"> Sélectionnez une option </option>
              <option value="3"> Paris </option>

            </select>
            <div className="error text-danger">
              {errors.start_point && routeValidation.start_point}
            </div>
          </div>
        </div>


        <div class="form-group row">
          <label for="end_point" class="col-sm-3 col-form-label"> Point final * </label>
          <div class="col-sm-9">
            <select onChange={handleInputChange} value={route.end_point} ref={register({ required: true })}
              name="end_point" class="form-control startend select2-hidden-accessible" id="end" tabindex="-1" aria-hidden="true">
              <option selected="selected"> Sélectionnez une option </option>
              <option value="3"> Nice </option>

            </select>
            <div className="error text-danger">
              {errors.end_point && routeValidation.end_point}
            </div>
          </div>
        </div>


        <div class="form-group row">
          <label for="stoppage_points" class="col-sm-3 col-form-label"> Points d'arrêt *  </label>
          <div class="col-sm-9">
            <input name="stoppage_points" class="form-control tokenfield" type="text"
              placeholder="Points d'arrêt" id="stoppage_points" required="" />
            <div className="error text-danger">
              {errors.stoppage_points && routeValidation.stoppage_points}
            </div>
          </div>
        </div>

        <div class="form-group row">
          <label for="distance" class="col-sm-3 col-form-label"> Distance </label>
          <div class="col-sm-9">
            <input onChange={handleInputChange} value={route.distance} ref={register({ required: true })}
              name="distance" class="form-control" type="text" placeholder="1 km / mille" id="distance" />
            <div className="error text-danger">
              {errors.distance && routeValidation.distance}
            </div>

          </div>
        </div>


        <div class="form-group row">
          <label for="approximate_time" class="col-sm-3 col-form-label"> Temps approximatif </label>
          <div class="col-sm-9">
            <input onChange={handleInputChange} value={route.approximate_time} ref={register({ required: true })}
              name="approximate_time" class="form-control" type="text" placeholder="Temps approximatif" id="approximate_time" />
            <div className="error text-danger">
              {errors.approximate_time && routeValidation.approximate_time}
            </div>
          </div>
        </div>

        <div class="form-group row">
          <label for="children_seat" class="col-sm-3 col-form-label"> Siège enfant </label>
          <div class="col-sm-9">
            <input onChange={handleInputChange} value={route.children_seat} ref={register({ required: true })}
              name="children_seat" class="form-control" type="text" placeholder="Siège enfant" id="children_seat" />
            <div className="error text-danger">
              {errors.children_seat && routeValidation.children_seat}
            </div>
          </div>
        </div>


        <div class="form-group row">
          <label for="special_seat" class="col-sm-3 col-form-label"> Siège spécial </label>
          <div class="col-sm-9">
            <input onChange={handleInputChange} value={route.special_seat} ref={register({ required: true })}
              name="special_seat" class="form-control" type="text" placeholder="Siège spécial" id="special_seat" />
            <div className="error text-danger">
              {errors.special_seat && routeValidation.special_seat}
            </div>
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
            <div className="error text-danger">
              {errors.status && routeValidation.status}
            </div>
          </div>
        </div>



        <div class="form-group text-right">
          <button type="reset" class="btn btn-primary w-md m-b-5"> Réinitialiser </button>
          <button type="submit" class="btn btn-success w-md m-b-5"> sauvegarder </button>
        </div>
      </form>
    </div>
  )
};

AddRoute.propTypes = {};

AddRoute.defaultProps = {};

export default AddRoute;
