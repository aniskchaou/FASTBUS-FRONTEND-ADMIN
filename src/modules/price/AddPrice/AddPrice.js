import React, { useState } from 'react';
import './AddPrice.css';
import { useForm } from 'react-hook-form';
import showMessage from '../../../libraries/messages/messages'
import priceMessage from '../../../main/messages/priceMessage'
import priceValidation from '../../../main/validations/priceValidation'
import PriceTestService from '../../../main/mocks/PriceTestService';
import HTTPService from '../../../main/services/HTTPService';

const AddPrice = () => {

  const initialState = {
    post: "",
    description: "",
    start: "",
    end: "",
    location: "",
    requirement: ""
  };

  const { register, handleSubmit, errors } = useForm()
  const [price, setPrice] = useState(initialState);

  const onSubmit = (data) => {
    //savePrice(data)
    PriceTestService.create(data)
    setPrice(initialState)
    showMessage('Confirmation', priceMessage.add, 'success')
  }

  const savePrice = (data) => {

    HTTPService.create(data)
      .then(response => {
        setPrice(initialState)
      })
      .catch(e => {
        console.log(e);
      });

  };


  const handleInputChange = event => {
    const { name, value } = event.target;
    setPrice({ ...price, [name]: value });
  };


  return (
    <div className="AddPrice">
      <form onSubmit={handleSubmit(onSubmit)} name="myForm" method="post" accept-charset="utf-8">


        <div class="form-group row">
          <label for="route_id" class="col-sm-4 col-form-label">
            Nom de l'itinéraire * </label>
          <div class="col-sm-8">
            <select onChange={handleInputChange} value={price.route_id} ref={register({ required: true })}
              name="route_id" class="form-control select2-hidden-accessible" tabindex="-1" aria-hidden="true">
              <option selected="selected"> Sélectionnez une option </option>
              <option value="Paris - Nice"> Paris - Nice </option>
              <option value="Nice - Paris"> Nice - Paris </option>
            </select>
            <div className="error text-danger">
              {errors.route_id && priceValidation.route_id}
            </div>
          </div>
        </div>


        <div class="form-group row">
          <label for="vehicle_type_id" class="col-sm-4 col-form-label">
            Type de véhicule * </label>
          <div class="col-sm-8">
            <select onChange={handleInputChange} value={price.vehicle_type_id} ref={register({ required: true })}
              name="vehicle_type_id" class="form-control select2-hidden-accessible" tabindex="-1" aria-hidden="true">
              <option selected="selected"> Sélectionnez une option </option>
              <option value="VIP"> VIP </option>
              <option value="Prestige"> Prestige </option>
              <option value="Classique"> Classique </option>
              <option value="Entraîneur"> Entraîneur </option>
            </select>
            <div className="error text-danger">
              {errors.vehicle_type_id && priceValidation.vehicle_type_id}
            </div>
          </div>
        </div>


        <div class="form-group row">
          <label for="price" class="col-sm-4 col-form-label">
            Prix ​​* </label>
          <div class="col-sm-8">
            <input onChange={handleInputChange} value={price.price} ref={register({ required: true })}
              name="price" class="form-control" type="text" placeholder="Prix" id="price" />
            <div className="error text-danger">
              {errors.price && priceValidation.price}
            </div>
          </div>
        </div>


        <div class="form-group row">
          <label for="childere_price" class="col-sm-4 col-form-label">
            Prix ​​enfants * </label>
          <div class="col-sm-8">
            <input onChange={handleInputChange} value={price.childere_price} ref={register({ required: true })}
              name="childere_price" class="form-control" type="text" placeholder="Prix ​​enfants" id="pchildere_rice" />
            <div className="error text-danger">
              {errors.childere_price && priceValidation.childere_price}
            </div>
          </div>
        </div>


        <div class="form-group row">
          <label for="special_price" class="col-sm-4 col-form-label">
            Prix ​​spécial * </label>
          <div class="col-sm-8">
            <input onChange={handleInputChange} value={price.special_price} ref={register({ required: true })}
              name="special_price" class="form-control" type="text" placeholder="Prix ​​spécial" id="special_price" />
            <div className="error text-danger">
              {errors.special_price && priceValidation.special_price}
            </div>
          </div>
        </div>


        <div class="form-group row">
          <label for="group_price_per_person" class="col-sm-4 col-form-label">
            Prix ​​de groupe par personne  </label>
          <div class="col-sm-8">
            <input onChange={handleInputChange} value={price.group_price_per_person} ref={register({ required: true })}
              name="group_price_per_person" class="form-control" type="text" placeholder="Prix ​​de groupe par personne" id="group_price_per_person" />
            <div className="error text-danger">
              {errors.group_price_per_person && priceValidation.group_price_per_person}
            </div>
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
  )
};

AddPrice.propTypes = {};

AddPrice.defaultProps = {};

export default AddPrice;
