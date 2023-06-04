import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import './EditDestination.css';
import { useForm } from 'react-hook-form';
import DestinationTestService from '../../../main/mocks/DestinationTestService';
import showMessage from '../../../libraries/messages/messages';
import destinationMessage from '../../../main/messages/destinationMessage';
import destinationValidation from '../../../main/validations/destinationValidation';
import destinationHTTPService from '../../../main/services/destinationHTTPService';

const EditDestination = (props) => {
  const { register, handleSubmit, errors } = useForm() // initialise the hook
  const [destination, setDestination] = useState(props.destination);

  useEffect(() => {
    setDestination(props.destination)
  }, [props.destination]);


  const onSubmit = (data) => {

    /*  DestinationTestService.update(props.destination, data)
     showMessage('Confirmation', destinationMessage.edit, 'success') */
    destinationHTTPService.editDestination(props.destination.id, data).then(() => {
      props.closeModal()
    })
  }


  const handleInputChange = event => {
    const { name, value } = event.target;
    setDestination({ ...destination, [name]: value });
  };

  return (
    <div className="EditDestination">
      <form onSubmit={handleSubmit(onSubmit)} >


        <div class="form-group row">
          <label for="name" class="col-sm-3 col-form-label">City  *</label>
          <div class="col-sm-9">
            <input onChange={handleInputChange} value={destination.city} ref={register({ required: true })}
              name="city" class="form-control" type="text" placeholder="City " id="name" />
            <div className="error text-danger">
              {errors.name && destinationValidation.name}
            </div>

          </div>
        </div>

        <div class="form-group row">
          <label for="description" class="col-sm-3 col-form-label">Description</label>
          <div class="col-sm-9">
            <textarea onChange={handleInputChange} value={destination.description} ref={register({ required: true })}
              name="description" placeholder="Description" class="form-control" id="description"></textarea>
            <div className="error text-danger">
              {errors.description && destinationValidation.description}
            </div>
          </div>
        </div>



        <div class="form-group text-left">
          <button type="submit" class="btn btn-success w-md m-b-5">Save</button>
        </div>
      </form>
    </div>
  )
};

EditDestination.propTypes = {};

EditDestination.defaultProps = {};

export default EditDestination;
