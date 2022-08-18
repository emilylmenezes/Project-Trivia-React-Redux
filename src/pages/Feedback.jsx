import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import md5 from 'crypto-js/md5';
import Header from '../Components/Header';
import '../styles/Feedback.css';
import '../styles/index.css';

class Feedback extends Component {
  componentDidMount() {
    this.handleUsersScore();
  }

  getAvatar = (playerEmail) => {
    const hash = md5(playerEmail).toString();
    const imagem = `https://www.gravatar.com/avatar/${hash}`;
    return imagem;
  }

  handleUsersScore = () => {
    const { totalScore, playerName, playerEmail } = this.props;
    const avatar = this.getAvatar(playerEmail);
    const currData = {
      totalScore,
      playerName,
      avatar,
    };

    if (localStorage.getItem('usersRanking') === null) {
      localStorage.setItem('usersRanking', JSON.stringify([currData]));
    } else {
      const oldData = localStorage.getItem('usersRanking');
      const recuperedData = JSON.parse(oldData);
      const newArray = [...recuperedData, currData];
      localStorage.setItem('usersRanking', JSON.stringify(newArray));
    }
  }

  handlePlayAgain = () => {
    const { history } = this.props;
    history.push('/');
  }

  message = () => {
    const { totalAssertions } = this.props;
    const mediumResult = 3;
    if (totalAssertions < mediumResult) return 'Could be better...';
    if (totalAssertions >= mediumResult) return 'Well Done!';
  }

  handleGoRanking = () => {
    const { history } = this.props;
    history.push('/ranking');
  };

  render() {
    // const { totalAssertions, totalScore } = this.props;
    const { totalScore, playerName, playerEmail, totalAssertions } = this.props;
    console.log('totalScore: ', totalScore);
    console.log('playerName: ', playerName);
    console.log('playerEmail: ', playerEmail);
    return (
      <>
        <Header />
        <div className="feedback-container">
          <h2 data-testid="feedback-text">{this.message()}</h2>

          <div className="feedback-score-container">
            <p>
              {'Final Score: '}
              <span
                data-testid="feedback-total-score"
                className="feedback-score-span"
              >
                {totalScore}
              </span>
            </p>

            <p>
              {'Total Assertions: '}
              <span
                data-testid="feedback-total-question"
                className="feedback-score-span"
              >
                {totalAssertions}
              </span>
            </p>
          </div>

          <div className="feedback-buttons-container">
            <button
              data-testid="btn-play-again"
              type="button"
              onClick={ this.handlePlayAgain }
            >
              Jogar novamente
            </button>

            <button
              data-testid="btn-ranking"
              type="button"
              onClick={ this.handleGoRanking }
            >
              Ranking
            </button>
          </div>
        </div>
      </>
    );
  }
}

Feedback.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
  totalAssertions: PropTypes.number.isRequired,
  totalScore: PropTypes.number.isRequired,
  playerName: PropTypes.string.isRequired,
  playerEmail: PropTypes.string.isRequired,
};

const mapStateToProps = (store) => ({
  totalAssertions: store.player.assertions,
  totalScore: store.player.score,
  playerName: store.player.name,
  playerEmail: store.player.gravatarEmail,
});

export default connect(mapStateToProps)(Feedback);
