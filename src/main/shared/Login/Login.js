import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import './Login.css';
import { useHistory } from 'react-router';
import User from '../../config/user';
import { useForm } from 'react-hook-form';
import { LoadJS } from '../../../libraries/datatables/datatables';
import showMessage from '../../../libraries/messages/messages';

const Login = (props) => {
  let history = useHistory()
  const { register, handleSubmit, errors } = useForm()

  useEffect(() => {
    LoadJS()
  }, []);

  const onSubmit = (data) => {
    props.rerender();
    User.CONNECTED_USER = true
    showMessage('Succés', "Bienvenue  admin !", 'success')
    history.push("/dashboard")
  }

  return (
    <div className="login-content" style={{ display: (!User.CONNECTED_USER ? 'block' : 'none') }}>
      <div className="login-logo">
        <a href="index.html">
          <img className="align-content" src="images/logo.png" alt="" />
        </a>
      </div>
      <div className="login-form">
        <label>login : admin  / mp : admin</label>
        <form onSubmit={handleSubmit(onSubmit)} method="post">
          <div className="form-group">
            <label>Email</label>
            <input type="text" className="form-control" placeholder="Email" value="admin" />
          </div>
          <div className="form-group">
            <label>Mot de passe</label>
            <input type="password" className="form-control" placeholder="Password" value="admin" />
          </div>
          <div className="checkbox">


          </div>
          <button type="submit" className="btn btn-success btn-flat m-b-30 m-t-30">Connexion</button>


        </form>
      </div>
    </div>
  )
};

Login.propTypes = {};

Login.defaultProps = {};

export default Login;
