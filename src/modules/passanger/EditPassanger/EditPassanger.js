import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import './EditPassanger.css';
import { useForm } from 'react-hook-form';
import PassangerTestService from '../../../main/mocks/PassangerTestService';
import showMessage from '../../../libraries/messages/messages';
import passangerMessage from '../../../main/messages/passangerMessage';
import passangerValidation from '../../../main/validations/passangerValidation';
import passengerHTTPService from '../../../main/services/passengerHTTPService';

const EditPassanger = (props) => {
  const { register, handleSubmit, errors } = useForm() // initialise the hook
  const [passanger, setPassanger] = useState(props.passanger);

  useEffect(() => {
    setPassanger(props.passanger)
  }, [props.passanger]);


  const onSubmit = (data) => {

    /* PassangerTestService.update(props.passanger, data)
    showMessage('Confirmation', passangerMessage.edit, 'success') */
    passengerHTTPService.editPassenger(props.passanger.id, data).then(() => {
      props.closeModal()
    })
  }

  const handleInputChange = event => {
    const { name, value } = event.target;
    setPassanger({ ...passanger, [name]: value });
  };

  return (
    <div className="EditPassanger">
      <form onSubmit={handleSubmit(onSubmit)} enctype="multipart/form-data" method="post" accept-charset="utf-8">


        <div class="form-group row">
          <label for="name" class="col-sm-3 col-form-label"> Name *  </label>
          <div class="col-sm-9">
            <div class="row">
              <div class="col-sm-4">
                <input onChange={handleInputChange} value={passanger.firstName} ref={register({ required: true })}
                  name="firstName" class="form-control" type="text" placeholder="FirstName" id="name" required="" />
                <div className="error text-danger">
                  {errors.firstname && passangerValidation.firstname}
                </div>
              </div>

              <div class="col-sm-4">
                <input onChange={handleInputChange} value={passanger.lastName} ref={register({ required: true })}
                  name="lastName" class="form-control" type="text" placeholder="LastName" />
                <div className="error text-danger">
                  {errors.lastname && passangerValidation.lastname}
                </div>
              </div>
            </div>
          </div>
        </div>


        <div class="form-group row">
          <label for="phone" class="col-sm-3 col-form-label"> Telephone  </label>
          <div class="col-sm-9">
            <input onChange={handleInputChange} value={passanger.telephone} ref={register({ required: true })}
              name="telephone" class="form-control" type="text" placeholder="Telephone" id="phone" />
            <div className="error text-danger">
              {errors.phone && passangerValidation.phone}
            </div>
          </div>
        </div>


        <div class="form-group row">
          <label for="email" class="col-sm-3 col-form-label"> Email *  </label>
          <div class="col-sm-9">
            <input onChange={handleInputChange} value={passanger.email} ref={register({ required: true })}
              name="email" class="form-control" type="email" placeholder="Email" id="email" required="" />
            <div className="error text-danger">
              {errors.email && passangerValidation.email}
            </div>
          </div>
        </div>







        <div class="form-group row">
          <label for="address_line_1" class="col-sm-3 col-form-label"> Address   </label>
          <div class="col-sm-9">
            <input onChange={handleInputChange} value={passanger.address} ref={register({ required: true })}
              name="address" class="form-control" type="text" placeholder="Address" id="address_line_1" />
            <div className="error text-danger">
              {errors.address_line_1 && passangerValidation.address_line_1}
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

EditPassanger.propTypes = {};

EditPassanger.defaultProps = {};

export default EditPassanger;
