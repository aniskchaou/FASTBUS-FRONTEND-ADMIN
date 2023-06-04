import React, { useEffect, useRef, useState } from 'react';
import './Offer.css';
import { LoadJS } from '../../../libraries/datatables/datatables';
import EditOffer from '../EditOffer/EditOffer';
import AddOffer from '../AddOffer/AddOffer';
import useForceUpdate from 'use-force-update';
import showMessage from '../../../libraries/messages/messages';
import offerMessage from '../../../main/messages/offerMessage';
import OfferTestService from '../../../main/mocks/OfferTestService';
import HTTPService from '../../../main/services/HTTPService';
import offerHTTPService from '../../../main/services/offerHTTPService';
const Offer = () => {
  const [offers, setOffers] = useState([]);
  const [updatedItem, setUpdatedItem] = useState({});
  const forceUpdate = useForceUpdate();
  const closeButtonEdit = useRef(null);
  const closeButtonAdd = useRef(null);
  const closeModalEdit = (data) => {
    getAll()
    closeButtonEdit.current.click()
  }

  const closeModalAdd = (data) => {
    getAll()
    closeButtonAdd.current.click()
  }



  useEffect(() => {
    LoadJS()
    //retrieveOffers()
    getAll()
  }, []);


  const getAll = () => {
    offerHTTPService.getAllOffer()
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



  const retrieveOffers = async () => {
    //var offers = OfferTestService.getAll();
    await offerHTTPService.getAllOffer().then(data => {
      console.log(data)
      setOffers(data.data);
    })

  };

  const resfresh = () => {
    retrieveOffers()
    //forceUpdate()
  }

  const remove = (e, data) => {
    e.preventDefault();
    var r = window.confirm("Are you sure ?");
    if (r) {
      /*  showMessage('Confirmation', offerMessage.delete, 'success')
       OfferTestService.remove(data) */
      //removeOne(data)
      offerHTTPService.removeOffer(data.id).then(() => {
        resfresh()
      })

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
        <strong className="card-title"><i class="menu-icon fa fa-rss"></i> Offers</strong>
      </div>
      <div className="card-body">
        <button data-toggle="modal" data-target="#addOffer" type="button" className="btn btn-success btn-sm"><i class="fa fa-plus" aria-hidden="true"></i> Create</button>
        <table id="example1" className="table table-striped table-bordered">
          <thead>
            <tr>
              <th>Name</th>
              <th>Start</th>
              <th>End</th>
              <th>Code</th>
              <th>Discount</th>
              <th>Route</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>

            {offers && offers.map(item =>
              <tr>
                <td>{item.name}</td>
                <td>{item.start}</td>
                <td>{item.end}</td>
                <td>{item.code}</td>
                <td> <span className="badge badge-primary"> {item.discount}</span> </td>
                <td>{item.travel}</td>
                <td>
                  <button onClick={e => update(e, item)} type="button" data-toggle="modal" data-target="#edit" class="btn btn-warning btn-sm"><i class="fas fa-edit"></i></button>
                  <button onClick={e => remove(e, item)} type="button" class="btn btn-danger btn-sm"><i class="fas fa-trash-alt"></i></button>
                </td>
              </tr>
            )}




          </tbody>
          <tfoot>
            <tr>
              <th>Name</th>
              <th>Start</th>
              <th>End</th>
              <th>Code</th>
              <th>Discount</th>
              <th>Route</th>
              <th>Actions</th>
            </tr>
          </tfoot>
        </table>

        <div class="modal fade" id="addOffer" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
          <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLongTitle">New</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
                <AddOffer closeModal={closeModalAdd} />
              </div>
              <div class="modal-footer">
                <button ref={closeButtonAdd} type="button" class="btn btn-secondary" data-dismiss="modal" onClick={resfresh} >Close</button>

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
                <EditOffer offer={updatedItem} closeModal={closeModalEdit} />
              </div>
              <div class="modal-footer">
                <button ref={closeButtonEdit} type="button" class="btn btn-secondary" data-dismiss="modal" onClick={resfresh} >Close</button>

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
