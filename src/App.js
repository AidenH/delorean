import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './App.css';

class Mail extends Component {
  render() {
    return (
      <p> Hello World!</p>
    );
  }
}

ReactDOM.render(<Mail />, document.getElementById('root'));

export default Mail;
