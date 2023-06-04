import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import './EditPrice.css';
import { useForm } from 'react-hook-form';
import PriceTestService from '../../../main/mocks/PriceTestService';
import showMessage from '../../../libraries/messages/messages';
import priceMessage from '../../../main/messages/priceMessage';
import priceValidation from '../../../main/validations/priceValidation';
import priceHTTPService from '../../../main/services/priceHTTPService';
import routeHTTPService from '../../../main/services/routeHTTPService';

const EditPrice = (props) => {
  const { register, handleSubmit, errors } = useForm() // initialise the hook
  const [price, setPrice] = useState(props.price);

  useEffect(() => {
    setPrice(props.price)
  }, [props.price]);


  const onSubmit = (data) => {

    /*  PriceTestService.update(props.price, data)
     showMessage('Confirmation', priceMessage.edit, 'success') */
    priceHTTPService.editPrice(props.price.id, data).then(() => {
      props.closeModal()
    })
  }

  const [expenses, setExpenses] = useState([]);
  useEffect(() => {
    getAllExpenses()
  }, []);
  const getAllExpenses = () => {

    routeHTTPService.getAllRoute()
      .then(response => {
        setExpenses(response.data);
      })
      .catch(e => {
        showMessage('Confirmation', e, 'warning')
      });
  };


  const handleInputChange = event => {
    const { name, value } = event.target;
    setPrice({ ...price, [name]: value });
  };

  return (
    <div className="EditPrice">
      <form onSubmit={handleSubmit(onSubmit)} name="myForm" method="post" accept-charset="utf-8">


        <div class="form-group row">
          <label for="route_id" class="col-sm-4 col-form-label">
            Route * </label>
          <div class="col-sm-8">
            <select onChange={handleInputChange} value={price.route} ref={register({ required: true })}
              name="route" class="form-control select2-hidden-accessible" tabindex="-1" aria-hidden="true">
              {expenses.map(item =>
                <option value={item.name}>{item.name}</option>
              )}
            </select>
            <div className="error text-danger">
              {errors.route_id && priceValidation.route_id}
            </div>
          </div>
        </div>



        <div class="form-group row">
          <label for="price" class="col-sm-4 col-form-label">
            Price ​​* </label>
          <div class="col-sm-8">
            <input onChange={handleInputChange} value={price.price} ref={register({ required: true })}
              name="price" class="form-control" type="text" placeholder="Price" id="price" />
            <div className="error text-danger">
              {errors.price && priceValidation.price}
            </div>
          </div>
        </div>


        <div class="form-group row">
          <label for="childere_price" class="col-sm-4 col-form-label">
            Child Price * </label>
          <div class="col-sm-8">
            <input onChange={handleInputChange} value={price.kidsPrice} ref={register({ required: true })}
              name="kidsPrice" class="form-control" type="text" placeholder="Child Price" id="pchildere_rice" />
            <div className="error text-danger">
              {errors.childere_price && priceValidation.childere_price}
            </div>
          </div>
        </div>


        <div class="form-group row">
          <label for="special_price" class="col-sm-4 col-form-label">
            Special Price * </label>
          <div class="col-sm-8">
            <input onChange={handleInputChange} value={price.specialPrice} ref={register({ required: true })}
              name="specialPrice" class="form-control" type="text" placeholder="Special Price" id="special_price" />
            <div className="error text-danger">
              {errors.special_price && priceValidation.special_price}
            </div>
          </div>
        </div>






        <div class="form-group text-left">

          <button type="submit" class="btn btn-success w-md m-b-5">
            Save  </button>
        </div>
      </form>
    </div>
  )
};

EditPrice.propTypes = {};

EditPrice.defaultProps = {};

export default EditPrice;
