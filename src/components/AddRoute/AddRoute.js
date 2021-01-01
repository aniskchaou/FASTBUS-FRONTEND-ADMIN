import React from 'react';
import PropTypes from 'prop-types';
import './AddRoute.css';

const AddRoute = () => (
  <div className="AddRoute">
    <form action="https://bus-ticket.bdtask.com/bus_demo_v5/trip/route/form/" method="post" accept-charset="utf-8">
<input type="hidden" name="csrf_test_name" value="af61c944c144a453877c302d4296947c"/>
<input type="hidden" name="id" value=""/>
<div class="form-group row">
<label for="name" class="col-sm-3 col-form-label"><font   ><font   >Nom de l'itinéraire *</font></font></label>
<div class="col-sm-9" hei="">
<input name="name" class="form-control" type="text" placeholder="Nom de la route" id="name" value=""/>
</div>
</div>
<div class="form-group row">
<label for="start_point" class="col-sm-3 col-form-label"><font   ><font   >Point de départ *</font></font></label>
<div class="col-sm-9">
 <select name="start_point" class="form-control startend select2-hidden-accessible" id="start" tabindex="-1" aria-hidden="true">
<option value="" selected="selected"><font   ><font   >Sélectionnez une option</font></font></option>
<option value="3"><font   ><font   >Bafoussam</font></font></option>
<option value="1"><font   ><font   >Douala</font></font></option>
<option value="6"><font   ><font   >Edea</font></font></option>
<option value="5"><font   ><font   >Kribi</font></font></option>
<option value="4"><font   ><font   >LimbÃƒÂ ©</font></font></option>
<option value="7"><font   ><font   >Mbankomo</font></font></option>
<option value="2"><font   ><font   >Yaoundé</font></font></option>
</select><span class="select2 select2-container select2-container--default" dir="ltr"><span class="selection"><span class="select2-selection select2-selection--single" role="combobox" aria-haspopup="true" aria-expanded="false" tabindex="0" aria-labelledby="select2-start-container"><span class="select2-selection__rendered" id="select2-start-container"><span class="select2-selection__placeholder"><font   ><font   >Sélectionnez l'option</font></font></span></span><span class="select2-selection__arrow" role="presentation"><b role="presentation"></b></span></span></span><span class="dropdown-wrapper" aria-hidden="true"></span></span>
</div>
</div>
<div class="form-group row">
<label for="end_point" class="col-sm-3 col-form-label"><font   ><font   >Point final *</font></font></label>
<div class="col-sm-9">
<select name="end_point" class="form-control startend select2-hidden-accessible" id="end" tabindex="-1" aria-hidden="true">
<option value="" selected="selected"><font   ><font   >Sélectionnez une option</font></font></option>
<option value="3"><font   ><font   >Bafoussam</font></font></option>
<option value="1"><font   ><font   >Douala</font></font></option>
<option value="6"><font   ><font   >Edea</font></font></option>
<option value="5"><font   ><font   >Kribi</font></font></option>
<option value="4"><font   ><font   >LimbÃƒÂ ©</font></font></option>
<option value="7"><font   ><font   >Mbankomo</font></font></option>
<option value="2"><font   ><font   >Yaoundé</font></font></option>
</select><span class="select2 select2-container select2-container--default" dir="ltr"><span class="selection"><span class="select2-selection select2-selection--single" role="combobox" aria-haspopup="true" aria-expanded="false" tabindex="0" aria-labelledby="select2-end-container"><span class="select2-selection__rendered" id="select2-end-container"><span class="select2-selection__placeholder"><font   ><font   >Sélectionnez l'option</font></font></span></span><span class="select2-selection__arrow" role="presentation"><b role="presentation"></b></span></span></span><span class="dropdown-wrapper" aria-hidden="true"></span></span>
</div>
</div>
<div class="form-group row">
<label for="stoppage_points" class="col-sm-3 col-form-label"><font   ><font   >Points d'arrêt * </font></font></label>
<div class="col-sm-9">
<input name="stoppage_points" class="form-control tokenfield" type="text" placeholder="Points d'arrêt" id="stoppage_points" value="" required="" />
<ul class="answer_list" id="stopagediv" >
<input type="hidden" name="proId" id="proId"/>
</ul>
<ul class="answer_list" id="stopagediv2" >
<li><label class="checkbox-inline"><input type="checkbox" class="checkbox-btn" value="Douala" /><font   ><font   >Mbankomo</font></font></label></li> </ul>
</div>
</div>

<div class="form-group row">
<label for="distance" class="col-sm-3 col-form-label"><font   ><font   >Distance</font></font></label>
<div class="col-sm-9">
<input name="distance" class="form-control" type="text" placeholder="1 km / mille" id="distance" value=""/>
</div>
</div>
<div class="form-group row">
<label for="approximate_time" class="col-sm-3 col-form-label"><font   ><font   >Temps approximatif</font></font></label>
<div class="col-sm-9">
<input name="approximate_time" class="form-control" type="text" placeholder="Temps approximatif" id="approximate_time" value=""/>
 </div>
</div>
<div class="form-group row">
<label for="children_seat" class="col-sm-3 col-form-label"><font   ><font   >Siège enfant</font></font></label>
<div class="col-sm-9">
<input name="children_seat" class="form-control" type="text" placeholder="Siège enfant" id="children_seat" value=""/>
</div>
</div>
<div class="form-group row">
<label for="special_seat" class="col-sm-3 col-form-label"><font   ><font   >Siège spécial</font></font></label>
<div class="col-sm-9">
<input name="special_seat" class="form-control" type="text" placeholder="Siège spécial" id="special_seat" value=""/>
</div>
</div>
<div class="form-group row">
<label for="status" class="col-sm-3 col-form-label"><font   ><font   >Statut *</font></font></label>
<div class="col-sm-9">
<label class="radio-inline">
<input type="radio" name="status" value="1" id="status"/><font   ><font   >
actif
</font></font></label>
<label class="radio-inline">
<input type="radio" name="status" value="0" id="status"/><font   ><font   >
Inactif
</font></font></label>
</div>
</div>
<div class="form-group text-right">
<button type="reset" class="btn btn-primary w-md m-b-5"><font   ><font   >Réinitialiser</font></font></button>
<button type="submit" class="btn btn-success w-md m-b-5"><font   ><font   >sauver</font></font></button>
</div>
</form>
  </div>
);

AddRoute.propTypes = {};

AddRoute.defaultProps = {};

export default AddRoute;
