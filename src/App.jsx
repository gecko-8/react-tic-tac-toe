//import { useState } from 'react'
import './App.scss'

import Game from './components/Game';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Tic-Tac-Toe</h1>
        <Game />
      </header>
    </div>
  )
}

export default App
