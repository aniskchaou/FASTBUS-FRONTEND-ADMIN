import React from 'react';
import PropTypes from 'prop-types';
import './ViewOffer.css';

const ViewOffer = () => (
  <div className="ViewOffer">
    <div class="card-content">
      <div id="myDIV" class="card-content-member">
        <p class="m-t-0">
        </p><h1><i class="fa fa-gift" aria-hidden="true"></i></h1><font  ><font  >
          OFFRE DE TEST OFFRE</font></font><p></p>
      </div>
      <div class="card-content-languages">
        <table class="table table-hover" width="100%">
          <tbody><tr>
            <th><font  ><font  >Nom de la route</font></font></th>
            <td><font  ><font  >
              Bafoussam-Douala </font></font></td>
          </tr>
            <tr>
              <th><font  ><font  >Code d'offre</font></font></th>
              <td><font  ><font  >
                1234xcv </font></font></td>
            </tr>
            <tr>
              <th><font  ><font  >Numéro de l'offre</font></font></th>
              <td><font  ><font  >
                1234 </font></font></td>
            </tr>
            <tr>
              <th><font  ><font  >Remise</font></font></th>
              <td><font  ><font  >50 USD </font></font></td>
            </tr>
            <tr>
              <th><font  ><font  >Date de début de l'offre</font></font></th>
              <td><font  ><font  >
                12/01/2019 </font></font></td>
            </tr>
            <tr>
              <th><font  ><font  >Dernière date de l'offre</font></font></th>
              <td><font  ><font  >
                14/01/2019 </font></font></td>
            </tr>
            <tr>
              <th><font  ><font  >Conditions de l'offre</font></font></th>
              <td><font  ><font  >
                Du texte </font></font></td>
            </tr>
          </tbody></table>
      </div>
    </div>
  </div>
);

ViewOffer.propTypes = {};

ViewOffer.defaultProps = {};

export default ViewOffer;
