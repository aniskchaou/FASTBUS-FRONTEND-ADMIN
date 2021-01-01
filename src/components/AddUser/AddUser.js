import React from 'react';
import PropTypes from 'prop-types';
import './AddUser.css';

const AddUser = () => (
  <div className="AddUser">
    <form action="https://bus-ticket.bdtask.com/bus_demo_v5/dashboard/user/form/" enctype="multipart/form-data" method="post" accept-charset="utf-8">
<input type="hidden" name="csrf_test_name" value="af61c944c144a453877c302d4296947c"/>
<input type="hidden" name="id" value=""/>
<div class="form-group row">
<label for="firstname" class="col-sm-3 col-form-label"><font    ><font    >Prénom *</font></font></label>
<div class="col-sm-9">
<input name="firstname" class="form-control" type="text" placeholder="Prénom" id="firstname" value=""/>
</div>
</div>
<div class="form-group row">
<label for="lastname" class="col-sm-3 col-form-label"><font    ><font    >Nom de famille *</font></font></label>
 <div class="col-sm-9">
<input name="lastname" class="form-control" type="text" placeholder="Nom de famille" id="lastname" value=""/>
</div>
</div>
<div class="form-group row">
<label for="email" class="col-sm-3 col-form-label"><font    ><font    >Email *</font></font></label>
<div class="col-sm-9">
<input name="email" class="form-control" type="text" placeholder="Email" id="email" value=""/>
</div>
</div>
<div class="form-group row">
<label for="password" class="col-sm-3 col-form-label"><font    ><font    >Mot de passe *</font></font></label>
<div class="col-sm-9">
<input name="password" class="form-control" type="password" placeholder="Mot de passe" id="password"/>
</div>
</div>
<div class="form-group row">
<label for="about" class="col-sm-3 col-form-label"><font    ><font    >À propos</font></font></label>
<div class="col-sm-9">
<textarea name="about" placeholder="À propos" class="form-control" id="about"></textarea>
</div>
</div>
<div class="form-group row">
<label for="preview" class="col-sm-3 col-form-label"><font    ><font    >Aperçu</font></font></label>
<div class="col-sm-9">
<img src="https://bus-ticket.bdtask.com/bus_demo_v5/./assets/img/icons/default.jpg" class="img-thumbnail" width="125" height="100"/>
</div>
<input type="hidden" name="old_image" value=""/>
</div>
<div class="form-group row">
<label for="image" class="col-sm-3 col-form-label"><font    ><font    >Image</font></font></label>
<div class="col-sm-9">
<input type="file" name="image" id="image" aria-describedby="fileHelp"/>
<small id="fileHelp" class="text-muted"></small>
</div>
</div>
<div class="form-group row">
<label for="status" class="col-sm-3 col-form-label"><font    ><font    >Statut *</font></font></label>
<div class="col-sm-9">
<label class="radio-inline">
<input type="radio" name="status" value="1" checked="checked" id="status"/><font    ><font    >
actif
</font></font></label>
<label class="radio-inline">
<input type="radio" name="status" value="0" id="status"/><font    ><font    >
Inactif
</font></font></label>
</div>
</div>
<div class="form-group text-right">
<button type="reset" class="btn btn-primary w-md m-b-5"><font    ><font    >Réinitialiser</font></font></button>
<button type="submit" class="btn btn-success w-md m-b-5"><font    ><font    >sauver</font></font></button>
</div>
</form>
  </div>
);

AddUser.propTypes = {};

AddUser.defaultProps = {};

export default AddUser;
