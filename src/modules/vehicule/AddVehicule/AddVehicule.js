import React, { useState } from 'react';
import './AddVehicule.css';
import { useForm } from 'react-hook-form';
import showMessage from '../../../libraries/messages/messages'
import vehiculeMessage from '../../../main/messages/vehiculeMessage'
import vehiculeValidation from '../../../main/validations/vehiculeValidation'
import VehiculeTestService from '../../../main/mocks/VehiculeTestService';
import HTTPService from '../../../main/services/HTTPService';

const AddVehicule = () => {

  const initialState = {
    post: "",
    description: "",
    start: "",
    end: "",
    location: "",
    requirement: ""
  };

  const { register, handleSubmit, errors } = useForm()
  const [vehicule, setVehicule] = useState(initialState);

  const onSubmit = (data) => {
    //saveVehicule(data)
    VehiculeTestService.create(data)
    setVehicule(initialState)
    showMessage('Confirmation', vehiculeMessage.add, 'success')
  }

  const saveVehicule = (data) => {

    HTTPService.create(data)
      .then(response => {
        setVehicule(initialState)
      })
      .catch(e => {
        console.log(e);
      });

  };


  const handleInputChange = event => {
    const { name, value } = event.target;
    setVehicule({ ...vehicule, [name]: value });
  };

  return (
    <div className="AddVehicule">
      <form onSubmit={handleSubmit(onSubmit)} method="post" accept-charset="utf-8">


        <div class="form-group row">
          <label for="reg_no" class="col-sm-3 col-form-label"><font  ><font  >N ° d'enregistrement. *</font></font></label>
          <div class="col-sm-9">
            <input onChange={handleInputChange} value={vehicule.reg_no} ref={register({ required: true })}
              name="reg_no" class="form-control" type="text" placeholder="N ° d'enregistrement." id="reg_no" />
            <div className="error text-danger">
              {errors.reg_no && vehiculeValidation.reg_no}
            </div>
          </div>
        </div>


        <div class="form-group row">
          <label for="fleet_type_id" class="col-sm-3 col-form-label"><font  ><font  >Type  *</font></font></label>
          <div class="col-sm-9">
            <select onChange={handleInputChange} value={vehicule.fleet_type_id} ref={register({ required: true })}
              name="fleet_type_id" class="form-control select2-hidden-accessible" tabindex="-1" aria-hidden="true">
              <option selected="selected">Sélectionnez une option</option>
              <option value="1">VIP</option>
              <option value="2">Prestige</option>
              <option value="3">Classique</option>
              <option value="4">Entraîneur</option>
            </select>
            <div className="error text-danger">
              {errors.fleet_type_id && vehiculeValidation.fleet_type_id}
            </div>
          </div>
        </div>


        <div class="form-group row">
          <label for="engine_no" class="col-sm-3 col-form-label"><font  ><font  >Moteur No.</font></font></label>
          <div class="col-sm-9">
            <input onChange={handleInputChange} value={vehicule.engine_no} ref={register({ required: true })}
              name="engine_no" class="form-control" type="text" placeholder="Moteur No." id="engine_no" />
            <div className="error text-danger">
              {errors.engine_no && vehiculeValidation.engine_no}
            </div>
          </div>
        </div>


        <div class="form-group row">
          <label for="model_no" class="col-sm-3 col-form-label"><font  ><font  >Numéro de modèle *</font></font></label>
          <div class="col-sm-9">
            <input onChange={handleInputChange} value={vehicule.model_no} ref={register({ required: true })}
              name="model_no" class="form-control" type="text" placeholder="Modèle No." id="model_no" />
            <div className="error text-danger">
              {errors.model_no && vehiculeValidation.model_no}
            </div>
          </div>
        </div>

        <div class="form-group row">
          <label for="chasis_no" class="col-sm-3 col-form-label"><font  ><font  >Chasis No. *</font></font></label>
          <div class="col-sm-9">
            <input onChange={handleInputChange} value={vehicule.chasis_no} ref={register({ required: true })}
              name="chasis_no" class="form-control" type="text" placeholder="Chasis No." id="chasis_no" />
            <div className="error text-danger">
              {errors.chasis_no && vehiculeValidation.chasis_no}
            </div>
          </div>
        </div>


        <div class="form-group row">
          <label for="owner" class="col-sm-3 col-form-label"><font  ><font  >Propriétaire</font></font></label>
          <div class="col-sm-9">
            <input onChange={handleInputChange} value={vehicule.owner} ref={register({ required: true })}
              name="owner" class="form-control" type="text" placeholder="Propriétaire" id="owner" />
            <div className="error text-danger">
              {errors.owner && vehiculeValidation.owner}
            </div>
          </div>
        </div>


        <div class="form-group row">
          <label for="owner_phone" class="col-sm-3 col-form-label"><font  ><font  >Numéro de téléphone du propriétaire</font></font></label>
          <div class="col-sm-9">
            <input onChange={handleInputChange} value={vehicule.owner_phone} ref={register({ required: true })}
              name="owner_phone" class="form-control" type="text" placeholder="Numéro de téléphone du propriétaire" id="owner_phone" />
            <div className="error text-danger">
              {errors.owner_phone && vehiculeValidation.owner_phone}
            </div>
          </div>
        </div>

        <div class="form-group row">
          <label for="company" class="col-sm-3 col-form-label"><font  ><font  >Marque</font></font></label>
          <div class="col-sm-9">
            <input onChange={handleInputChange} value={vehicule.company} ref={register({ required: true })}
              name="company" class="form-control" type="text" placeholder="Marque" id="company" />
            <div className="error text-danger">
              {errors.company && vehiculeValidation.company}
            </div>
          </div>
        </div>


        <div class="form-group row">
          <label for="status" class="col-sm-3 col-form-label"><font  ><font  >Statut *</font></font></label>
          <div class="col-sm-9">
            <label class="radio-inline">
              <input type="radio" name="status" value="1" id="status" /><font  ><font  >
                actif </font></font></label>
            <label class="radio-inline">
              <input type="radio" name="status" value="0" id="status" /><font  ><font  >
                Inactif </font></font></label>
          </div>
          <div className="error text-danger">
            {errors.status && vehiculeValidation.status}
          </div>
        </div>


        <div class="form-group text-right">
          <button type="reset" class="btn btn-primary w-md m-b-5"><font  ><font  >Réinitialiser</font></font></button>
          <button type="submit" class="btn btn-success w-md m-b-5"><font  ><font  >Sauvegarder</font></font></button>
        </div>
      </form>
    </div>
  )
};

AddVehicule.propTypes = {};

AddVehicule.defaultProps = {};

export default AddVehicule;
