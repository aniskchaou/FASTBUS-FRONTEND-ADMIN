import React, { useState } from 'react';
import PropTypes from 'prop-types';
import HTTPService from '../../../main/services/HTTPService';
import showMessage from '../../../libraries/messages/messages';
import { useForm } from 'react-hook-form';
import destinationValidation from '../../../main/validations/destinationValidation';
import stationHTTPService from '../../../main/services/stationHTTPService';

const AddStation = (props) => {


    const initialState = {
        name: "",
        address: "",
        city: ""
    };

    const { register, handleSubmit, errors } = useForm()
    const [facility, setFacility] = useState(initialState);

    const onSubmit = (data) => {
        // //saveAssign(data)
        // // AssignTestService.create(data)
        // setFacility(initialState)
        //showMessage('Confirmation', assignMessage.add, 'success')
        stationHTTPService.createStation(data)
            .then(response => {
                setFacility(initialState)
                props.closeModal()
            })
            .catch(e => {
                console.log(e);
            });
    }

    const saveAssign = (data) => {

        HTTPService.create(data)
            .then(response => {
                setFacility(initialState)
            })
            .catch(e => {
                console.log(e);
            });

    };


    const handleInputChange = event => {
        const { name, value } = event.target;
        setFacility({ ...facility, [name]: value });
    };

    return (
        <div className="AddDestination">
            <form onSubmit={handleSubmit(onSubmit)} >


                <div class="form-group row">
                    <label for="name" class="col-sm-3 col-form-label">Name  *</label>
                    <div class="col-sm-9">
                        <input onChange={handleInputChange} value={facility.name} ref={register({ required: true })}
                            name="name" class="form-control" type="text" placeholder="Name " id="name" />
                        <div className="error text-danger">
                            {errors.name && destinationValidation.name}
                        </div>

                    </div>
                </div>


                <div class="form-group row">
                    <label for="name" class="col-sm-3 col-form-label">Address  *</label>
                    <div class="col-sm-9">
                        <input onChange={handleInputChange} value={facility.address} ref={register({ required: true })}
                            name="address" class="form-control" type="text" placeholder="Address " id="name" />
                        <div className="error text-danger">
                            {errors.name && destinationValidation.name}
                        </div>

                    </div>
                </div>

                <div class="form-group row">
                    <label for="name" class="col-sm-3 col-form-label">City  *</label>
                    <div class="col-sm-9">
                        <input onChange={handleInputChange} value={facility.city} ref={register({ required: true })}
                            name="city" class="form-control" type="text" placeholder="City " id="name" />
                        <div className="error text-danger">
                            {errors.name && destinationValidation.name}
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

AddStation.propTypes = {};

AddStation.defaultProps = {};

export default AddStation;