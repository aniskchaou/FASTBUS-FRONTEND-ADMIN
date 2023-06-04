import React from 'react';
import './Navigation.css';
import { NavLink } from "react-router-dom"
import User from '../../config/user';
class Navigation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (


      <aside id="left-panel" className="left-panel" style={{ display: (User.CONNECTED_USER ? 'block' : 'none') }}>
        <nav className="navbar navbar-expand-sm navbar-default">

          <div id="main-menu" className="main-menu collapse navbar-collapse">
            <ul className="nav navbar-nav">
              <li>
                <NavLink activeClassName="activeLink" to="/dashboard"><i className="menu-icon fa fa-laptop"></i>Dashboard </NavLink>
              </li>

              <li class="menu-item-has-children dropdown"><a href="#" class="dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <i className="menu-icon fa fa-bus"></i>Vehicules</a>
                <ul class="sub-menu children dropdown-menu">
                  {/*  <li><NavLink activeClassName="activeLink" to="/vehicule-type">Vehicule Types </NavLink></li> */}
                  <li><NavLink activeClassName="activeLink" to="/vehicule">Vehicules</NavLink></li>
                  {/*   <li><NavLink activeClassName="activeLink" to="/seat">Seats</NavLink></li> */}
                  {/* <li><NavLink activeClassName="activeLink" to="/facility">Facilities</NavLink></li> */}

                </ul>
              </li>

              <li class="menu-item-has-children dropdown"><a href="#" class="dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <i class="menu-icon fa fa-suitcase"></i>Travels</a>
                <ul class="sub-menu children dropdown-menu">
                  <li><NavLink activeClassName="activeLink" to="/travel">Trips</NavLink></li>
                  {/*  <li> <NavLink activeClassName="activeLink" to="/trip-type">Trip Types</NavLink></li> */}
                  <li><NavLink activeClassName="activeLink" to="/station">Stations</NavLink></li>
                </ul>
              </li>


              <li>
                <NavLink activeClassName="activeLink" to="/driver"><i className="menu-icon fa fa-male "></i>Drivers</NavLink>
              </li>
              <li>
                <NavLink activeClassName="activeLink" to="/route"><i className="menu-icon fa fa-route"></i>Routes </NavLink>
              </li>
              <li>
                <NavLink activeClassName="activeLink" to="/assign"><i className="menu-icon fa fa-address-card"></i>Assignements </NavLink>
              </li>
              <li>
                <NavLink activeClassName="activeLink" to="/booking"><i className="menu-icon fa fa-location-arrow"></i>Bookings </NavLink>
              </li>
              <li>
                <NavLink activeClassName="activeLink" to="/destination"><i className="menu-icon fa fa-map-marked"></i>Destinations </NavLink>
              </li>

              <li>
                <NavLink activeClassName="activeLink" to="/offer"><i className="menu-icon fa fa-rss"></i>Offers </NavLink>
              </li>
              <li>
                <NavLink activeClassName="activeLink" to="/passanger"><i className="menu-icon fa fa-users "></i>Passengers </NavLink>
              </li>
              <li>
                <NavLink activeClassName="activeLink" to="/price"><i className="menu-icon fa fa-dollar-sign"></i>Prices </NavLink>
              </li>
              <li>
                <NavLink activeClassName="activeLink" to="/configuration"><i className="menu-icon fa fa-cog"></i>Settings </NavLink>
              </li>
            </ul>
          </div>
        </nav>
      </aside>);

  }
}



Navigation.propTypes = {};

Navigation.defaultProps = {};

export default Navigation;
