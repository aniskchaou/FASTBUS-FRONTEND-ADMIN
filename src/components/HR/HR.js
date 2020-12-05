import React from 'react';
import PropTypes from 'prop-types';
import './HR.css';

const HR = () => (
  <div className="card">
  <div className="card-header">
    <strong className="card-title">Ressource Humaines</strong>
  </div>
  <div className="card-body">

    <table id="example1" className="table table-striped table-bordered">
    <thead>
                  <tr>
                    <th>Nom voyage</th>
                    <th>No enregistrement</th>
                    <th>Nom de la route</th>
                    <th>Nom de conducteur</th>
                    <th>Statut</th>
                  </tr>
                  </thead>
                  <tbody>
                  <tr>
                    <td>3EE3</td>
                    <td>223S2</td>
                    <td>3E23</td>
                    <td>Anis</td>
                    <td>Actif</td>
                   
                  </tr></tbody>
    </table>
  </div>
</div>
);

HR.propTypes = {};

HR.defaultProps = {};

export default HR;
