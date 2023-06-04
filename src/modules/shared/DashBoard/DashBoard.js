import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import './DashBoard.css';
import { drawChart } from './../../../libraries/chart/chart';
import Travel from '../../travel/Travel/Travel';


const DashBoard = () => {

  useEffect(() => {
    // Runs ONCE after initial rendering
    drawChart()

  }, []);


  return (

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
                    <span class="count">2</span>
                  </div>
                  <div class="stat-heading">Bookings</div>
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
                    <span class="count">34</span>
                  </div>
                  <div class="stat-heading">Destinations</div>
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
                    <span class="count">12</span>
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
                    <span class="count">13</span>
                  </div>
                  <div class="stat-heading">Travels</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/*       <div className="col-md-6">
        <div className="card">
          <div className="card-body">

            <h4 className="mb-3">Réservations</h4>
            <canvas id="team-chart" height="225" width="450" className="book-chart chartjs-render-monitor"></canvas>
          </div>
        </div>
      </div>

      <div className="col-md-6">
        <div className="card">
          <div className="card-body">

            <h4 className="mb-3">Passagers</h4>
            <canvas id="team-chart" height="225" width="450" className="passanger-chart chartjs-render-monitor"></canvas>
          </div>
        </div>
      </div> */}

      <div className="col-md-12">
        <Travel />
      </div>
    </div>

  )
};

DashBoard.propTypes = {};

DashBoard.defaultProps = {};

export default DashBoard;
