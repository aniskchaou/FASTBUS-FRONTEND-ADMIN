import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import './EditOffer.css';
import { useForm } from 'react-hook-form';
import OfferTestService from '../../../main/mocks/OfferTestService';
import showMessage from '../../../libraries/messages/messages';
import offerMessage from '../../../main/messages/offerMessage';
import offerValidation from '../../../main/validations/offerValidation';

const EditOffer = (props) => {
  const { register, handleSubmit, errors } = useForm() // initialise the hook
  const [offer, setOffer] = useState(props.offer);

  useEffect(() => {
    setOffer(props.offer)
  }, [props.offer]);


  const onSubmit = (data) => {

    OfferTestService.update(props.offer, data)
    showMessage('Confirmation', offerMessage.edit, 'success')
  }

  const handleInputChange = event => {
    const { name, value } = event.target;
    setOffer({ ...offer, [name]: value });
  };

  return (
    <div className="EditOffer">
      <form onSubmit={handleSubmit(onSubmit)} method="post" accept-charset="utf-8">

        <div class="form-group row">
          <div for="offer_name" class="col-sm-3 col-form-div">
            Nom   *  </div>
          <div class="col-sm-9">
            <input onChange={handleInputChange} value={offer.offer_name} ref={register({ required: true })}
              name="offer_name" class="form-control" type="text" placeholder="Nom  " id="offer_name" />
            <div className="error text-danger">
              {errors.offer_name && offerValidation.offer_name}
            </div>
          </div>
        </div>


        <div class="form-group row">
          <div for="offer_start_date" class="col-sm-3 col-form-div">
            Date de début   *  </div>
          <div class="col-sm-9">
            <input onChange={handleInputChange} value={offer.offer_start_date} ref={register({ required: true })}
              name="offer_start_date" class="datepicker form-control hasDatepicker" type="text" placeholder="Date de début  " id="offer_start_date" />
            <div className="error text-danger">
              {errors.offer_start_date && offerValidation.offer_start_date}
            </div>
          </div>
        </div>

        <div class="form-group row">
          <div for="offer_end_date" class="col-sm-3 col-form-div">
            Dernière date   *  </div>
          <div class="col-sm-9">
            <input onChange={handleInputChange} value={offer.offer_end_date} ref={register({ required: true })}
              type="text" name="offer_end_date" class="datepicker form-control hasDatepicker" placeholder="Dernière date  " id="offer_end_date" />
            <div className="error text-danger">
              {errors.offer_end_date && offerValidation.offer_end_date}
            </div>
          </div>
        </div>

        <div class="form-group row">
          <div for="offer_code" class="col-sm-3 col-form-div">
            Code d'offre *</div>
          <div class="col-sm-9">
            <input onChange={handleInputChange} value={offer.offer_code} ref={register({ required: true })}
              type="text" name="offer_code" class="form-control" placeholder="Code d'offre" id="offer_code" />
            <div className="error text-danger">
              {errors.offer_code && offerValidation.offer_code}
            </div>
          </div>
        </div>


        <div class="form-group row">
          <div for="offer_discount" class="col-sm-3 col-form-div">
            Remise *  </div>
          <div class="col-sm-9">
            <input onChange={handleInputChange} value={offer.offer_discount} ref={register({ required: true })}
              type="text" name="offer_discount" class="form-control" placeholder="Remise" id="offer_discount" />
            <div className="error text-danger">
              {errors.offer_discount && offerValidation.offer_discount}
            </div>
          </div>
        </div>


        <div class="form-group row">
          <div for="offer_terms" class="col-sm-3 col-form-div">
            Conditions     </div>
          <div class="col-sm-9">
            <textarea onChange={handleInputChange} value={offer.offer_terms} ref={register({ required: true })}
              name="offer_terms" class="form-control" placeholder="Conditions  " id="offer_terms"></textarea>
            <div className="error text-danger">
              {errors.offer_terms && offerValidation.offer_terms}
            </div>
          </div>
        </div>


        <div class="form-group row">
          <div for="offer_route_id" class="col-sm-3 col-form-div">
            Nom de l'itinéraire *  </div>
          <div class="col-sm-9">
            <select onChange={handleInputChange} value={offer.offer_route_id} ref={register({ required: true })}
              name="offer_route_id" class="form-control select2-hidden-accessible" tabindex="-1" aria-hidden="true">
              <option selected="selected">  Sélectionnez une option  </option>
              <option value="9">  Douala - Cameroun  </option>
            </select>
            <div className="error text-danger">
              {errors.offer_route_id && offerValidation.offer_route_id}
            </div>
          </div>
        </div>


        <div class="form-group row">
          <div for="offer_number" class="col-sm-3 col-form-div">
            Numéro    </div>
          <div class="col-sm-9">
            <input onChange={handleInputChange} value={offer.offer_number} ref={register({ required: true })}
              name="offer_number" class="form-control" type="text" placeholder="Numéro  " id="offer_number" />
            <div className="error text-danger">
              {errors.offer_number && offerValidation.offer_number}
            </div>
          </div>
        </div>


        <div class="form-group text-right">
          <button type="reset" class="btn btn-primary w-md m-b-5">
            Réinitialiser    </button>
          <button type="submit" class="btn btn-success w-md m-b-5" id="check_username_availability">
            Sauvegarder   </button>
        </div>


      </form>
    </div>
  )
};

EditOffer.propTypes = {};

EditOffer.defaultProps = {};

export default EditOffer;
