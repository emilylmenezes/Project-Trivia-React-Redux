import md5 from 'crypto-js/md5';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import logoImg from '../images/logo.png';
import '../styles/index.css';
import '../styles/Header.css';

class Header extends Component {
  getAvatar = () => {
    const { email } = this.props;
    const hash = md5(email).toString();
    const imagem = `https://www.gravatar.com/avatar/${hash}`;
    return imagem;
  }

  render() {
    const { name, getScore } = this.props;
    return (
      <header>
        <div className="header-logo-container">
          <Link
            to="/"
          >
            <img src={ logoImg } alt="Logo do site" className="header-logo-img" />
          </Link>
          <h1 className="logo-title header-logo-title">Tryvia</h1>
        </div>

        <div className="header-user-info-container">
          <img
            data-testid="header-profile-picture"
            src={ this.getAvatar() }
            alt="avatar"
          />

          <h1
            data-testid="header-player-name"
          >
            { name }
          </h1>
          <p
            data-testid="header-score"
          >
            { getScore }
          </p>
        </div>
      </header>
    );
  }
}

Header.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  getScore: PropTypes.number.isRequired,
};

const mapStateToProps = (store) => ({
  name: store.player.name,
  email: store.player.gravatarEmail,
  getScore: store.player.score,
});

export default connect(mapStateToProps)(Header);
