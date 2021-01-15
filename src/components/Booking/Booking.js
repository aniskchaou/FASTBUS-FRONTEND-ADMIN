import React, { useEffect } from 'react';
import './Booking.css';
import AddBooking from './../AddBooking/AddBooking';
import { LoadJS } from './../init';
import ViewBooking from './../ViewBooking/ViewBooking';
import EditBooking from './../EditBooking/EditBooking';

const Booking = () => {
  useEffect(() => {
    // Runs ONCE after initial rendering
    LoadJS()
    
  }, []);
  
  return(
  <div className="card">
    <div className="card-header">
      <strong className="card-title">Réservations</strong>
    </div>
    <div className="card-body">

      <table id="example1" className="table table-striped table-bordered">
        <thead>
          <tr>
            <th>Date reservation</th>
            <th>Nom de passager</th>
            <th>Nom route</th>
            <th>siege</th>
            <th>Prix</th>
            <th>Numero siege</th>
            <th>Type paiement</th>
            <th>Statut</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>3/1/2020</td>
            <td>Orson Brasseur</td>
            <td>33D24F34</td>
            <td>2A</td>
            <td className="badge badge-primary">22$</td>
            <td>222</td>
            <td>Virement bancaire</td>
            <td className="badge badge-success">Active</td>
            <td><button  data-toggle="modal" data-target="#view" type="button" class="btn btn-primary btn-sm"><i class="fas fa-address-book"></i></button>
                        <button  data-toggle="modal" data-target="#edit" type="button" class="btn btn-warning btn-sm"><i class="fas fa-edit"></i></button>
                        <button  type="button" class="btn btn-danger btn-sm" onClick="return confirm('Êtes-vous sûr de vouloir supprimer cet enregistrement ?');"><i class="fas fa-trash-alt"></i></button></td>
          </tr>



          <tr>
            <td>23/5/2020</td>
            <td>Raymond Rhéaume</td>
            <td>3322D23D</td>
            <td>2B</td>
            <td className="badge badge-primary">12$</td>
            <td>22</td>
            <td>Virement bancaire</td>
            <td className="badge badge-success">Active</td>
            <td><button  data-toggle="modal" data-target="#view" type="button" class="btn btn-primary btn-sm"><i class="fas fa-address-book"></i></button>
                        <button  data-toggle="modal" data-target="#edit" type="button" class="btn btn-warning btn-sm"><i class="fas fa-edit"></i></button>
                        <button  type="button" class="btn btn-danger btn-sm" onClick="return confirm('Êtes-vous sûr de vouloir supprimer cet enregistrement ?');"><i class="fas fa-trash-alt"></i></button></td>
          </tr>

         
          
          
          
          
          </tbody>
          <tfoot>
          <tr>
            <th>Date reservation</th>
            <th>Nom de passager</th>
            <th>Nom route</th>
            <th>siege</th>
            <th>Prix</th>
            <th>Numero siege</th>
            <th>Type paiement</th>
            <th>Statut</th>
            <th>Actions</th>
          </tr>
        </tfoot>
     
      </table>
      <button  type="button" data-toggle="modal" data-target="#addBooking" className="btn btn-success btn-sm">Ajouter</button>
      <div class="modal fade" id="addBooking" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLongTitle">Modal title</h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
            <AddBooking/>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
              <button type="button" class="btn btn-primary">Save changes</button>
            </div>
          </div>
        </div>
      </div>

      <div class="modal fade" id="edit" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLongTitle">Modal title</h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
            <EditBooking/>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
              <button type="button" class="btn btn-primary">Save changes</button>
            </div>
          </div>
        </div>
      </div>

      <div class="modal fade" id="view" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLongTitle">Modal title</h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
           <ViewBooking/>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
              <button type="button" class="btn btn-primary">Save changes</button>
            </div>
          </div>
        </div>
      </div>


    </div>
  </div>
)};

Booking.propTypes = {};

Booking.defaultProps = {};

export default Booking;
