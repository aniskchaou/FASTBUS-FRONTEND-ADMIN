import React from 'react';
import PropTypes from 'prop-types';
import './Content.css';
import { Route } from "react-router-dom"
import Configuration from '../Configuration/Configuration';
import DashBoard from '../DashBoard/DashBoard';
import Assign from '../Assign/Assign'
import Booking from '../Booking/Booking'
import Destination from '../Destination/Destination'
import HR from '../HR/HR'
import Offer from '../Offer/Offer'
import Passanger from '../Passanger/Passanger'
import Price from '../Price/Price'
import Routes from '../Routes/Routes'
import Schedule from '../Schedule/Schedule'
import Vehicule from '../Vehicule/Vehicule'
import Travel from '../Travel/Travel'
const Content = () => (
  <div className="col-md-12">
    
        <Route exact path="/" component={DashBoard} />
        <Route exact path="/dashboard" component={DashBoard} />
        <Route exact path="/assign" component={Assign} />
        <Route exact path="/booking" component={Booking} />
        <Route exact path="/destination" component={Destination} />
        <Route exact path="/hr" component={HR} />
        <Route exact path="/offer" component={Offer} />
        <Route exact path="/passanger" component={Passanger} />
        <Route exact path="/price" component={Price} />
        <Route exact path="/route" component={Routes} />
        <Route exact path="/schedule" component={Schedule} />
        <Route exact path="/travel" component={Travel} />
        <Route exact path="/vehicule" component={Vehicule} />
        <Route exact path="/configuration" component={Configuration} />


     

  </div>
);

Content.propTypes = {};

Content.defaultProps = {};

export default Content;
