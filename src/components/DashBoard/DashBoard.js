import React from 'react';
import PropTypes from 'prop-types';
import './DashBoard.css';

const DashBoard = () => (
  <div class="col-md-12">
    <div class="card">
      <div class="card-header">
        <strong class="card-title">Tableau de bord</strong>
      </div>
      <div class="card-body">
        <div class="row">
          <div class="col-lg-3 col-md-6">
            <div class="card">
              <div class="card-body">
                <div class="stat-widget-five">
                  <div class="stat-icon dib flat-color-1">
                    <i class="pe-7s-cash"></i>
                  </div>
                  <div class="stat-content">
                    <div class="text-left dib">
                      <div class="stat-text">
                        $<span class="count">2</span>
                      </div>
                      <div class="stat-heading">Résérvations</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="col-lg-3 col-md-6">
            <div class="card">
              <div class="card-body">
                <div class="stat-widget-five">
                  <div class="stat-icon dib flat-color-2">
                    <i class="pe-7s-cart"></i>
                  </div>
                  <div class="stat-content">
                    <div class="text-left dib">
                      <div class="stat-text">
                        <span class="count">3435</span>
                      </div>
                      <div class="stat-heading">Destination</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="col-lg-3 col-md-6">
            <div class="card">
              <div class="card-body">
                <div class="stat-widget-five">
                  <div class="stat-icon dib flat-color-3">
                    <i class="pe-7s-browser"></i>
                  </div>
                  <div class="stat-content">
                    <div class="text-left dib">
                      <div class="stat-text">
                        <span class="count">122</span>
                      </div>
                      <div class="stat-heading">Routes</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="col-lg-3 col-md-6">
            <div class="card">
              <div class="card-body">
                <div class="stat-widget-five">
                  <div class="stat-icon dib flat-color-4">
                    <i class="pe-7s-users"></i>
                  </div>
                  <div class="stat-content">
                    <div class="text-left dib">
                      <div class="stat-text">
                        <span class="count">1223</span>
                      </div>
                      <div class="stat-heading">Voyage</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

DashBoard.propTypes = {};

DashBoard.defaultProps = {};

export default DashBoard;
