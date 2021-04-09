import React, { useEffect, useState } from 'react';
import './Offer.css';
import { LoadJS } from '../../../libraries/datatables/datatables';
import EditOffer from '../EditOffer/EditOffer';
import AddOffer from '../AddOffer/AddOffer';
import useForceUpdate from 'use-force-update';
import showMessage from '../../../libraries/messages/messages';
import offerMessage from '../../../main/messages/offerMessage';
import OfferTestService from '../../../main/mocks/OfferTestService';
import HTTPService from '../../../main/services/HTTPService';

const Offer = () => {
  const [offers, setOffers] = useState([]);
  const [updatedItem, setUpdatedItem] = useState({});
  const forceUpdate = useForceUpdate();


  useEffect(() => {
    LoadJS()
    retrieveOffers()
  }, []);


  const getAll = () => {
    HTTPService.getAll()
      .then(response => {
        setOffers(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  };

  const removeOne = (data) => {
    HTTPService.remove(data)
      .then(response => {

      })
      .catch(e => {

      });
  }



  const retrieveOffers = () => {
    var offers = OfferTestService.getAll();
    setOffers(offers);
  };

  const resfresh = () => {
    retrieveOffers()
    forceUpdate()
  }

  const remove = (e, data) => {
    e.preventDefault();
    var r = window.confirm("Etes-vous sûr que vous voulez supprimer ?");
    if (r) {
      showMessage('Confirmation', offerMessage.delete, 'success')
      OfferTestService.remove(data)
      //removeOne(data)
      resfresh()
    }

  }

  const update = (e, data) => {
    e.preventDefault();
    setUpdatedItem(data)
    resfresh()
  }


  return (
    <div className="card">
      <div className="card-header">
        <strong className="card-title">Offre</strong>
      </div>
      <div className="card-body">

        <table id="example1" className="table table-striped table-bordered">
          <thead>
            <tr>
              <th>Nom offre</th>
              <th>Date debut</th>
              <th>Date fin</th>
              <th>Code offre</th>
              <th>Remise</th>
              <th>Nom de route</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>

            {offers.map(item =>
              <tr>
                <td>{item.offer_name}</td>
                <td>{item.offer_start_date}</td>
                <td>{item.offer_end_date}</td>
                <td>{item.offer_code}</td>
                <td> <span className="badge badge-primary"> {item.offer_discount}</span> </td>
                <td>{item.offer_name}</td>
                <td>
                  <button onClick={e => update(e, item)} type="button" data-toggle="modal" data-target="#edit" class="btn btn-warning btn-sm"><i class="fas fa-edit"></i></button>
                  <button onClick={e => remove(e, offers.indexOf(item))} type="button" class="btn btn-danger btn-sm"><i class="fas fa-trash-alt"></i></button>
                </td>
              </tr>
            )}




          </tbody>
          <tfoot>
            <tr>
              <th>Nom offre</th>
              <th>Date debut</th>
              <th>Date fin</th>
              <th>Code offre</th>
              <th>Remise</th>
              <th>Nom de route</th>
              <th>Actions</th>
            </tr>
          </tfoot>
        </table>
        <button data-toggle="modal" data-target="#addOffer" type="button" className="btn btn-success btn-sm">Ajouter</button>
        <div class="modal fade" id="addOffer" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
          <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLongTitle">Nouveau</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
                <AddOffer />
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-dismiss="modal" onClick={resfresh} >Fermer</button>

              </div>
            </div>
          </div>
        </div>

        <div class="modal fade" id="edit" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
          <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLongTitle">Edit</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
                <EditOffer offer={updatedItem} />
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-dismiss="modal" onClick={resfresh} >Fermer</button>

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

              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-dismiss="modal" onClick={resfresh} >Fermer</button>

              </div>
            </div>
          </div>
        </div>


      </div>
    </div>
  )
};

Offer.propTypes = {};

Offer.defaultProps = {};

export default Offer;
