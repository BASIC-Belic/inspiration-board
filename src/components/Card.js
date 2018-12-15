import React from 'react';
import PropTypes from 'prop-types';
import emoji from 'emoji-dictionary';

import './Card.css';


const Card = (props) => {

  const { quote, emoji, id, deleteCardCallback} = props;

  const onDelete = () => {
    deleteCardCallback(id);
  }

  return (
    <div className="card">
      <ul>
        <li> {quote} </li>
        <li> {emoji} </li>
        <li><button onClick={onDelete}>Uninspired...</button></li>
      </ul>
    </div>
  )
}

Card.propTypes = {
  quote: PropTypes.string.isRequired,
  emoji: PropTypes.string,
  id: PropTypes.integer,
  deleteCardCallback: PropTypes.func
};


export default Card;
