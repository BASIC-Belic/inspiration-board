import React from 'react';
import PropTypes from 'prop-types';
import emoji from 'emoji-dictionary';

import './Card.css';


const Card = (props) => {

  const { quote, emoji, id } = props;

  return (
    <div className="card">
      <ul>
        <li> {quote} </li>
        <li> {emoji} </li>
        <li><button>Button has id {id}</button></li>
      </ul>
    </div>
  )
}

Card.propTypes = {
  quote: PropTypes.string.isRequired,
  emoji: PropTypes.string
};


export default Card;
