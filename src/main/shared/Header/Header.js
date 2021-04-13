import React from 'react';
import { Link, NavLink, useHistory } from 'react-router-dom';
import User from '../../config/user';

import './Header.css';

const Header = (props) => {
    let history = useHistory()


    const logout = () => {
        props.rerender();
        User.CONNECTED_USER = false
        history.push("/login")
    }

    return (
        <div id="right-panel" className="right-panel" style={{ display: (User.CONNECTED_USER ? 'block' : 'none') }}>
            <header id="header" className="header">
                <div className="top-left">
                    <div className="navbar-header">
                        <a className="navbar-brand" href="./"><img src="images/logo.png" alt="Logo" /></a>
                        <a className="navbar-brand hidden" href="./"><img src="images/logo2.png" alt="Logo" /></a>
                        <a id="menuToggle" className="menutoggle"><i className="fa fa-bars"></i></a>
                    </div>
                </div>
                <div className="top-right">
                    <div className="header-menu">
                        <div className="header-left">
                            <button className="search-trigger"><i className="fa fa-search"></i></button>
                            <div className="form-inline">
                                <form className="search-form">
                                    <input className="form-control mr-sm-2" type="text" placeholder="Search ..." aria-label="Search" />
                                    <button className="search-close" type="submit"><i className="fa fa-close"></i></button>
                                </form>
                            </div>

                            <div className="dropdown for-notification">
                                <button className="btn btn-secondary dropdown-toggle" type="button" id="notification" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    <i className="fa fa-plus-square"></i>

                                </button>
                                <div className="dropdown-menu" aria-labelledby="notification">
                                    <p className="red">Accès rapide</p>

                                    <NavLink to="add-assign" className="dropdown-item media" href="#">
                                        <i className="fa fa-check"></i>
                                        <p>Ajouter affectation</p>
                                    </NavLink>

                                    <NavLink to="add-destination" className="dropdown-item media" href="#">
                                        <i className="fa fa-check"></i>
                                        <p>Ajouter destination</p>
                                    </NavLink>

                                    <NavLink to="add-offer" className="dropdown-item media" href="#">
                                        <i className="fa fa-check"></i>
                                        <p>Ajouter offer</p>
                                    </NavLink>

                                    <NavLink to="add-travel" className="dropdown-item media" href="#">
                                        <i className="fa fa-check"></i>
                                        <p>Ajouter voyage</p>
                                    </NavLink>

                                </div>
                            </div>

                        </div>

                        <div className="user-area dropdown float-right">
                            <a href="#" className="dropdown-toggle active" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <img className="user-avatar rounded-circle" src="images/admin.jpg" alt="User Avatar" />
                            </a>

                            <div className="user-menu dropdown-menu">

                                <Link to="/my-profile" className="nav-link" href="#"><i className="fa fa-user"></i>Mon profile</Link>
                                <Link to="/configuration" className="nav-link" href="#"><i className="fa fa-cog"></i>Paramètres</Link>
                                <Link to="/" onClick={logout} className="nav-link" href="#"><i className="fa fa-power-off"></i>Déconnexion</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </div>
    )
};

Header.propTypes = {};

Header.defaultProps = {};

export default Header;
