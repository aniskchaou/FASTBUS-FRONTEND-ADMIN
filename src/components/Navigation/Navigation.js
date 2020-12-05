import React from 'react';
import Header from '../Header/Header';

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
              <a href="/dashboard"><i className="menu-icon fa fa-laptop"></i>Tableau de bord </a>
            </li>
            <li>
              <a href="/assign"><i className="menu-icon fa fa-laptop"></i>Affectations </a>
            </li>
            <li>
              <a href="/booking"><i className="menu-icon fa fa-laptop"></i>Réservations </a>
            </li>
            <li>
              <a href="/destination"><i className="menu-icon fa fa-laptop"></i>Destinations </a>
            </li>
            <li>
              <a href="/hr"><i className="menu-icon fa fa-laptop"></i>Ressources humaines </a>
            </li>
            <li>
              <a href="/offer"><i className="menu-icon fa fa-laptop"></i>Offres </a>
            </li>
            <li>
              <a href="/passanger"><i className="menu-icon fa fa-laptop"></i>Passagers </a>
            </li>
            <li>
              <a href="/price"><i className="menu-icon fa fa-laptop"></i>Prix </a>
            </li>
            <li>
              <a href="/route"><i className="menu-icon fa fa-laptop"></i>Routes </a>
            </li>
            <li>
              <a href="/schedule"><i className="menu-icon fa fa-laptop"></i>Horaires</a>
            </li>
            <li>
              <a href="/travel"><i className="menu-icon fa fa-laptop"></i>Voyages</a>
            </li>
            <li>
              <a href="/vehicule"><i className="menu-icon fa fa-laptop"></i>Véhicules</a>
            </li>
            <li>
              <a href="/configuration"><i className="menu-icon fa fa-laptop"></i>Paramètres </a>
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
