import React, { Component } from 'react';

import { fetchChars } from '../APIFile/apiFile';
import PlayerCard from '../PlayerCard/PlayerCard';

class PlayerList extends Component {
  state = {
    characters: [],
  };

  componentDidMount() {
    console.log('mounting');
    fetchChars().then((result) => {
      this.setState({ characters: result });
    });
  }
  render() {
    console.log('rendering');
    return (
      <main>
        <p>Chart goes here</p>
        <ul>
          {this.state.characters.map((character) => {
            return <PlayerCard key={character.id} {...character} />;
          })}
        </ul>
      </main>
    );
  }
}

export default PlayerList;
