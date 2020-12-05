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
                   
                    
                  </tr>
                  </thead>
                  <tbody>
                  <tr>
                    <td>14:00</td>
                    <td>16:00</td>
                    <th>2</th>
                   
                  </tr></tbody>
    </table>
  </div>
</div>
);

Schedule.propTypes = {};

Schedule.defaultProps = {};

export default Schedule;
