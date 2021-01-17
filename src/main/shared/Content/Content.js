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
