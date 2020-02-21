import React from 'react';

import './App.css';

import PlayerList from './components/PlayerList'
import Form from './components/Form';
import Card from './components/Card';

function App() {
  return (
    <div className="center">
      <div className="image">
      <PlayerList />
      <Form/>
      {/* <Card /> */}
      </div>

      <h1>Soccer Players</h1>
      <div>Welcome to the app</div>
      <div>Start inside of the `src/index.js` file</div>
      <div>Have fun!</div>
    </div>
  );
}

export default App;
