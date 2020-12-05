import React from 'react';
import './Offer.css';

const Offer = () => (
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
            <td>Nom de route</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>3EE3</td>
            <td>22/10/2020</td>
            <td>24/10/2020</td>
            <td>13E2</td>
            <td>21</td>
            <td>AZAZAD</td>

          </tr></tbody>
      </table>
    </div>
  </div>
);

Offer.propTypes = {};

Offer.defaultProps = {};

export default Offer;
