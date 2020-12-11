import React from 'react';
import PropTypes from 'prop-types';
import './Schedule.css';

const Schedule = () => (
  <div className="card">
  <div className="card-header">
    <strong className="card-title">Horaires</strong>
  </div>
  <div className="card-body">

    <table id="example1" className="table table-striped table-bordered">
    <thead>
                  <tr>
                    <th>Date debut</th>
                    <th>Date fin</th>
                    <th>Durée</th>
                    <th>Actions</th>
                    
                  </tr>
                  </thead>
                  <tbody>
                  <tr>
                    <td>14:00</td>
                    <td>16:00</td>
                    <th>2</th>
                    <td><button disabled type="button" className="btn btn-primary btn-sm">voir</button>
              <button disabled type="button" className="btn btn-warning btn-sm">editer</button>
              <button disabled type="button" className="btn btn-danger btn-sm">Supprimer</button></td>
                  </tr></tbody>
    </table>
    <button  type="button" className="btn btn-success btn-sm">Ajouter</button>

  </div>
</div>
);

Schedule.propTypes = {};

Schedule.defaultProps = {};

export default Schedule;
