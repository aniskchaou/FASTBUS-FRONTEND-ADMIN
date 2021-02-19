import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './AddDestination.css';
import { useForm } from 'react-hook-form';
import destinationMessage from '../../../main/messages/destinationMessage';
import showMessage from '../../../libraries/messages/messages';
import HTTPService from '../../../main/services/HTTPService';
import DestinationTestService from "../../../main/mocks/DestinationTestService";
import destinationValidation from '../../../main/validations/destinationValidation';
const AddDestination = () => {
  const initialState = {
    post: "",
    description: "",
    start: "",
    end: "",
    location: "",
    requirement: ""
  };

  const { register, handleSubmit, errors } = useForm()
  const [destination, setDestination] = useState(initialState);

  const onSubmit = (data) => {
    //saveDestination(data)
    DestinationTestService.create(data)
    setDestination(initialState)
    showMessage('Confirmation', destinationMessage.add, 'success')
  }

  const saveDestination = (data) => {

    HTTPService.create(data)
      .then(response => {
        setDestination(initialState)
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
          <label for="name" class="col-sm-3 col-form-label">Destination  *</label>
          <div class="col-sm-9">
            <input onChange={handleInputChange} value={destination.name} ref={register({ required: true })}
              name="name" class="form-control" type="text" placeholder="Destination " id="name" />
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


        <div class="form-group row">
          <label for="image" class="col-sm-3 col-form-label">Image</label>
          <div class="col-sm-9">
            <input type="file" name="image" id="image" aria-describedby="fileHelp" />
            <div className="error text-danger">
              {errors.image && destinationValidation.image}
            </div>

          </div>
        </div>

        <div class="form-group row">
          <label for="status" class="col-sm-3 col-form-label">Statut *</label>
          <div class="col-sm-9">
            <label class="radio-inline">
              <input type="radio" name="status" value="1" id="status" />Active</label>
            <label class="radio-inline">
              <input type="radio" name="status" value="0" id="status" />Inactive</label>

          </div>
        </div>



        <div class="form-group text-right">
          <button type="reset" class="btn btn-primary w-md m-b-5">Reinitialiser</button>
          <button type="submit" class="btn btn-success w-md m-b-5">Savegarder</button>
        </div>
      </form>
    </div>
  )
};

AddDestination.propTypes = {};

AddDestination.defaultProps = {};

export default AddDestination;
