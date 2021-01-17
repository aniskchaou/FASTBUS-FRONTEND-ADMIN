import React from 'react';
import PropTypes from 'prop-types';
import './EditPassanger.css';

const EditPassanger = () => (
  <div className="EditPassanger">
    <form  enctype="multipart/form-data" method="post" accept-charset="utf-8">
     

     <div class="form-group row">
       <label for="name" class="col-sm-3 col-form-label"> Nom *  </label>
       <div class="col-sm-9">
         <div class="row">
           <div class="col-sm-4">
             <input name="firstname" class="form-control" type="text" placeholder="Nom" id="name" value="" required="" />
           </div>

           <div class="col-sm-4">
             <input name="lastname" class="form-control" type="text" placeholder="Prénom" value="" />
           </div>
         </div>
       </div>
     </div>


     <div class="form-group row">
       <label for="phone" class="col-sm-3 col-form-label"> Téléphone  </label>
       <div class="col-sm-9">
         <input name="phone" class="form-control" type="text" placeholder="Téléphone" id="phone" value="" />
       </div>
     </div>


     <div class="form-group row">
       <label for="email" class="col-sm-3 col-form-label"> Email *  </label>
       <div class="col-sm-9">
         <input name="email" class="form-control" type="email" placeholder="Email" id="email" value="" required="" />
       </div>
     </div>


     <div class="form-group row">
       <label for="password" class="col-sm-3 col-form-label"> Mot de passe *  </label>
       <div class="col-sm-9">
         <input name="password" class="form-control" type="password" placeholder="Mot de passe" id="password" />
         <input name="old_password" class="form-control" type="hidden" placeholder="Mot de passe" id="old_password" value="" />
       </div>
     </div>




     <div class="form-group row">
       <label for="image" class="col-sm-3 col-form-label"> Image  </label>
       <div class="col-sm-9">
         <div class="row">
         
           <div class="col-sm-10">
             <input type="file" name="image" id="image" aria-describedby="fileHelp" />
             <small id="fileHelp" class="text-muted"></small>
           </div>
         </div>
       </div>
       <input type="hidden" name="old_image" value="" />
     </div>
     <div class="form-group row">
       <label for="address_line_1" class="col-sm-3 col-form-label"> Adresse   </label>
       <div class="col-sm-9">
         <input name="address_line_1" class="form-control" type="text" placeholder="Adresse 1" id="address_line_1" value="" />
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
);

EditPassanger.propTypes = {};

EditPassanger.defaultProps = {};

export default EditPassanger;
