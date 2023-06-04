import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './AddDestination.css';
import { useForm } from 'react-hook-form';
import destinationMessage from '../../../main/messages/destinationMessage';
import showMessage from '../../../libraries/messages/messages';
import HTTPService from '../../../main/services/HTTPService';
import DestinationTestService from "../../../main/mocks/DestinationTestService";
import destinationValidation from '../../../main/validations/destinationValidation';
import destinationHTTPService from '../../../main/services/destinationHTTPService';
const AddDestination = (props) => {
  const initialState = {
    city: "",
    description: "",
    status: ""
  };

  const { register, handleSubmit, errors } = useForm()
  const [destination, setDestination] = useState(initialState);

  const onSubmit = (data) => {
    saveDestination(data)
    //DestinationTestService.create(data)
    // setDestination(initialState)
    //showMessage('Confirmation', destinationMessage.add, 'success')
  }

  const saveDestination = (data) => {

    destinationHTTPService.createDestination(data)
      .then(response => {
        setDestination(initialState)
        props.closeModal()
      })
      .catch(e => {
        console.log(e);
      });

  };


  const handleInputChange = event => {
    const { name, value } = event.target;
    setDestination({ ...destination, [name]: value });
  };


  return (
    <div className="AddDestination">
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

AddDestination.propTypes = {};

AddDestination.defaultProps = {};

export default AddDestination;
