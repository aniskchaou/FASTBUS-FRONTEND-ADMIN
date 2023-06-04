import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import './EditOffer.css';
import { useForm } from 'react-hook-form';
import OfferTestService from '../../../main/mocks/OfferTestService';
import showMessage from '../../../libraries/messages/messages';
import offerMessage from '../../../main/messages/offerMessage';
import offerValidation from '../../../main/validations/offerValidation';
import offerHTTPService from '../../../main/services/offerHTTPService';
import routeHTTPService from '../../../main/services/routeHTTPService';

const EditOffer = (props) => {
  const { register, handleSubmit, errors } = useForm() // initialise the hook
  const [offer, setOffer] = useState(props.offer);

  useEffect(() => {
    setOffer(props.offer)
  }, [props.offer]);


  const onSubmit = (data) => {

    /*  OfferTestService.update(props.offer, data)
     showMessage('Confirmation', offerMessage.edit, 'success') */
    offerHTTPService.editOffer(props.offer.id, data).then(() => {
      props.closeModal()
    })
  }

  const handleInputChange = event => {
    const { name, value } = event.target;
    setOffer({ ...offer, [name]: value });
  };

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


  return (
    <div className="EditOffer">
      <form onSubmit={handleSubmit(onSubmit)} method="post" accept-charset="utf-8">

        <div class="form-group row">
          <div for="offer_name" class="col-sm-3 col-form-div">
            Name   *  </div>
          <div class="col-sm-9">
            <input onChange={handleInputChange} value={offer.name} ref={register({ required: true })}
              name="name" class="form-control" type="text" placeholder="Name  " id="offer_name" />
            <div className="error text-danger">
              {errors.offer_name && offerValidation.offer_name}
            </div>
          </div>
        </div>


        <div class="form-group row">
          <div for="offer_start_date" class="col-sm-3 col-form-div">
            Start  *  </div>
          <div class="col-sm-9">
            <input onChange={handleInputChange} value={offer.start} ref={register({ required: true })}
              name="start" class="datepicker form-control hasDatepicker" type="date" placeholder="Date de début  " id="offer_start_date" />
            <div className="error text-danger">
              {errors.offer_start_date && offerValidation.offer_start_date}
            </div>
          </div>
        </div>

        <div class="form-group row">
          <div for="offer_end_date" class="col-sm-3 col-form-div">
            End  *  </div>
          <div class="col-sm-9">
            <input onChange={handleInputChange} value={offer.end} ref={register({ required: true })}
              type="date" name="end" class="datepicker form-control hasDatepicker" placeholder="Dernière date  " id="offer_end_date" />
            <div className="error text-danger">
              {errors.offer_end_date && offerValidation.offer_end_date}
            </div>
          </div>
        </div>

        <div class="form-group row">
          <div for="offer_code" class="col-sm-3 col-form-div">
            Code *</div>
          <div class="col-sm-9">
            <input onChange={handleInputChange} value={offer.code} ref={register({ required: true })}
              type="text" name="code" class="form-control" placeholder="Offer Code" id="offer_code" />
            <div className="error text-danger">
              {errors.offer_code && offerValidation.offer_code}
            </div>
          </div>
        </div>


        <div class="form-group row">
          <div for="offer_discount" class="col-sm-3 col-form-div">
            Discount *  </div>
          <div class="col-sm-9">
            <input onChange={handleInputChange} value={offer.discount} ref={register({ required: true })}
              type="text" name="discount" class="form-control" placeholder="Discount" id="offer_discount" />
            <div className="error text-danger">
              {errors.offer_discount && offerValidation.offer_discount}
            </div>
          </div>
        </div>


        <div class="form-group row">
          <div for="offer_terms" class="col-sm-3 col-form-div">
            Conditions     </div>
          <div class="col-sm-9">
            <textarea onChange={handleInputChange} value={offer.condition} ref={register({ required: true })}
              name="condition" class="form-control" placeholder="Conditions  " id="offer_terms"></textarea>
            <div className="error text-danger">
              {errors.offer_terms && offerValidation.offer_terms}
            </div>
          </div>
        </div>


        <div class="form-group row">
          <div for="offer_route_id" class="col-sm-3 col-form-div">
            Trip *  </div>
          <div class="col-sm-9">
            <select onChange={handleInputChange} value={offer.travel} ref={register({ required: true })}
              name="travel" class="form-control select2-hidden-accessible" tabindex="-1" aria-hidden="true">
              {expenses.map(item =>
                <option value={item.name}>{item.name}</option>
              )}
            </select>
            <div className="error text-danger">
              {errors.offer_route_id && offerValidation.offer_route_id}
            </div>
          </div>
        </div>





        <div class="form-group text-left">

          <button type="submit" class="btn btn-success w-md m-b-5" id="check_username_availability">
            Save   </button>
        </div>


      </form>
    </div>
  )
};

EditOffer.propTypes = {};

EditOffer.defaultProps = {};

export default EditOffer;
