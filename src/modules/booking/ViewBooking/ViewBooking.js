import React from 'react';
import PropTypes from 'prop-types';
import './ViewBooking.css';

const ViewBooking = () => (
  <div className="ViewBooking">
    <div class="panel-body" id="PrintMe">
      <div class="ticket-content">
        <div class="table-responsive">
          <table>
            <tbody>
              <tr>
                <td>
                  <div class="ticket-logo">
                    <img src="https://bus-ticket.bdtask.com/bus_demo_v5/application/modules/website/assets/images/icons/4b2915e727770499a6811a7b4f193ce5.png" class="img-responsive" alt="" />
                  </div>
                </td>
                <td >
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="table-responsive">
          <table class="table table-bordered">
            <tbody>
              <tr>
                <td><strong><font  ><font  >Lieu de ramassage:</font></font></strong><font  ><font  > LimbÃƒÂ ©</font></font></td>
                <td><strong><font  ><font  >Lieu de</font></font></strong><font  ><font  > dépôt </font><strong><font  >:</font></strong><font  > Kribi</font></font></td>
                <td><strong><font  ><font  >Date:</font></font></strong><font  ><font  > 17/01/2019 00h00</font></font></td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="passanger-info table-responsive">
          <div class="col-sm-12">
            <table width="100%">
              <tbody><tr>
                <td>
                  <ul class="list-unstyled">
                    <li><strong><font  ><font  >Nom du passager:</font></font></strong><font  ><font  >
                      Meredith a un</font></font></li>
                    <li><strong><font  ><font  >Identifiant national:</font></font></strong><font  ><font  >
                      123</font></font></li>
                    <li><strong><font  ><font  >Téléphone:</font></font></strong><font  ><font  >
                      0123456789</font></font></li>
                    <li>
                      <strong><font  ><font  >ID du passager. </font><font  >:</font></font></strong><font  ><font  >
                        P52ZC05X</font></font></li>
                    <li>
                    </li><li><strong><font  ><font  >Installations :</font></font></strong>
                      <ul class="list-inline">
                        <li><font  ><font  >√ Collations</font></font></li><li><font  ><font  >√ WiFi gratuit</font></font></li> </ul>
                    </li>
                  </ul>
                </td>
                <td>
                  <dl class="list-unstyled text-right">
                    <li><strong><font  ><font  >ID de réservation. </font><font  >:</font></font></strong><font  ><font  >
                      BA3JE0Y9</font></font></li>
                    <li><strong><font  ><font  >Nom du</font></font></strong><font  ><font  >
                      parcours </font><strong><font  >:</font></strong><font  > Bafoussam-Douala</font></font></li>
                    <li>
                      <strong><font  ><font  >ID de voyage. </font><font  >:</font></font></strong><font  ><font  >
                        6</font></font></li>
                    <strong><font  ><font  >Statut du paiement:</font></font></strong><font  ><font  >
                      payé
</font></font></dl>
                </td>
              </tr>
              </tbody></table>
          </div>
        </div>
        <div class="row">
          <div class="col-sm-12">
            <div class="table-responsive">
              <table class="table table-bordered">
                <thead>
                  <tr>
                    <th><font  ><font  >Nom du siège</font></font></th>
                    <th><font  ><font  >Adulte</font></font></th>
                    <th><font  ><font  >Enfant</font></font></th>
                    <th><font  ><font  >Spécial</font></font></th>
                    <th class="text-right"><font  ><font  >Montant</font></font></th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><font  ><font  >C2, D2, D1, E1, </font></font></td>
                    <td class="text-right"><font  ><font  >4</font></font></td>
                    <td class="text-right"><font  ><font  >0</font></font></td>
                    <td class="text-right"><font  ><font  >0</font></font></td>
                    <th class="text-right"><font  ><font  >3680 </font></font></th>
                  </tr>
                </tbody>
                <tfoot>
                  <tr>

                    <th colspan="4" class="text-right"><font  ><font  >Remise</font></font></th>
                    <th class="text-right"><font  ><font  >0 </font></font></th>
                  </tr>
                  <tr>
                    <th colspan="4" class="text-right"><font  ><font  >somme finale</font></font></th>
                    <th class="text-right"><font  ><font  >3680 </font></font></th>
                  </tr>
                </tfoot>
              </table>
              <table class="table table-responsive">
                <tbody>
                  <tr>
                    <td class="small"><font  ><font  >** Ceci est une copie générée par ordinateur. </font><font  >Aucune signature requise.</font></font></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

ViewBooking.propTypes = {};

ViewBooking.defaultProps = {};

export default ViewBooking;
