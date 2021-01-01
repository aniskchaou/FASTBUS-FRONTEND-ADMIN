import React from 'react';
import PropTypes from 'prop-types';
import './AddDestination.css';

const AddDestination = () => (
  <div className="AddDestination">
    <form action="https://bus-ticket.bdtask.com/bus_demo_v5/trip/location/form/" enctype="multipart/form-data" method="post" accept-charset="utf-8">
<input type="hidden" name="csrf_test_name" value="af61c944c144a453877c302d4296947c"/>
<input type="hidden" name="id" value=""/>
<div class="form-group row">
<label for="name" class="col-sm-3 col-form-label">Destination Name *</label>
<div class="col-sm-9">
<input name="name" class="form-control" type="text" placeholder="Destination Name" id="name" value=""/>
</div>
</div>
<div class="form-group row">
<label for="description" class="col-sm-3 col-form-label">Description</label>
<div class="col-sm-9">
<textarea name="description" placeholder="Description" class="form-control" id="description"></textarea>
</div>
</div>
<div class="form-group row">
<label for="google_map" class="col-sm-3 col-form-label">Google Map</label>
<div class="col-sm-9">
<textarea name="google_map" placeholder="Google Map" class="form-control" id="google_map"></textarea>
</div>
</div>
<div class="form-group row">
<label for="preview" class="col-sm-3 col-form-label">Preview</label>
<div class="col-sm-9">
<img src="https://bus-ticket.bdtask.com/bus_demo_v5/./assets/img/icons/default.jpg" class="img-thumbnail" width="125" height="100"/>
</div>
<input type="hidden" name="old_image" value=""/>
</div>
<div class="form-group row">
<label for="image" class="col-sm-3 col-form-label">Image</label>
<div class="col-sm-9">
<input type="file" name="image" id="image" aria-describedby="fileHelp"/>
<small id="fileHelp" class="text-muted"></small>
</div>
</div>
<div class="form-group row">
<label for="status" class="col-sm-3 col-form-label">Status *</label>
<div class="col-sm-9">
<label class="radio-inline">
<input type="radio" name="status" value="1" id="status"/>
Active
</label>
<label class="radio-inline">
<input type="radio" name="status" value="0" id="status"/>
Inactive
</label>
</div>
</div>
<div class="form-group text-right">
<button type="reset" class="btn btn-primary w-md m-b-5">Reset</button>
<button type="submit" class="btn btn-success w-md m-b-5">Save</button>
</div>
</form>
  </div>
);

AddDestination.propTypes = {};

AddDestination.defaultProps = {};

export default AddDestination;
