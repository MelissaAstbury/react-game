import React, { Component } from 'react';

import PlayerCard from '../PlayerCard/PlayerCard';

class PlayerList extends Component {
  state = {
    characters: [
      {
        id: 1,
        name: 'test',
        sprites: {
          front_default: 'http://pokeapi.co/media/sprites/pokemon/12.png',
        },
      },
    ],
  };

  render() {
    return (
      <main>
        <p>This is where my chars will be</p>
        <ul>
          {this.state.characters.map((character) => {
            return <PlayerCard {...character} />;
          })}
        </ul>
      </main>
    );
  }
}

export default PlayerList;
