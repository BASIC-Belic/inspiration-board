import React from 'react';
import PropTypes from 'prop-types';
import emoji from 'emoji-dictionary';

import './Card.css';


const Card = (props) => {

  const { text, emoji, id, deleteCardCallback} = props;

  const onDelete = () => {
    deleteCardCallback(id);
  }

  return (
    <div className="card">
      <ul>
        <li> {text} </li>
        <li> {emoji} </li>
        <li><button onClick={onDelete}>Uninspired...</button></li>
      </ul>
    </div>
  )
}

Card.propTypes = {
  text: PropTypes.string.isRequired,
  emoji: PropTypes.string,
  id: PropTypes.number,
  deleteCardCallback: PropTypes.func
};


export default Card;
