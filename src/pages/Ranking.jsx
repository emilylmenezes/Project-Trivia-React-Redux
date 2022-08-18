import PropTypes from 'prop-types';
import React, { Component } from 'react';
import '../styles/index.css';
import '../styles/Ranking.css';

class Ranking extends Component {
  renderUsersScore = (usersScore) => (
    usersScore.map((user, index) => (
      <div key={ `${user}-${index}` } className="ranking-player">
        <div className="ranking-player-avatar-container">
          <img
            src={ user.avatar }
            alt="User avatar"
          />
        </div>
        <p
          data-testid={ `player-name-${index}` }
          className="ranking-player-name"
        >
          {user.playerName}
        </p>
        <p
          data-testid={ `player-score-${index}` }
          className="ranking-player-score"
        >
          {user.totalScore}
        </p>
      </div>
    ))
  );

  loadUsersScore = () => {
    const storageData = localStorage.getItem('usersRanking');
    if (storageData === null) return;
    const usersRanking = JSON.parse(storageData)
      .sort((curr, prev) => prev.totalScore - curr.totalScore);
    return this.renderUsersScore(usersRanking);
  }

  handleClick = () => {
    const { history } = this.props;
    history.push('/');
  };

  render() {
    return (
      <div data-testid="ranking-title" className="ranking-container">
        <h1>Ranking</h1>
        {this.loadUsersScore()}
        <button
          data-testid="btn-go-home"
          type="button"
          onClick={ this.handleClick }
          className="ranking-back-button"
        >
          voltar
        </button>
      </div>
    );
  }
}

Ranking.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
};

// const mapStateToProps = (state) => ({})

// const mapDispatchToProps = {}

export default Ranking;
