import React from 'react';
import './Content.css';
import { Route } from "react-router-dom"
import Configuration from '../../../modules/shared/Configuration/Configuration';

import Assign from '../../../modules/assign/Assign/Assign'
import Booking from '../../../modules/booking/Booking/Booking'
import Destination from '../../../modules/destination/Destination/Destination'
import HR from '../../../modules/hr/HR/HR'
import Offer from '../../../modules/offer/Offer/Offer'
import Passanger from '../../../modules/passanger/Passanger/Passanger'
import Price from '../../../modules/price/Price/Price'
import Routes from '../../../modules/route/Routes/Routes'
import Schedule from '../../../modules/schedule/Schedule/Schedule'
import Vehicule from '../../../modules/vehicule/Vehicule/Vehicule'
import Travel from '../../../modules/travel/Travel/Travel'
import DashBoard from '../../../modules/shared/DashBoard/DashBoard';
import AddTravel from '../../../modules/travel/AddTravel/AddTravel';
import AddOffer from '../../../modules/offer/AddOffer/AddOffer';
import AddDestination from '../../../modules/destination/AddDestination/AddDestination';
import AddAssign from '../../../modules/assign/AddAssign/AddAssign';
import User from '../../config/user';
const Content = () => (
  <div className="col-md-12" style={{ display: (User.CONNECTED_USER ? 'block' : 'none') }}>

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
    <Route exact path="/add-travel" component={AddTravel} />
    <Route exact path="/add-offer" component={AddOffer} />
    <Route exact path="/add-destination" component={AddDestination} />
    <Route exact path="/add-assign" component={AddAssign} />




  </div>
);

Content.propTypes = {};

Content.defaultProps = {};

export default Content;
