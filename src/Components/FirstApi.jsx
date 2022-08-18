import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  saveApiToken,
  saveDataUser,
  clearCurrentData,
} from '../redux/actions';

class FirstApi extends Component {
  fetchApiToken = async () => {
    const { saveApi, history, email, name, dispatchDataUser, clearData } = this.props;
    const response = await fetch('https://opentdb.com/api_token.php?command=request');
    const data = await response.json();
    const responseToken = data.token;
    localStorage.setItem('token', responseToken);
    saveApi(responseToken);
    clearData();
    dispatchDataUser({ name, email });
    history.push('/game');
  };

  render() {
    const { validateButton } = this.props;
    return (
      <button
        type="button"
        disabled={ validateButton }
        data-testid="btn-play"
        onClick={ this.fetchApiToken }
      >
        Play
      </button>
    );
  }
}

FirstApi.propTypes = {
  saveApi: PropTypes.func.isRequired,
  validateButton: PropTypes.bool.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  dispatchDataUser: PropTypes.func.isRequired,
  clearData: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  saveApi: (token) => dispatch(saveApiToken(token)),
  dispatchDataUser: (dataUser) => dispatch(saveDataUser(dataUser)),
  clearData: () => dispatch(clearCurrentData()),
});

export default connect(null, mapDispatchToProps)(FirstApi);
