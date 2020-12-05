import React from 'react';
import PropTypes from 'prop-types';
import './Price.css';

const Price = () => (
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
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>3EE3</td>
            <td>bus</td>
            <td>213</td>
            <td>21</td>
            <td>23</td>

          </tr></tbody>
      </table>
    </div>
  </div>
);

Price.propTypes = {};

Price.defaultProps = {};

export default Price;
