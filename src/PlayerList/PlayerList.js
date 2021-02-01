import React, { Component } from 'react';

import { fetchChars } from '../APIFile/apiFile';
import PlayerCard from '../PlayerCard/PlayerCard';
class PlayerList extends Component {
  state = {
    characters: [],
    isLoading: true,
  };

  componentDidMount() {
    console.log('mounting');
    fetchChars().then((result) => {
      this.setState({ characters: result, isLoading: false });
    });
  }
  render() {
    console.log('rendering');
    return (
      <main>
        {this.state.isLoading ? (
          <p>loading...</p>
        ) : (
          <>
            <h3>Character List:</h3>
            <ul>
              {this.state.characters.map((character) => {
                return <PlayerCard key={character.id} {...character} />;
              })}
            </ul>
          </>
        )}
      </main>
    );
  }
}

export default PlayerList;
