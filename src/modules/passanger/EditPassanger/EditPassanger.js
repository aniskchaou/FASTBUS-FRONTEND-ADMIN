import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import './EditPassanger.css';
import { useForm } from 'react-hook-form';
import PassangerTestService from '../../../main/mocks/PassangerTestService';
import showMessage from '../../../libraries/messages/messages';
import passangerMessage from '../../../main/messages/passangerMessage';
import passangerValidation from '../../../main/validations/passangerValidation';

const EditPassanger = (props) => {
  const { register, handleSubmit, errors } = useForm() // initialise the hook
  const [passanger, setPassanger] = useState(props.passanger);

  useEffect(() => {
    setPassanger(props.passanger)
  }, [props.passanger]);


  const onSubmit = (data) => {

    PassangerTestService.update(props.passanger, data)
    showMessage('Confirmation', passangerMessage.edit, 'success')
  }

  const handleInputChange = event => {
    const { name, value } = event.target;
    setPassanger({ ...passanger, [name]: value });
  };

  return (
    <div className="EditPassanger">
      <form onSubmit={handleSubmit(onSubmit)} enctype="multipart/form-data" method="post" accept-charset="utf-8">


        <div class="form-group row">
          <label for="name" class="col-sm-3 col-form-label"> Nom *  </label>
          <div class="col-sm-9">
            <div class="row">
              <div class="col-sm-4">
                <input onChange={handleInputChange} value={passanger.firstname} ref={register({ required: true })}
                  name="firstname" class="form-control" type="text" placeholder="Nom" id="name" required="" />
                <div className="error text-danger">
                  {errors.firstname && passangerValidation.firstname}
                </div>
              </div>

              <div class="col-sm-4">
                <input onChange={handleInputChange} value={passanger.firstname} ref={register({ required: true })}
                  name="lastname" class="form-control" type="text" placeholder="Prénom" />
                <div className="error text-danger">
                  {errors.lastname && passangerValidation.lastname}
                </div>
              </div>
            </div>
          </div>
        </div>


        <div class="form-group row">
          <label for="phone" class="col-sm-3 col-form-label"> Téléphone  </label>
          <div class="col-sm-9">
            <input onChange={handleInputChange} value={passanger.phone} ref={register({ required: true })}
              name="phone" class="form-control" type="text" placeholder="Téléphone" id="phone" />
            <div className="error text-danger">
              {errors.phone && passangerValidation.phone}
            </div>
          </div>
        </div>


        <div class="form-group row">
          <label for="email" class="col-sm-3 col-form-label"> Email *  </label>
          <div class="col-sm-9">
            <input onChange={handleInputChange} value={passanger.email} ref={register({ required: true })}
              name="email" class="form-control" type="email" placeholder="Email" id="email" required="" />
            <div className="error text-danger">
              {errors.email && passangerValidation.email}
            </div>
          </div>
        </div>


        <div class="form-group row">
          <label for="password" class="col-sm-3 col-form-label"> Mot de passe *  </label>
          <div class="col-sm-9">
            <input onChange={handleInputChange} value={passanger.old_password} ref={register({ required: true })}
              name="password" class="form-control" type="password" placeholder="Mot de passe" id="password" />
            <input name="old_password" class="form-control" type="hidden" placeholder="Mot de passe" id="old_password" />
            <div className="error text-danger">
              {errors.password && passangerValidation.password}
            </div>
          </div>
        </div>




        <div class="form-group row">
          <label for="image" class="col-sm-3 col-form-label"> Image  </label>
          <div class="col-sm-9">
            <div class="row">

              <div class="col-sm-10">
                <input type="file" name="image" id="image" aria-describedby="fileHelp" />

              </div>
            </div>
          </div>
          <input type="hidden" name="old_image" />
        </div>


        <div class="form-group row">
          <label for="address_line_1" class="col-sm-3 col-form-label"> Adresse   </label>
          <div class="col-sm-9">
            <input onChange={handleInputChange} value={passanger.address_line_1} ref={register({ required: true })}
              name="address_line_1" class="form-control" type="text" placeholder="Adresse 1" id="address_line_1" />
            <div className="error text-danger">
              {errors.address_line_1 && passangerValidation.address_line_1}
            </div>
          </div>
        </div>


        <div class="form-group row">
          <label for="status" class="col-sm-3 col-form-label"> Statut *  </label>
          <div class="col-sm-9">
            <label class="radio-inline">
              <input type="radio" name="status" value="1" id="status" />
              actif
           </label>
            <label class="radio-inline">
              <input type="radio" name="status" value="0" id="status" />
              Inactif
           </label>
          </div>
        </div>



        <div class="form-group text-right">
          <button type="reset" class="btn btn-primary w-md m-b-5"> Réinitialiser  </button>
          <button type="submit" class="btn btn-success w-md m-b-5"> Sauvegarder </button>
        </div>
      </form>
    </div>
  )
};

EditPassanger.propTypes = {};

EditPassanger.defaultProps = {};

export default EditPassanger;
