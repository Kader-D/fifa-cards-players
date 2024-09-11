// src/App.js

import React from 'react';
import PlayersList from './PlayersList';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h1>FIFA Player Cards</h1>
        <PlayersList />
      </header>
    </div>
  );
};

export default App;
