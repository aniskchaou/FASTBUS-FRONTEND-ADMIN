import React from 'react';
import PropTypes from 'prop-types';
import './AddPassanger.css';

const AddPassanger = () => (
  <div className="AddPassanger">
    <form action="https://bus-ticket.bdtask.com/bus_demo_v5/ticket/passenger/form" enctype="multipart/form-data" method="post" accept-charset="utf-8">
<input type="hidden" name="csrf_test_name" value="af61c944c144a453877c302d4296947c"/>
<input type="hidden" name="id" value=""/>
<input type="hidden" name="id_no" value="PRZNI90F"/>
<div class="form-group row">
<label for="name" class="col-sm-3 col-form-label"><font     ><font     >Nom *</font></font></label>
<div class="col-sm-9">
<div class="row">
<div class="col-sm-4">
<input name="firstname" class="form-control" type="text" placeholder="Prénom" id="name" value="" required=""/>
</div>
<div class="col-sm-4">
<input name="middle_name" class="form-control" type="text" placeholder="Prénom (facultatif)" value=""/>
</div>
<div class="col-sm-4">
<input name="lastname" class="form-control" type="text" placeholder="Nom de famille" value=""/>
</div>
</div>
</div>
</div>
<div class="form-group row">
<label for="phone" class="col-sm-3 col-form-label"><font     ><font     >Téléphone</font></font></label>
<div class="col-sm-9">
<input name="phone" class="form-control" type="text" placeholder="Téléphone" id="phone" value=""/>
</div>
</div>
<div class="form-group row">
<label for="email" class="col-sm-3 col-form-label"><font     ><font     >Email *</font></font></label>
<div class="col-sm-9">
<input name="email" class="form-control" type="email" placeholder="Email" id="email" value="" required=""/>
</div>
</div>
<div class="form-group row">
<label for="password" class="col-sm-3 col-form-label"><font     ><font     >Mot de passe *</font></font></label>
<div class="col-sm-9">
<input name="password" class="form-control" type="password" placeholder="Mot de passe" id="password"/>
<input name="old_password" class="form-control" type="hidden" placeholder="Mot de passe" id="old_password" value=""/>
</div>
</div>
<div class="form-group row">
<label for="email" class="col-sm-3 col-form-label"><font     ><font     >Carte d'identité *</font></font></label>
<div class="col-sm-9">
<input name="nid" class="form-control" type="text" placeholder="carte d'identité" id="nid" value="" required=""/>
</div>
</div>
<div class="form-group row">
<label for="image" class="col-sm-3 col-form-label"><font     ><font     >Image</font></font></label>
<div class="col-sm-9">
<div class="row">
<div class="col-sm-2">
<img src="https://bus-ticket.bdtask.com/bus_demo_v5/./assets/img/icons/default.jpg" class="img-thumbnail" width="125" height="100"/>
</div>
<div class="col-sm-10">
<input type="file" name="image" id="image" aria-describedby="fileHelp"/>
<small id="fileHelp" class="text-muted"></small>
</div>
</div>
</div>
<input type="hidden" name="old_image" value=""/>
</div>
<div class="form-group row">
<label for="address_line_1" class="col-sm-3 col-form-label"><font     ><font     >Adresse 1</font></font></label>
<div class="col-sm-9">
<input name="address_line_1" class="form-control" type="text" placeholder="Adresse 1" id="address_line_1" value=""/>
</div>
</div>
<div class="form-group row">
<label for="address_line_2" class="col-sm-3 col-form-label"><font     ><font     >Adresse Ligne 2</font></font></label>
<div class="col-sm-9">
<input name="address_line_2" class="form-control" type="text" placeholder="Adresse Ligne 2" id="address_line_2" value=""/>
</div>
</div>
<div class="form-group row">
<label for="country" class="col-sm-3 col-form-label"><font     ><font     >Pays</font></font></label>
<div class="col-sm-9">
<select name="country" class="form-control select2-hidden-accessible" tabindex="-1" aria-hidden="true">
<option value=""><font     ><font     >Sélectionnez une option</font></font></option>
<option value="AF"><font     ><font     >Afghanistan</font></font></option>
<option value="AL"><font     ><font     >Albanie</font></font></option>
<option value="DZ"><font     ><font     >Algérie</font></font></option>
<option value="AS"><font     ><font     >Samoa américaines</font></font></option>
<option value="AD"><font     ><font     >Andorre</font></font></option>
<option value="AO"><font     ><font     >Angola</font></font></option>
<option value="AI"><font     ><font     >Anguilla</font></font></option>
<option value="AQ"><font     ><font     >Antarctique</font></font></option>
<option value="AG"><font     ><font     >Antigua-et-Barbuda</font></font></option>
<option value="AR"><font     ><font     >Argentine</font></font></option>
<option value="AM"><font     ><font     >Arménie</font></font></option>
<option value="AW"><font     ><font     >Aruba</font></font></option>
<option value="AU"><font     ><font     >Australie</font></font></option>
<option value="AT"><font     ><font     >L'Autriche</font></font></option>
<option value="AZ"><font     ><font     >Azerbaïdjan</font></font></option>
<option value="BS"><font     ><font     >Bahamas</font></font></option>
<option value="BH"><font     ><font     >Bahreïn</font></font></option>
<option value="BD" selected="selected"><font     ><font     >Bangladesh</font></font></option>
<option value="BB"><font     ><font     >Barbade</font></font></option>
<option value="BY"><font     ><font     >Biélorussie</font></font></option>
<option value="BE"><font     ><font     >Belgique</font></font></option>
<option value="BZ"><font     ><font     >Belize</font></font></option>
<option value="BJ"><font     ><font     >Bénin</font></font></option>
<option value="BM"><font     ><font     >Bermudes</font></font></option>
<option value="BT"><font     ><font     >Bhoutan</font></font></option>
<option value="BO"><font     ><font     >Bolivie</font></font></option>
<option value="BA"><font     ><font     >Bosnie Herzégovine</font></font></option>
<option value="BW"><font     ><font     >Botswana</font></font></option>
<option value="BV"><font     ><font     >Île Bouvet</font></font></option>
<option value="BR"><font     ><font     >Brésil</font></font></option>
<option value="IO"><font     ><font     >Territoire britannique de l'océan Indien</font></font></option>
<option value="BN"><font     ><font     >Brunei Darussalam</font></font></option>
<option value="BG"><font     ><font     >Bulgarie</font></font></option>
<option value="BF"><font     ><font     >Burkina Faso</font></font></option>
<option value="BI"><font     ><font     >Burundi</font></font></option>
<option value="KH"><font     ><font     >Cambodge</font></font></option>
<option value="CM"><font     ><font     >Cameroun</font></font></option>
<option value="CA"><font     ><font     >Canada</font></font></option>
<option value="CV"><font     ><font     >Cap-Vert</font></font></option>
<option value="KY"><font     ><font     >Îles Caïmans</font></font></option>
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
<option value="SB"><font     ><font     >îles Salomon</font></font></option>
<option value="SO"><font     ><font     >Somalie</font></font></option>
<option value="ZA"><font     ><font     >Afrique du Sud</font></font></option>
<option value="GS"><font     ><font     >Géorgie du Sud et îles Sandwich du Sud</font></font></option>
<option value="ES"><font     ><font     >Espagne</font></font></option>
<option value="LK"><font     ><font     >Sri Lanka</font></font></option>
<option value="SD"><font     ><font     >Soudan</font></font></option>
<option value="SR"><font     ><font     >Suriname</font></font></option>
<option value="SJ"><font     ><font     >Svalbard et Jan Mayen</font></font></option>
<option value="SZ"><font     ><font     >Swaziland</font></font></option>
<option value="SE"><font     ><font     >Suède</font></font></option>
<option value="CH"><font     ><font     >Suisse</font></font></option>
<option value="SY"><font     ><font     >République arabe syrienne</font></font></option>
<option value="TW"><font     ><font     >Taiwan, Province de Chine</font></font></option>
<option value="TJ"><font     ><font     >Tadjikistan</font></font></option>
<option value="TZ"><font     ><font     >Tanzanie, République-Unie de</font></font></option>
<option value="TH"><font     ><font     >Thaïlande</font></font></option>
<option value="TL"><font     ><font     >Timor-Leste</font></font></option>
<option value="TG"><font     ><font     >Aller</font></font></option>
<option value="TK"><font     ><font     >Tokelau</font></font></option>
<option value="TO"><font     ><font     >Tonga</font></font></option>
<option value="TT"><font     ><font     >Trinité-et-Tobago</font></font></option>
<option value="TN"><font     ><font     >Tunisie</font></font></option>
<option value="TR"><font     ><font     >dinde</font></font></option>
<option value="TM"><font     ><font     >Turkménistan</font></font></option>
<option value="TC"><font     ><font     >îles Turques-et-Caïques</font></font></option>
<option value="TV"><font     ><font     >Tuvalu</font></font></option>
<option value="UG"><font     ><font     >Ouganda</font></font></option>
<option value="UA"><font     ><font     >Ukraine</font></font></option>
<option value="AE"><font     ><font     >Emirats Arabes Unis</font></font></option>
<option value="GB"><font     ><font     >Royaume-Uni</font></font></option>
<option value="US"><font     ><font     >États Unis</font></font></option>
<option value="UM"><font     ><font     >Îles mineures éloignées des États-Unis</font></font></option>
<option value="UY"><font     ><font     >Uruguay</font></font></option>
<option value="UZ"><font     ><font     >Ouzbékistan</font></font></option>
<option value="VU"><font     ><font     >Vanuatu</font></font></option>
<option value="VE"><font     ><font     >Venezuela</font></font></option>
<option value="VN"><font     ><font     >Viet Nam</font></font></option>
<option value="VG"><font     ><font     >Îles Vierges britanniques</font></font></option>
<option value="VI"><font     ><font     >Iles Vierges Américaines</font></font></option>
<option value="WF"><font     ><font     >Wallis et Futuna</font></font></option>
<option value="EH"><font     ><font     >Sahara occidental</font></font></option>
<option value="YE"><font     ><font     >Yémen</font></font></option>
<option value="ZM"><font     ><font     >Zambie</font></font></option>
<option value="ZW"><font     ><font     >Zimbabwe</font></font></option>
</select><span class="select2 select2-container select2-container--default" dir="ltr" ><span class="selection"><span class="select2-selection select2-selection--single" role="combobox" aria-haspopup="true" aria-expanded="false" tabindex="0" aria-labelledby="select2-country-qc-container"><span class="select2-selection__rendered" id="select2-country-qc-container" title="Bangladesh"><span class="select2-selection__clear">×</span>Bangladesh</span><span class="select2-selection__arrow" role="presentation"><b role="presentation"></b></span></span></span><span class="dropdown-wrapper" aria-hidden="true"></span></span>
</div>
</div>
<div class="form-group row">
<label for="city" class="col-sm-3 col-form-label"><font     ><font     >Ville</font></font></label>
<div class="col-sm-9">
<input name="city" class="form-control" type="text" placeholder="Ville" id="city" value=""/>
</div>
</div>
<div class="form-group row">
<label for="zip_code" class="col-sm-3 col-form-label"><font     ><font     >Code postal</font></font></label>
<div class="col-sm-9">
<input name="zip_code" class="form-control" type="text" placeholder="Code postal" id="zip_code" value=""/>
</div>
</div>
<div class="form-group row">
<label for="status" class="col-sm-3 col-form-label"><font     ><font     >Statut *</font></font></label>
<div class="col-sm-9">
<label class="radio-inline">
<input type="radio" name="status" value="1" id="status"/><font     ><font     >
actif
</font></font></label>
<label class="radio-inline">
<input type="radio" name="status" value="0" id="status"/><font     ><font     >
Inactif
</font></font></label>
</div>
</div>
<div class="form-group text-right">
<button type="reset" class="btn btn-primary w-md m-b-5"><font     ><font     >Réinitialiser</font></font></button>
<button type="submit" class="btn btn-success w-md m-b-5"><font     ><font     >sauver</font></font></button>
</div>
</form>
  </div>
);

AddPassanger.propTypes = {};

AddPassanger.defaultProps = {};

export default AddPassanger;
