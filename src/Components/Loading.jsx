import React, { Component } from 'react';
import '../styles/index.css';
import '../styles/Loading.css';

class Loading extends Component {
  render() {
    return (
      <div className="external-loading">
        <span className="inner-loading">?</span>
      </div>
    );
  }
}

export default Loading;
