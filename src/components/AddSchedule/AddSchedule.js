import React from 'react';
import PropTypes from 'prop-types';
import './AddSchedule.css';

const AddSchedule = () => (
  <div className="AddSchedule">
   <form action="https://bus-ticket.bdtask.com/bus_demo_v5/trip/shedule/add_shedule" name="myForm" method="post" accept-charset="utf-8">
<input type="hidden" name="csrf_test_name" value="af61c944c144a453877c302d4296947c" />
<div class="form-group row">
<label for="start" class="col-sm-4 col-form-label"><font    ><font    >
Début *</font></font></label>
<div class="col-sm-8">
<input type="text" name="start" id="start" placeholder="Heure de début" class="form-control timepicker hasDatepicker" value="" />
<input type="hidden" name="shedule_id" value="" />
</div>
</div>
<div class="form-group row">
<label for="end" class="col-sm-4 col-form-label"><font    ><font    >
Fin *</font></font></label>
<div class="col-sm-8">
<input type="text" name="end" id="end" placeholder="Heure de fin" class="form-control timepicker hasDatepicker" value="" />
</div>
</div>
<div class="form-group row">
<label for="duration" class="col-sm-4 col-form-label"><font    ><font    >
Durée *</font></font></label>
<div class="col-sm-8">
 <input type="text" name="duration" id="duration" placeholder="Durée" class="form-control" value="" />
</div>
</div>
<div class="form-group text-right">
<button type="reset" class="btn btn-primary w-md m-b-5"><font    ><font    >
Réinitialiser </font></font></button>
<button type="submit" class="btn btn-success w-md m-b-5"><font    ><font    >
Ajouter </font></font></button>
</div>
</form>
  </div>
);

AddSchedule.propTypes = {};

AddSchedule.defaultProps = {};

export default AddSchedule;
