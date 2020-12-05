import React from 'react';
import './Routes.css';

const Routes = () => (
  <div className="card">
    <div className="card-header">
      <strong className="card-title">Routes</strong>
    </div>
    <div className="card-body">

      <table id="example1" className="table table-striped table-bordered">
        <thead>
          <tr>
            <th>Nom Route</th>
            <th>Point de depart</th>
            <th>Point final</th>
            <th>Point d'arret</th>
            <th>Distance</th>
            <th>Temps Approximatif</th>
            <th>Siege enfant </th>
            <th>Siege principale</th>
            <th>Statut</th>

          </tr>
        </thead>
        <tbody>
          <tr>
            <td>AZDE</td>
            <td>nice</td>
            <td>paris</td>
            <td>lyon</td>
            <td>22</td>
            <td>22</td>
            <td>3</td>
            <td>1</td>
            <td>Actif</td>

          </tr></tbody>
      </table>
    </div>
  </div>
);

Routes.propTypes = {};

Routes.defaultProps = {};

export default Routes;
