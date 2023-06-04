import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';
import VehiculeTestService from '../../../main/mocks/VehiculeTestService';
import showMessage from '../../../libraries/messages/messages';
import vehiculeMessage from '../../../main/messages/vehiculeMessage';
import vehiculeValidation from '../../../main/validations/vehiculeValidation';
import driverHTTPService from '../../../main/services/driverHTTPService';

const EditDriver = (props) => {
    const { register, handleSubmit, errors } = useForm() // initialise the hook
    const [driver, setDriver] = useState(props.driver);

    useEffect(() => {
        setDriver(props.driver)
    }, [props.driver]);


    const onSubmit = (data) => {

        // VehiculeTestService.update(props.vehicule, data)
        // showMessage('Confirmation', vehiculeMessage.edit, 'success')
        driverHTTPService.editDriver(props.driver.id, data).then(() => {
            props.closeModal()
        })
    }

    const handleInputChange = event => {
        const { name, value } = event.target;
        setDriver({ ...driver, [name]: value });
    };

    return (
        <div className="AddDestination">
            <form onSubmit={handleSubmit(onSubmit)} >


                <div class="form-group row">
                    <label for="name" class="col-sm-3 col-form-label">Name  *</label>
                    <div class="col-sm-9">
                        <input onChange={handleInputChange} value={driver.name} ref={register({ required: true })}
                            name="name" class="form-control" type="text" placeholder="Name " id="name" />
                        <div className="error text-danger">
                            {/*   {errors.name && destinationValidation.name} */}
                        </div>

                    </div>
                </div>


                <div class="form-group row">
                    <label for="name" class="col-sm-3 col-form-label">License  *</label>
                    <div class="col-sm-9">
                        <input onChange={handleInputChange} value={driver.license} ref={register({ required: true })}
                            name="license" class="form-control" type="text" placeholder="License " id="name" />
                        <div className="error text-danger">
                            {/*  {errors.name && destinationValidation.name} */}
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

EditDriver.propTypes = {};

EditDriver.defaultProps = {};

export default EditDriver;
