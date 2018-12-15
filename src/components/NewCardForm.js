import React, { Component } from 'react';
import PropTypes from 'prop-types';
import emoji from 'emoji-dictionary';
import './NewCardForm.css';

const EMOJI_LIST = ["", "heart_eyes", "beer", "clap", "sparkling_heart", "heart_eyes_cat", "dog"]

//text/quote, emoji

class NewCardForm extends Component {

  constructor(props) {
    super(props)
    this.state = {
      text: "",
      emoji: ""
    }
  }

  onSubmit = (event) => {
    event.preventDefault();
    this.props.addCardCallback(this.state);
  }

  onFormChange = (event) => {

    const field = event.target.name;
    const value = event.target.value;

    const updatedState = {};
    updatedState[field] = value;
    this.setState(updatedState);
  }

  render() {

    return(
      <div className="form">
        <form onSubmit={this.onSubmit}>
          <div>
            <label className="" htmlFor="Quote">Quote</label>
            <input name="text" placeholder="quote" onChange={this.onFormChange} value={this.state.name} />
          </div>
          <div>
            <label className="" htmlFor="Emoji">Emoji</label>
            <input name="emoji" placeholder="emoji" onChange={this.onFormChange} value={this.state.species} />
          </div>
          <input type="submit" name="submit" value="Add a Card" />
        </form>
      </div>
    )
  }
}

NewCardForm.propTypes = {
  addCardCallback: PropTypes.func
};

export default NewCardForm;
