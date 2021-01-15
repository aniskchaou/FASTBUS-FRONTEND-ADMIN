import React, { useEffect } from 'react';
import './Vehicule.css';
import AddVehicule from './../AddVehicule/AddVehicule';
import { LoadJS } from './../init';
import EditVehicule from './../EditVehicule/EditVehicule';
import ViewVehicule from './../ViewVehicule/ViewVehicule';

const Vehicule = () => {
  useEffect(() => {
    // Runs ONCE after initial rendering
    LoadJS()
  }, []);
  
  return(
  <div className="card">
    <div className="card-header">
      <strong className="card-title">Véhicules</strong>
    </div>
    <div className="card-body">

      <table id="example1" className="table table-striped table-bordered">
        <thead>
          <tr>
            <th>N enregistrement</th>
            <th>Type</th>
            <th>modele</th>
            <th>Chasssis</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>SEZ2E</td>
            <td>bus</td>
            <td className="badge badge-primary">Toyota Hiace </td>
            <td>aZS1Z-66</td>
            <td>
                        <button  data-toggle="modal" data-target="#edit" type="button" class="btn btn-warning btn-sm"><i class="fas fa-edit"></i></button>
                        <button  type="button" class="btn btn-danger btn-sm" onClick="return confirm('Êtes-vous sûr de vouloir supprimer cet enregistrement ?');"><i class="fas fa-trash-alt"></i></button></td>
          </tr>
          
          <tr>
            <td>E3H3H33</td>
            <td>bus</td>
            <td className="badge badge-primary">MAN SUNSTAR ATOMIC</td>
            <td>35Y4H43334</td>
            <td>
                        <button  data-toggle="modal" data-target="#edit" type="button" class="btn btn-warning btn-sm"><i class="fas fa-edit"></i></button>
                        <button  type="button" class="btn btn-danger btn-sm" onClick="return confirm('Êtes-vous sûr de vouloir supprimer cet enregistrement ?');"><i class="fas fa-trash-alt"></i></button></td>
          </tr>
          
          <tr>
            <td>23T44T42</td>
            <td>bus</td>
            <td className="badge badge-primary">MERCEDES-BENZ Toursimo</td>
            <td>G334EG334</td>
            <td>
                        <button  data-toggle="modal" data-target="#edit" type="button" class="btn btn-warning btn-sm"><i class="fas fa-edit"></i></button>
                        <button  type="button" class="btn btn-danger btn-sm" onClick="return confirm('Êtes-vous sûr de vouloir supprimer cet enregistrement ?');"><i class="fas fa-trash-alt"></i></button></td>
          </tr>
          
          
          </tbody>
          <tfoot>
          <tr>
            <th>N enregistrement</th>
            <th>Type</th>
            <th>modele</th>
            <th>Chasssis</th>
            <th>Actions</th>
          </tr>
        </tfoot>
      </table>
      <button  data-toggle="modal" data-target="#addVehicule" type="button" className="btn btn-success btn-sm">Ajouter</button>
      <div class="modal fade" id="addVehicule" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLongTitle">Modal title</h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
            <AddVehicule/>
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
            <EditVehicule/>
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
           <ViewVehicule/>
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

Vehicule.propTypes = {};

Vehicule.defaultProps = {};

export default Vehicule;
