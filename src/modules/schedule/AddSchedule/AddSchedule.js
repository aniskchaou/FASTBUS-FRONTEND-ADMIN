import React, { useState } from 'react';
import './AddSchedule.css';
import { useForm } from 'react-hook-form';
import showMessage from '../../../libraries/messages/messages'
import scheduleMessage from '../../../main/messages/scheduleMessage'
import scheduleValidation from '../../../main/validations/scheduleValidation'
import ScheduleTestService from '../../../main/mocks/ScheduleTestService';
import HTTPService from '../../../main/services/HTTPService';

const AddSchedule = () => {

  const initialState = {
    post: "",
    description: "",
    start: "",
    end: "",
    location: "",
    requirement: ""
  };

  const { register, handleSubmit, errors } = useForm()
  const [schedule, setSchedule] = useState(initialState);

  const onSubmit = (data) => {
    //saveSchedule(data)
    ScheduleTestService.create(data)
    setSchedule(initialState)
    showMessage('Confirmation', scheduleMessage.add, 'success')
  }

  const saveSchedule = (data) => {

    HTTPService.create(data)
      .then(response => {
        setSchedule(initialState)
      })
      .catch(e => {
        console.log(e);
      });

  };


  const handleInputChange = event => {
    const { name, value } = event.target;
    setSchedule({ ...schedule, [name]: value });
  };


  return (
    <div className="AddSchedule">
      <form onSubmit={handleSubmit(onSubmit)} name="myForm" method="post" accept-charset="utf-8">


        <div class="form-group row">
          <label for="start" class="col-sm-4 col-form-label"><font    ><font    >
            Début *</font></font></label>
          <div class="col-sm-8">
            <input onChange={handleInputChange} value={schedule.start} ref={register({ required: true })}
              type="text" name="start" id="start" placeholder="Heure de début" class="form-control timepicker hasDatepicker" />
            <div className="error text-danger">
              {errors.start && scheduleValidation.start}
            </div>
          </div>
        </div>


        <div class="form-group row">
          <label for="end" class="col-sm-4 col-form-label"><font    ><font    >
            Fin *</font></font></label>
          <div class="col-sm-8">
            <input onChange={handleInputChange} value={schedule.end} ref={register({ required: true })}
              type="text" name="end" id="end" placeholder="Heure de fin" class="form-control timepicker hasDatepicker" />
            <div className="error text-danger">
              {errors.end && scheduleValidation.end}
            </div>
          </div>
        </div>


        <div class="form-group row">
          <label for="duration" class="col-sm-4 col-form-label"><font    ><font    >
            Durée *</font></font></label>
          <div class="col-sm-8">
            <input onChange={handleInputChange} value={schedule.duration} ref={register({ required: true })}
              type="text" name="duration" id="duration" placeholder="Durée" class="form-control" />
            <div className="error text-danger">
              {errors.duration && scheduleValidation.duration}
            </div>
          </div>
        </div>


        <div class="form-group text-right">
          <button type="reset" class="btn btn-primary w-md m-b-5"><font    ><font    >
            Réinitialiser </font></font></button>
          <button type="submit" class="btn btn-success w-md m-b-5"><font    ><font    >
            Sauvegarder </font></font></button>
        </div>
      </form>
    </div>
  )
};

AddSchedule.propTypes = {};

AddSchedule.defaultProps = {};

export default AddSchedule;
