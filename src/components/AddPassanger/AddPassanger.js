import React from 'react';
import PropTypes from 'prop-types';
import './AddPassanger.css';

const AddPassanger = () => (
  <div className="AddPassanger">
    <form action="https://bus-ticket.bdtask.com/bus_demo_v5/ticket/passenger/form" enctype="multipart/form-data" method="post" accept-charset="utf-8">
      <input type="hidden" name="csrf_test_name" value="af61c944c144a453877c302d4296947c" />
      <input type="hidden" name="id" value="" />
      <input type="hidden" name="id_no" value="PRZNI90F" />
      <div class="form-group row">
        <label for="name" class="col-sm-3 col-form-label"> Nom *  </label>
        <div class="col-sm-9">
          <div class="row">
            <div class="col-sm-4">
              <input name="firstname" class="form-control" type="text" placeholder="Prénom" id="name" value="" required="" />
            </div>
            <div class="col-sm-4">
              <input name="middle_name" class="form-control" type="text" placeholder="Prénom (facultatif)" value="" />
            </div>
            <div class="col-sm-4">
              <input name="lastname" class="form-control" type="text" placeholder="Nom de famille" value="" />
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
        <label for="email" class="col-sm-3 col-form-label"> Carte d'identité *  </label>
        <div class="col-sm-9">
          <input name="nid" class="form-control" type="text" placeholder="carte d'identité" id="nid" value="" required="" />
        </div>
      </div>
      <div class="form-group row">
        <label for="image" class="col-sm-3 col-form-label"> Image  </label>
        <div class="col-sm-9">
          <div class="row">
            <div class="col-sm-2">
              <img src="https://bus-ticket.bdtask.com/bus_demo_v5/./assets/img/icons/default.jpg" class="img-thumbnail" width="125" height="100" />
            </div>
            <div class="col-sm-10">
              <input type="file" name="image" id="image" aria-describedby="fileHelp" />
              <small id="fileHelp" class="text-muted"></small>
            </div>
          </div>
        </div>
        <input type="hidden" name="old_image" value="" />
      </div>
      <div class="form-group row">
        <label for="address_line_1" class="col-sm-3 col-form-label"> Adresse 1  </label>
        <div class="col-sm-9">
          <input name="address_line_1" class="form-control" type="text" placeholder="Adresse 1" id="address_line_1" value="" />
        </div>
      </div>
      <div class="form-group row">
        <label for="address_line_2" class="col-sm-3 col-form-label"> Adresse Ligne 2  </label>
        <div class="col-sm-9">
          <input name="address_line_2" class="form-control" type="text" placeholder="Adresse Ligne 2" id="address_line_2" value="" />
        </div>
      </div>
      <div class="form-group row">
        <label for="country" class="col-sm-3 col-form-label"> Pays  </label>
        <div class="col-sm-9">
          <select name="country" class="form-control select2-hidden-accessible" tabindex="-1" aria-hidden="true">
            <option value=""> Sélectionnez une option  </option>
            <option value="AF"> Afghanistan  </option>
            <option value="AL"> Albanie  </option>
            <option value="DZ"> Algérie  </option>
            <option value="AS"> Samoa américaines  </option>
            <option value="AD"> Andorre  </option>
            <option value="AO"> Angola  </option>
            <option value="AI"> Anguilla  </option>
            <option value="AQ"> Antarctique  </option>
            <option value="AG"> Antigua-et-Barbuda  </option>
            <option value="AR"> Argentine  </option>
            <option value="AM"> Arménie  </option>
            <option value="AW"> Aruba  </option>
            <option value="AU"> Australie  </option>
            <option value="AT"> L'Autriche  </option>
            <option value="AZ"> Azerbaïdjan  </option>
            <option value="BS"> Bahamas  </option>
            <option value="BH"> Bahreïn  </option>
            <option value="BD" selected="selected"> Bangladesh  </option>
            <option value="BB"> Barbade  </option>
            <option value="BY"> Biélorussie  </option>
            <option value="BE"> Belgique  </option>
            <option value="BZ"> Belize  </option>
            <option value="BJ"> Bénin  </option>
            <option value="BM"> Bermudes  </option>
            <option value="BT"> Bhoutan  </option>
            <option value="BO"> Bolivie  </option>
            <option value="BA"> Bosnie Herzégovine  </option>
            <option value="BW"> Botswana  </option>
            <option value="BV"> Île Bouvet  </option>
            <option value="BR"> Brésil  </option>
            <option value="IO"> Territoire britannique de l'océan Indien  </option>
            <option value="BN"> Brunei Darussalam  </option>
            <option value="BG"> Bulgarie  </option>
            <option value="BF"> Burkina Faso  </option>
            <option value="BI"> Burundi  </option>
            <option value="KH"> Cambodge  </option>
            <option value="CM"> Cameroun  </option>
            <option value="CA"> Canada  </option>
            <option value="CV"> Cap-Vert  </option>
            <option value="KY"> Îles Caïmans  </option>
            <option value="CF">Central African Republic</option>
            <option value="TD">Chad</option>
            <option value="CL">Chile</option>
            <option value="CN">China</option>
            <option value="CX">Christmas Island</option>
            <option value="CC">Cocos (Keeling) Islands</option>
            <option value="CO">Colombia</option>
            <option value="KM">Comoros</option>
            <option value="CG">Congo</option>
            <option value="CD">Congo, the Democratic Republic of the</option>
            <option value="CK">Cook Islands</option>
            <option value="CR">Costa Rica</option>
            <option value="CI">Cote D'Ivoire</option>
            <option value="HR">Croatia</option>
            <option value="CU">Cuba</option>
            <option value="CY">Cyprus</option>
            <option value="CZ">Czech Republic</option>
            <option value="DK">Denmark</option>
            <option value="DJ">Djibouti</option>
            <option value="DM">Dominica</option>
            <option value="DO">Dominican Republic</option>
            <option value="EC">Ecuador</option>
            <option value="EG">Egypt</option>
            <option value="SV">El Salvador</option>
            <option value="GQ">Equatorial Guinea</option>
            <option value="ER">Eritrea</option>
            <option value="EE">Estonia</option>
            <option value="ET">Ethiopia</option>
            <option value="FK">Falkland Islands (Malvinas)</option>
            <option value="FO">Faroe Islands</option>
            <option value="FJ">Fiji</option>
            <option value="FI">Finland</option>
            <option value="FR">France</option>
            <option value="GF">French Guiana</option>
            <option value="PF">French Polynesia</option>
            <option value="TF">French Southern Territories</option>
            <option value="GA">Gabon</option>
            <option value="GM">Gambia</option>
            <option value="GE">Georgia</option>
            <option value="DE">Germany</option>
            <option value="GH">Ghana</option>
            <option value="GI">Gibraltar</option>
            <option value="GR">Greece</option>
            <option value="GL">Greenland</option>
            <option value="GD">Grenada</option>
            <option value="GP">Guadeloupe</option>
            <option value="GU">Guam</option>
            <option value="GT">Guatemala</option>
            <option value="GN">Guinea</option>
            <option value="GW">Guinea-Bissau</option>
            <option value="GY">Guyana</option>
            <option value="HT">Haiti</option>
            <option value="HM">Heard Island and Mcdonald Islands</option>
            <option value="VA">Holy See (Vatican City State)</option>
            <option value="HN">Honduras</option>
            <option value="HK">Hong Kong</option>
            <option value="HU">Hungary</option>
            <option value="IS">Iceland</option>
            <option value="IN">India</option>
            <option value="ID">Indonesia</option>
            <option value="IR">Iran, Islamic Republic of</option>
            <option value="IQ">Iraq</option>
            <option value="IE">Ireland</option>
            <option value="IL">Israel</option>
            <option value="IT">Italy</option>
            <option value="JM">Jamaica</option>
            <option value="JP">Japan</option>
            <option value="JO">Jordan</option>
            <option value="KZ">Kazakhstan</option>
            <option value="KE">Kenya</option>
            <option value="KI">Kiribati</option>
            <option value="KP">Korea, Democratic People's Republic of</option>
            <option value="KR">Korea, Republic of</option>
            <option value="KW">Kuwait</option>
            <option value="KG">Kyrgyzstan</option>
            <option value="LA">Lao People's Democratic Republic</option>
            <option value="LV">Latvia</option>
            <option value="LB">Lebanon</option>
            <option value="LS">Lesotho</option>
            <option value="LR">Liberia</option>
            <option value="LY">Libyan Arab Jamahiriya</option>
            <option value="LI">Liechtenstein</option>
            <option value="LT">Lithuania</option>
            <option value="LU">Luxembourg</option>
            <option value="MO">Macao</option>
            <option value="MK">Macedonia, the Former Yugoslav Republic of</option>
            <option value="MG">Madagascar</option>
            <option value="MW">Malawi</option>
            <option value="MY">Malaysia</option>
            <option value="MV">Maldives</option>
            <option value="ML">Mali</option>
            <option value="MT">Malta</option>
            <option value="MH">Marshall Islands</option>
            <option value="MQ">Martinique</option>
            <option value="MR">Mauritania</option>
            <option value="MU">Mauritius</option>
            <option value="YT">Mayotte</option>
            <option value="MX">Mexico</option>
            <option value="FM">Micronesia, Federated States of</option>
            <option value="MD">Moldova, Republic of</option>
            <option value="MC">Monaco</option>
            <option value="MN">Mongolia</option>
            <option value="MS">Montserrat</option>
            <option value="MA">Morocco</option>
            <option value="MZ">Mozambique</option>
            <option value="MM">Myanmar</option>
            <option value="NA">Namibia</option>
            <option value="NR">Nauru</option>
            <option value="NP">Nepal</option>
            <option value="NL">Netherlands</option>
            <option value="AN">Netherlands Antilles</option>
            <option value="NC">New Caledonia</option>
            <option value="NZ">New Zealand</option>
            <option value="NI">Nicaragua</option>
            <option value="NE">Niger</option>
            <option value="NG">Nigeria</option>
            <option value="NU">Niue</option>
            <option value="NF">Norfolk Island</option>
            <option value="MP">Northern Mariana Islands</option>
            <option value="NO">Norway</option>
            <option value="OM">Oman</option>
            <option value="PK">Pakistan</option>
            <option value="PW">Palau</option>
            <option value="PS">Palestinian Territory, Occupied</option>
            <option value="PA">Panama</option>
            <option value="PG">Papua New Guinea</option>
            <option value="PY">Paraguay</option>
            <option value="PE">Peru</option>
            <option value="PH">Philippines</option>
            <option value="PN">Pitcairn</option>
            <option value="PL">Poland</option>
            <option value="PT">Portugal</option>
            <option value="PR">Puerto Rico</option>
            <option value="QA">Qatar</option>
            <option value="RE">Reunion</option>
            <option value="RO">Romania</option>
            <option value="RU">Russian Federation</option>
            <option value="RW">Rwanda</option>
            <option value="SH">Saint Helena</option>
            <option value="KN">Saint Kitts and Nevis</option>
            <option value="LC">Saint Lucia</option>
            <option value="PM">Saint Pierre and Miquelon</option>
            <option value="VC">Saint Vincent and the Grenadines</option>
            <option value="WS">Samoa</option>
            <option value="SM">San Marino</option>
            <option value="ST">Sao Tome and Principe</option>
            <option value="SA">Saudi Arabia</option>
            <option value="SN">Senegal</option>
            <option value="CS">Serbia and Montenegro</option>
            <option value="SC">Seychelles</option>
            <option value="SL">Sierra Leone</option>
            <option value="SG">Singapore</option>
            <option value="SK">Slovakia</option>
            <option value="SI">Slovenia</option>
            <option value="SB"> îles Salomon  </option>
            <option value="SO"> Somalie  </option>
            <option value="ZA"> Afrique du Sud  </option>
            <option value="GS"> Géorgie du Sud et îles Sandwich du Sud  </option>
            <option value="ES"> Espagne  </option>
            <option value="LK"> Sri Lanka  </option>
            <option value="SD"> Soudan  </option>
            <option value="SR"> Suriname  </option>
            <option value="SJ"> Svalbard et Jan Mayen  </option>
            <option value="SZ"> Swaziland  </option>
            <option value="SE"> Suède  </option>
            <option value="CH"> Suisse  </option>
            <option value="SY"> République arabe syrienne  </option>
            <option value="TW"> Taiwan, Province de Chine  </option>
            <option value="TJ"> Tadjikistan  </option>
            <option value="TZ"> Tanzanie, République-Unie de  </option>
            <option value="TH"> Thaïlande  </option>
            <option value="TL"> Timor-Leste  </option>
            <option value="TG"> Aller  </option>
            <option value="TK"> Tokelau  </option>
            <option value="TO"> Tonga  </option>
            <option value="TT"> Trinité-et-Tobago  </option>
            <option value="TN"> Tunisie  </option>
            <option value="TR"> dinde  </option>
            <option value="TM"> Turkménistan  </option>
            <option value="TC"> îles Turques-et-Caïques  </option>
            <option value="TV"> Tuvalu  </option>
            <option value="UG"> Ouganda  </option>
            <option value="UA"> Ukraine  </option>
            <option value="AE"> Emirats Arabes Unis  </option>
            <option value="GB"> Royaume-Uni  </option>
            <option value="US"> États Unis  </option>
            <option value="UM"> Îles mineures éloignées des États-Unis  </option>
            <option value="UY"> Uruguay  </option>
            <option value="UZ"> Ouzbékistan  </option>
            <option value="VU"> Vanuatu  </option>
            <option value="VE"> Venezuela  </option>
            <option value="VN"> Viet Nam  </option>
            <option value="VG"> Îles Vierges britanniques  </option>
            <option value="VI"> Iles Vierges Américaines  </option>
            <option value="WF"> Wallis et Futuna  </option>
            <option value="EH"> Sahara occidental  </option>
            <option value="YE"> Yémen  </option>
            <option value="ZM"> Zambie  </option>
            <option value="ZW"> Zimbabwe  </option>
          </select><span class="select2 select2-container select2-container--default" dir="ltr" ><span class="selection"><span class="select2-selection select2-selection--single" role="combobox" aria-haspopup="true" aria-expanded="false" tabindex="0" aria-labelledby="select2-country-qc-container"><span class="select2-selection__rendered" id="select2-country-qc-container" title="Bangladesh"><span class="select2-selection__clear">×</span>Bangladesh</span><span class="select2-selection__arrow" role="presentation"><b role="presentation"></b></span></span></span><span class="dropdown-wrapper" aria-hidden="true"></span></span>
        </div>
      </div>
      <div class="form-group row">
        <label for="city" class="col-sm-3 col-form-label"> Ville  </label>
        <div class="col-sm-9">
          <input name="city" class="form-control" type="text" placeholder="Ville" id="city" value="" />
        </div>
      </div>
      <div class="form-group row">
        <label for="zip_code" class="col-sm-3 col-form-label"> Code postal  </label>
        <div class="col-sm-9">
          <input name="zip_code" class="form-control" type="text" placeholder="Code postal" id="zip_code" value="" />
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
        <button type="submit" class="btn btn-success w-md m-b-5"> sauver  </button>
      </div>
    </form>
  </div>
);

AddPassanger.propTypes = {};

AddPassanger.defaultProps = {};

export default AddPassanger;
