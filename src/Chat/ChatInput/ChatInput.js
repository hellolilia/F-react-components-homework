import React, { Component } from 'react';
import './ChatInput.scss';

class ChatInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputMessage: '',
    };
  }

  handleClick = () => {
    this.props.message(this.state.inputMessage);
    this.setState({ inputMessage: '' });
  };

  handleChange = (e) => {
    this.setState({ inputMessage: e.target.value });
  };

  render() {
    return (
      <footer className="ChatInput">
        <input type="text" value={this.state.inputMessage} onChange={(e) => this.handleChange(e)} />
        <button type="button" onClick={this.handleClick}>
          Send
        </button>
      </footer>
    );
  }
}

export default ChatInput;
