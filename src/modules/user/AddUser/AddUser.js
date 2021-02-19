import React, { useState } from 'react';
import './AddUser.css';
import { useForm } from 'react-hook-form';
import showMessage from '../../../libraries/messages/messages'
import userMessage from '../../../main/messages/userMessage'
import userValidation from '../../../main/validations/userValidation'
import UserTestService from '../../../main/mocks/UserTestService';
import HTTPService from '../../../main/services/HTTPService';

const AddUser = () => {

  const initialState = {
    post: "",
    description: "",
    start: "",
    end: "",
    location: "",
    requirement: ""
  };

  const { register, handleSubmit, errors } = useForm()
  const [user, setUser] = useState(initialState);

  const onSubmit = (data) => {
    //saveUser(data)
    UserTestService.create(data)
    setUser(initialState)
    showMessage('Confirmation', userMessage.add, 'success')
  }

  const saveUser = (data) => {

    HTTPService.create(data)
      .then(response => {
        setUser(initialState)
      })
      .catch(e => {
        console.log(e);
      });

  };


  const handleInputChange = event => {
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
  };

  return (
    <div className="AddUser">
      <form onSubmit={handleSubmit(onSubmit)} enctype="multipart/form-data" method="post" accept-charset="utf-8">

        <div class="form-group row">
          <label for="firstname" class="col-sm-3 col-form-label"><font    ><font    >Prénom *</font></font></label>
          <div class="col-sm-9">
            <input onChange={handleInputChange} value={user.firstname} ref={register({ required: true })}
              name="firstname" class="form-control" type="text" placeholder="Prénom" id="firstname" />
            <div className="error text-danger">
              {errors.firstname && userValidation.firstname}
            </div>
          </div>
        </div>

        <div class="form-group row">
          <label for="lastname" class="col-sm-3 col-form-label"><font    ><font    >Nom de famille *</font></font></label>
          <div class="col-sm-9">
            <input onChange={handleInputChange} value={user.lastname} ref={register({ required: true })}
              name="lastname" class="form-control" type="text" placeholder="Nom de famille" id="lastname" />
            <div className="error text-danger">
              {errors.lastname && userValidation.lastname}
            </div>
          </div>
        </div>

        <div class="form-group row">
          <label for="email" class="col-sm-3 col-form-label"><font    ><font    >Email *</font></font></label>
          <div class="col-sm-9">
            <input onChange={handleInputChange} value={user.email} ref={register({ required: true })}
              name="email" class="form-control" type="text" placeholder="Email" id="email" />
            <div className="error text-danger">
              {errors.email && userValidation.email}
            </div>
          </div>
        </div>

        <div class="form-group row">
          <label for="password" class="col-sm-3 col-form-label"><font    ><font    >Mot de passe *</font></font></label>
          <div class="col-sm-9">
            <input onChange={handleInputChange} value={user.password} ref={register({ required: true })}
              name="password" class="form-control" type="password" placeholder="Mot de passe" id="password" />
            <div className="error text-danger">
              {errors.password && userValidation.password}
            </div>
          </div>
        </div>

        <div class="form-group row">
          <label for="about" class="col-sm-3 col-form-label"><font    ><font    >À propos</font></font></label>
          <div class="col-sm-9">
            <textarea onChange={handleInputChange} value={user.about} ref={register({ required: true })}
              name="about" placeholder="À propos" class="form-control" id="about"></textarea>
            <div className="error text-danger">
              {errors.about && userValidation.about}
            </div>
          </div>
        </div>


        <div class="form-group row">
          <label for="image" class="col-sm-3 col-form-label"><font    ><font    >Image</font></font></label>
          <div class="col-sm-9">
            <input onChange={handleInputChange} value={user.file} ref={register({ required: false })}
              type="file" name="image" id="image" aria-describedby="fileHelp" />
            <div className="error text-danger">
              {errors.image && userValidation.image}
            </div>
          </div>
        </div>


        <div class="form-group row">
          <label for="status" class="col-sm-3 col-form-label"><font    ><font    >Statut *</font></font></label>
          <div class="col-sm-9">
            <label class="radio-inline">
              <input type="radio" name="status" value="1" checked="checked" id="status" /><font    ><font    >
                actif
            </font></font></label>
            <label class="radio-inline">
              <input type="radio" name="status" value="0" id="status" /><font    ><font    >
                Inactif
             </font></font></label>
            <div className="error text-danger">
              {errors.status && userValidation.status}
            </div>
          </div>
        </div>


        <div class="form-group text-right">
          <button type="reset" class="btn btn-primary w-md m-b-5"><font    ><font    >Réinitialiser</font></font></button>
          <button type="submit" class="btn btn-success w-md m-b-5"><font    ><font    >Sauvegarder</font></font></button>
        </div>
      </form>
    </div>
  )
};

AddUser.propTypes = {};

AddUser.defaultProps = {};

export default AddUser;
