import React from 'react';

import './Destination.css';

const Destination = () => (
  
<div className="card">
  <div className="card-header">
    <strong className="card-title">Destinations</strong>
  </div>
  <div className="card-body">

    <table id="example1" className="table table-striped table-bordered">
    <thead>
  <tr>
    <th>Nom destination</th>
    <th>description</th>
    <th>Statut</th>
    
  </tr>
  </thead>
  <tbody>
  <tr>
    <td>Pris</td>
    <td>desc</td>
    <td>Actif</td>
   
  </tr></tbody>
    </table>
  </div>
</div>



















  
);

Destination.propTypes = {};

Destination.defaultProps = {};

export default Destination;
