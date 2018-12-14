import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import './Board.css';
import Card from './Card';
import NewCardForm from './NewCardForm';
import CARD_DATA from '../data/card-data.json';

class Board extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cards: [],
      url: this.props.url,
      boardName: this.props.boardName,
      error: undefined
    };
  }
  componentDidMount( ) {
    const allCardsURL = this.state.url + this.state.boardName + 'cards/';

    axios.get(allCardsURL)
    .then((response) => {

      this.setState({
        cards: response.data
      })

    })
    .catch((error)=> {
      const errorStr = `Got an error with status ${error.response.status} and message ${error.response.statusText}`

      this.setState({
        error: errorStr
      })
    });
  }

  render() {

    const cards = this.state.cards.map((card) => {
    return (<Card key={`${card.card.id}${card.card.text}${card.card.emoji}`}
       quote={card.card.text} emoji={card.card.emoji} />)
    })

    const display = (this.state.cards.length !== 0) ? (<section>{cards}</section>)
    : (<p>{this.state.error}</p>) ;

    return (
      <div>
        {display}
      </div>
    )
  }

}

Board.propTypes = {
  url: PropTypes.string.isRequired,
  boardName: PropTypes.string.isRequired
};

export default Board;
