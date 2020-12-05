import React from 'react';

import { Link } from "react-router-dom"
class Navigation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return(

      
    <aside id="left-panel" className="left-panel">
      <nav className="navbar navbar-expand-sm navbar-default">

        <div id="main-menu" className="main-menu collapse navbar-collapse">
          <ul className="nav navbar-nav">
            <li className="active">
              <Link to="/dashboard"><i className="menu-icon fa fa-laptop"></i>Tableau de bord </Link>
            </li>
            <li>
              <Link to="/assign"><i className="menu-icon fa fa-laptop"></i>Affectations </Link>
            </li>
            <li>
              <Link to="/booking"><i className="menu-icon fa fa-laptop"></i>Réservations </Link>
            </li>
            <li>
              <Link to="/destination"><i className="menu-icon fa fa-laptop"></i>Destinations </Link>
            </li>
            <li>
              <Link to="/hr"><i className="menu-icon fa fa-laptop"></i>Ressources humaines </Link>
            </li>
            <li>
              <Link to="/offer"><i className="menu-icon fa fa-laptop"></i>Offres </Link>
            </li>
            <li>
              <Link to="/passanger"><i className="menu-icon fa fa-laptop"></i>Passagers </Link>
            </li>
            <li>
              <Link to="/price"><i className="menu-icon fa fa-laptop"></i>Prix </Link>
            </li>
            <li>
              <Link to="/route"><i className="menu-icon fa fa-laptop"></i>Routes </Link>
            </li>
            <li>
              <Link to="/schedule"><i className="menu-icon fa fa-laptop"></i>Horaires</Link>
            </li>
            <li>
              <Link to="/travel"><i className="menu-icon fa fa-laptop"></i>Voyages</Link>
            </li>
            <li>
              <Link to="/vehicule"><i className="menu-icon fa fa-laptop"></i>Véhicules</Link>
            </li>
            <li>
              <Link to="/configuration"><i className="menu-icon fa fa-laptop"></i>Paramètres </Link>
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
