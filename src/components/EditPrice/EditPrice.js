import React from 'react';
import PropTypes from 'prop-types';
import './EditPrice.css';

const EditPrice = () => (
  <div className="EditPrice">
     <form action="https://bus-ticket.bdtask.com/bus_demo_v5/price/price_controller/create_price" name="myForm" method="post" accept-charset="utf-8">
<input type="hidden" name="csrf_test_name" value="af61c944c144a453877c302d4296947c"/>
<div class="form-group row">
<label for="route_id" class="col-sm-4 col-form-label"><font     ><font     >
Nom de l'itinéraire *</font></font></label>
<div class="col-sm-8">
<select name="route_id" class="form-control select2-hidden-accessible"  tabindex="-1" aria-hidden="true">
<option value="" selected="selected"><font     ><font     >Sélectionnez une option</font></font></option>
<option value="9"><font     ><font     >Douala - Cameroun</font></font></option>
<option value="10"><font     ><font     >Douala - Bafoussam</font></font></option>
<option value="11"><font     ><font     >Douala - Kribi</font></font></option>
<option value="12"><font     ><font     >Douala - Yaoundé</font></font></option>
<option value="13"><font     ><font     >Bafoussam-Douala</font></font></option>
</select><span class="select2 select2-container select2-container--default" dir="ltr" ><span class="selection"><span class="select2-selection select2-selection--single" role="combobox" aria-haspopup="true" aria-expanded="false" tabindex="0" aria-labelledby="select2-route_id-el-container"><span class="select2-selection__rendered" id="select2-route_id-el-container"><span class="select2-selection__placeholder"><font     ><font     >Sélectionnez l'option</font></font></span></span><span class="select2-selection__arrow" role="presentation"><b role="presentation"></b></span></span></span><span class="dropdown-wrapper" aria-hidden="true"></span></span>
</div>
</div>
<div class="form-group row">
<label for="vehicle_type_id" class="col-sm-4 col-form-label"><font     ><font     >
Type de véhicule *</font></font></label>
<div class="col-sm-8">
<select name="vehicle_type_id" class="form-control select2-hidden-accessible"  tabindex="-1" aria-hidden="true">
<option value="" selected="selected"><font     ><font     >Sélectionnez une option</font></font></option>
<option value="1"><font     ><font     >VIP</font></font></option>
<option value="2"><font     ><font     >Prestige</font></font></option>
<option value="3"><font     ><font     >Classique</font></font></option>
<option value="4"><font     ><font     >Entraîneur</font></font></option>
</select><span class="select2 select2-container select2-container--default" dir="ltr" ><span class="selection"><span class="select2-selection select2-selection--single" role="combobox" aria-haspopup="true" aria-expanded="false" tabindex="0" aria-labelledby="select2-vehicle_type_id-l4-container"><span class="select2-selection__rendered" id="select2-vehicle_type_id-l4-container"><span class="select2-selection__placeholder"><font     ><font     >Sélectionnez l'option</font></font></span></span><span class="select2-selection__arrow" role="presentation"><b role="presentation"></b></span></span></span><span class="dropdown-wrapper" aria-hidden="true"></span></span>
</div>
</div>
<div class="form-group row">
<label for="price" class="col-sm-4 col-form-label"><font     ><font     >
Prix ​​*</font></font></label>
<div class="col-sm-8">
<input name="price" class="form-control" type="text" placeholder="Prix" id="price"/>
</div>
</div>
<div class="form-group row">
<label for="childere_price" class="col-sm-4 col-form-label"><font     ><font     >
Prix ​​enfants *</font></font></label>
<div class="col-sm-8">
<input name="childere_price" class="form-control" type="text" placeholder="Prix ​​enfants" id="pchildere_rice"/>
</div>
</div>
<div class="form-group row">
<label for="special_price" class="col-sm-4 col-form-label"><font     ><font     >
Prix ​​spécial *</font></font></label>
<div class="col-sm-8">
<input name="special_price" class="form-control" type="text" placeholder="Prix ​​spécial" id="special_price"/>
</div>
</div>
<div class="form-group row">
<label for="group_price_per_person" class="col-sm-4 col-form-label"><font     ><font     >
Prix ​​de groupe par personne </font></font></label>
<div class="col-sm-8">
<input name="group_price_per_person" class="form-control"  type="text" placeholder="Prix ​​de groupe par personne" id="group_price_per_person"/>
</div>
</div>
<div class="form-group row">
<label for="group_size" class="col-sm-4 col-form-label"><font     ><font     >
Les membres du groupe </font></font></label>
<div class="col-sm-8">
<input type="text" name="group_size" class="form-control" placeholder="Les membres du groupe" id="group_size"/>
 </div>
</div>
<div class="form-group text-right">
<button type="reset" class="btn btn-primary w-md m-b-5"><font     ><font     >
Réinitialiser </font></font></button>
<button type="submit" class="btn btn-success w-md m-b-5"><font     ><font     >
Ajouter </font></font></button>
</div>
</form>
  </div>
);

EditPrice.propTypes = {};

EditPrice.defaultProps = {};

export default EditPrice;
