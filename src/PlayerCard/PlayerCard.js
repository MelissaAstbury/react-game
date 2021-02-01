import React from 'react';

const PlayerCard = (props) => {
  return (
    <div>
      <h2>{props.name}</h2>
      <img src={props.sprites.front_default} alt={props.name} />
    </div>
  );
};

export default PlayerCard;
