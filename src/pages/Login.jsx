import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import FirstApi from '../Components/FirstApi';
import gearImg from '../images/gear.svg';
import rankingImg from '../images/ranking.svg';
import logoImg from '../images/logo.png';
import '../styles/index.css';
import '../styles/Login.css';

export default class Login extends Component {
  constructor() {
    super();

    this.state = {
      email: '',
      name: '',
    };
  }

    onInputChange = ({ target }) => {
      const { name, value } = target;
      this.setState({
        [name]: value,
      });
    };

    onValidateButton = () => {
      const { email, name } = this.state;
      return !(email && name);
    }

    render() {
      const { history } = this.props;
      const { email, name } = this.state;

      return (
        <forms className="login-form">

          <div className="login-logo-container">
            <img src={ logoImg } alt="Logo do site" className="login-img" />
            <h1 className="logo-title">Tryvia</h1>
          </div>

          <div className="login-input-container">
            <label htmlFor="name-input">
              <input
                data-testid="input-player-name"
                id="name"
                name="name"
                placeholder="Nome"
                maxLength="30"
                value={ name }
                onChange={ this.onInputChange }
              />
            </label>

            <label htmlFor="email-input">
              <input
                data-testid="input-gravatar-email"
                id="email"
                maxLength="30"
                placeholder="Email"
                type="email"
                name="email"
                value={ email }
                onChange={ this.onInputChange }
              />
            </label>
          </div>

          <div className="login-buttons-container">
            <FirstApi
              validateButton={ this.onValidateButton() }
              history={ history }
              email={ email }
              name={ name }
            />

            <div className="redirect-buttons">
              <Link
                to="/ranking"
              >
                <img src={ rankingImg } alt="Botão de ranking" />
              </Link>

              <Link
                to="/settings"
                data-testid="btn-settings"
              >
                <img src={ gearImg } alt="Botão de configurações" />
              </Link>
            </div>

          </div>

        </forms>
      );
    }
}

Login.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }),
}.isRequired;
