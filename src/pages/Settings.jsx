import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import emptyImg from '../images/empty.svg';
import backImg from '../images/back.svg';
import '../styles/Settings.css';
import '../styles/index.css';

class Settings extends Component {
  render() {
    return (
      <div
        data-testid="settings-title"
        className="settings-container"
      >
        <h1>Configurações</h1>
        <img src={ emptyImg } alt="Página vazia." className="empty-icon" />
        <div className="settings-text">
          <h2>Nada por aqui...</h2>
          <h3>Por enquanto...</h3>
        </div>
        <Link
          to="/"
        >
          <img src={ backImg } alt="Ícone de voltar" className="back-icon" />
        </Link>
      </div>
    );
  }
}

export default Settings;
