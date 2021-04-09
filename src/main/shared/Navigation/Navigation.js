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
                <NavLink activeClassName="activeLink" to="/dashboard"><i className="menu-icon fa fa-laptop"></i>Tableau de bord </NavLink>
              </li>
              <li>
                <NavLink activeClassName="activeLink" to="/assign"><i className="menu-icon fa fa-address-card"></i>Affectations </NavLink>
              </li>
              <li>
                <NavLink activeClassName="activeLink" to="/booking"><i className="menu-icon fa fa-thumbtack"></i>Réservations </NavLink>
              </li>
              <li>
                <NavLink activeClassName="activeLink" to="/destination"><i className="menu-icon fa fa-map-marked"></i>Destinations </NavLink>
              </li>

              <li>
                <NavLink activeClassName="activeLink" to="/offer"><i className="menu-icon fa fa-rss"></i>Offres </NavLink>
              </li>
              <li>
                <NavLink activeClassName="activeLink" to="/passanger"><i className="menu-icon fa fa-user"></i>Passagers </NavLink>
              </li>
              <li>
                <NavLink activeClassName="activeLink" to="/price"><i className="menu-icon fa fa-dollar-sign"></i>Prix </NavLink>
              </li>
              <li>
                <NavLink activeClassName="activeLink" to="/route"><i className="menu-icon fa fa-route"></i>Routes </NavLink>
              </li>
              <li>
                <NavLink activeClassName="activeLink" to="/schedule"><i className="menu-icon fa fa-clock"></i>Horaires</NavLink>
              </li>
              <li>
                <NavLink activeClassName="activeLink" to="/travel"><i className="menu-icon fa fa-suitcase-rolling"></i>Voyages</NavLink>
              </li>
              <li>
                <NavLink activeClassName="activeLink" to="/vehicule"><i className="menu-icon fa fa-bus"></i>Véhicules</NavLink>
              </li>
              <li>
                <NavLink activeClassName="activeLink" to="/configuration"><i className="menu-icon fa fa-cog"></i>Paramètres </NavLink>
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
