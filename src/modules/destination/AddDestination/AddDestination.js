import React from 'react';
import PropTypes from 'prop-types';
import './AddDestination.css';

const AddDestination = () => (
  <div className="AddDestination">
    <form  enctype="multipart/form-data" method="post" accept-charset="utf-8">
      

      <div class="form-group row">
        <label for="name" class="col-sm-3 col-form-label">Destination  *</label>
        <div class="col-sm-9">
          <input name="name" class="form-control" type="text" placeholder="Destination " id="name" value="" />
        </div>
      </div>

      <div class="form-group row">
        <label for="description" class="col-sm-3 col-form-label">Description</label>
        <div class="col-sm-9">
          <textarea name="description" placeholder="Description" class="form-control" id="description"></textarea>
        </div>
      </div>


      <div class="form-group row">
        <label for="image" class="col-sm-3 col-form-label">Image</label>
        <div class="col-sm-9">
          <input type="file" name="image" id="image" aria-describedby="fileHelp" />
          <small id="fileHelp" class="text-muted"></small>
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
);

AddDestination.propTypes = {};

AddDestination.defaultProps = {};

export default AddDestination;
