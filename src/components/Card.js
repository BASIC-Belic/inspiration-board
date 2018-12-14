import React from 'react';
import PropTypes from 'prop-types';
import emoji from 'emoji-dictionary';

import './Card.css';


const Card = (props) => {

  const { quote, emoji } = props;

  return (
    <div className="card">
      <p> {quote} {emoji} </p>
    </div>
  )
}

Card.propTypes = {
  quote: PropTypes.string.isRequired,
  emoji: PropTypes.string
};


export default Card;
