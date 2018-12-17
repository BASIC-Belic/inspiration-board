import React from 'react';
import PropTypes from 'prop-types';
import emoji from 'emoji-dictionary';

import './Card.css';


const Card = (props) => {

  const { quote, emojiText, id, deleteCardCallback} = props;

  const onDelete = () => {
    deleteCardCallback(id);
  }

  return (
    <div className="card">
      <ul>
        <li> {quote} </li>
        <li> {emojiText} </li>
        <li><button onClick={onDelete}>Uninspired...</button></li>
      </ul>
    </div>
  )
}

Card.propTypes = {
  quote: PropTypes.string.isRequired,
  emojiText: PropTypes.string,
  id: PropTypes.number,
  deleteCardCallback: PropTypes.func
};


export default Card;
