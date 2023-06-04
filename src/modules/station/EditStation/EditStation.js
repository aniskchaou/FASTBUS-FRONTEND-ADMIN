import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';
import VehiculeTestService from '../../../main/mocks/VehiculeTestService';
import showMessage from '../../../libraries/messages/messages';
import vehiculeMessage from '../../../main/messages/vehiculeMessage';
import vehiculeValidation from '../../../main/validations/vehiculeValidation';
import stationHTTPService from '../../../main/services/stationHTTPService';
import destinationValidation from '../../../main/validations/destinationValidation';

const EditStation = (props) => {
    const { register, handleSubmit, errors } = useForm() // initialise the hook
    const [station, setStation] = useState(props.station);

    useEffect(() => {
        setStation(props.station)
    }, [props.station]);


    const onSubmit = (data) => {

        // VehiculeTestService.update(props.vehicule, data)
        // showMessage('Confirmation', vehiculeMessage.edit, 'success')
        stationHTTPService.editStation(props.station.id, data).then(() => {
            props.closeModal()
        })
    }

    const handleInputChange = event => {
        const { name, value } = event.target;
        setStation({ ...station, [name]: value });
    };

    return (
        <div>   <form onSubmit={handleSubmit(onSubmit)} >


            <div class="form-group row">
                <label for="name" class="col-sm-3 col-form-label">Name  *</label>
                <div class="col-sm-9">
                    <input onChange={handleInputChange} value={station.name} ref={register({ required: true })}
                        name="name" class="form-control" type="text" placeholder="Name " id="name" />
                    <div className="error text-danger">
                        {errors.name && destinationValidation.name}
                    </div>

                </div>
            </div>


            <div class="form-group row">
                <label for="name" class="col-sm-3 col-form-label">Address  *</label>
                <div class="col-sm-9">
                    <input onChange={handleInputChange} value={station.address} ref={register({ required: true })}
                        name="address" class="form-control" type="text" placeholder="Address " id="name" />
                    <div className="error text-danger">
                        {errors.name && destinationValidation.name}
                    </div>

                </div>
            </div>

            <div class="form-group row">
                <label for="name" class="col-sm-3 col-form-label">City  *</label>
                <div class="col-sm-9">
                    <input onChange={handleInputChange} value={station.city} ref={register({ required: true })}
                        name="city" class="form-control" type="text" placeholder="City " id="name" />
                    <div className="error text-danger">
                        {errors.name && destinationValidation.name}
                    </div>

                </div>
            </div>


            <div class="form-group text-left">
                <button type="submit" class="btn btn-success w-md m-b-5">Save</button>
            </div>
        </form></div>
    )
};

EditStation.propTypes = {};

EditStation.defaultProps = {};

export default EditStation;
