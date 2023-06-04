import React, { useEffect, useRef, useState } from 'react';
import './Assign.css';
import { LoadJS } from '../../../libraries/datatables/datatables';
import EditAssign from '../EditAssign/EditAssign';
import AddAssign from '../AddAssign/AddAssign';
import useForceUpdate from 'use-force-update';
import showMessage from '../../../libraries/messages/messages';
import assignMessage from '../../../main/messages/assignMessage';
import AssignTestService from '../../../main/mocks/AssignTestService';
import assignHTTPService from '../../../main/services/assignHTTPService';


const Assign = () => {
  const [assigns, setAssigns] = useState([]);
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
    retrieveAssigns()
  }, []);


  const getAll = () => {
    assignHTTPService.getAllAssign()
      .then(response => {
        setAssigns(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  };

  const removeOne = (data) => {

  }



  const retrieveAssigns = () => {
    getAll()
    //var assigns = AssignTestService.getAll();
    //setAssigns(assigns);
  };

  const resfresh = () => {
    retrieveAssigns()
    //forceUpdate()
  }

  const remove = (e, data) => {
    e.preventDefault();
    var r = window.confirm("Are you sure ?");
    if (r) {
      //showMessage('Confirmation', assignMessage.delete, 'success')
      /*  AssignTestService.remove(data)
       //removeOne(data)
       resfresh() */
      assignHTTPService.removeAssign(data.id).then(() => {
        getAll()
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
        <strong className="card-title"><i class="menu-icon fa fa-address-card"></i> Assignements</strong>
      </div>
      <div className="card-body">
        <button data-toggle="modal" data-target="#addAssign" type="button" className="btn btn-success btn-sm"><i class="fa fa-plus" aria-hidden="true"></i> Create</button>
        <table id="example1" className="table table-striped table-bordered">
          <thead>
            <tr>
              <th>Travel</th>
              <th>Registration</th>
              <th>Date</th>
              <th>Driver</th>

              <th>Actions</th>
            </tr>
          </thead>
          <tbody>

            {assigns.map(item =>
              <tr>
                <td>{item.travel}</td>
                <td ><span className="badge badge-primary">{item.vehicule}</span></td>
                <td>{item.date}</td>
                <td>{item.driver}</td>

                <td>
                  <button onClick={e => update(e, item)} type="button" data-toggle="modal" data-target="#edit" class="btn btn-warning btn-sm"><i class="fas fa-edit"></i></button>
                  <button onClick={e => remove(e, item)} type="button" class="btn btn-danger btn-sm"><i class="fas fa-trash-alt"></i></button>
                </td>

              </tr>
            )}
          </tbody>
          <tfoot>
            <tr>
              <th>Travel</th>
              <th>Registration</th>
              <th>Date</th>
              <th>Driver</th>

              <th>Actions</th>
            </tr>
          </tfoot>
        </table>



        <div class="modal fade" id="addAssign" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
          <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLongTitle">New</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
                <AddAssign closeModal={closeModalAdd} />
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
                <EditAssign assign={updatedItem} closeModal={closeModalEdit} />
              </div>
              <div class="modal-footer">
                <button ref={closeButtonEdit} type="button" class="btn btn-secondary" data-dismiss="modal" onClick={resfresh} >Close</button>

              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
};

Assign.propTypes = {};

Assign.defaultProps = {};

export default Assign;
