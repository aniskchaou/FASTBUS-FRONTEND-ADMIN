import React, { useEffect, useState } from 'react';

import './Price.css';
import useForceUpdate from 'use-force-update';
import { LoadJS } from '../../../libraries/datatables/datatables';
import AddPrice from './../AddPrice/AddPrice';
import EditPrice from './../EditPrice/EditPrice'
import PriceTestService from '../../../main/mocks/PriceTestService';
import HTTPService from '../../../main/services/HTTPService';
import showMessage from '../../../libraries/messages/messages';
import priceMessage from '../../../main/messages/priceMessage';


const Price = () => {

  const [prices, setPrices] = useState([]);
  const [updatedItem, setUpdatedItem] = useState({});
  const forceUpdate = useForceUpdate();


  useEffect(() => {
    LoadJS()
    retrievePrices()
  }, []);


  const getAll = () => {
    HTTPService.getAll()
      .then(response => {
        setPrices(response.data);
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



  const retrievePrices = () => {
    var prices = PriceTestService.getAll();
    setPrices(prices);
  };

  const resfresh = () => {
    retrievePrices()
    forceUpdate()
  }

  const remove = (e, data) => {
    e.preventDefault();
    var r = window.confirm("Etes-vous sûr que vous voulez supprimer ?");
    if (r) {
      showMessage('Confirmation', priceMessage.delete, 'success')
      PriceTestService.remove(data)
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
        <strong className="card-title">Prix</strong>
      </div>
      <div className="card-body">

        <table id="example1" className="table table-striped table-bordered">
          <thead>
            <tr>
              <th>Nom route</th>
              <th>Type de vehicule</th>
              <th>Prix</th>
              <th>Prix enfant</th>
              <th>Prix Special</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>

            {prices.map(item =>
              <tr>
                <td>{item.route_id}</td>
                <td>{item.vehicle_type_id}</td>
                <td ><span className="badge badge-primary">{item.price}</span></td>
                <td>{item.childere_price} </td>
                <td>{item.special_price} </td>
                <td>
                  <button onClick={e => update(e, item)} type="button" data-toggle="modal" data-target="#edit" class="btn btn-warning btn-sm"><i class="fas fa-edit"></i></button>
                  <button onClick={e => remove(e, prices.indexOf(item))} type="button" class="btn btn-danger btn-sm"><i class="fas fa-trash-alt"></i></button>
                </td>
              </tr>
            )}


          </tbody>
          <tfoot>
            <tr>
              <th>Nom route</th>
              <th>Type de vehicule</th>
              <th>Prix</th>
              <th>Prix enfant</th>
              <th>Prix Special</th>
              <th>Actions</th>
            </tr>
          </tfoot>
        </table>
        <button data-toggle="modal" data-target="#addPrice" type="button" className="btn btn-success btn-sm"><i class="fas fa-plus-circle"></i></button>
        <div class="modal fade" id="addPrice" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
          <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLongTitle">Nouveau</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
                <AddPrice />
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
                <EditPrice price={updatedItem} />
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
                <h5 class="modal-title" id="exampleModalLongTitle">Voir</h5>
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

Price.propTypes = {};

Price.defaultProps = {};

export default Price;
