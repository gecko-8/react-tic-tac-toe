import classes from './Game.module.scss';

import { useState, useReducer, useEffect } from 'react';

import { States, getCleanGame, cloneGame, testGameComplete } from '../helpers/gameTools';
import Board from './Board';
import Winner from './Winner';

// Constants
// ---------
const GameActions = {
  START: 'start',
  MOVE: 'move'
}

// Reducers
// --------
const gameReducer = (current, action) => {
  let updatedGame;
  switch (action.type) {
    // Start a new game
    case GameActions.START:
      return getCleanGame();

    // Make a player move
    case GameActions.MOVE:
      const currentMark = current.board[action.payload.x][action.payload.y];
      if (currentMark === States.NONE && !current.complete) {
        updatedGame = cloneGame(current);
        updatedGame.board[action.payload.x][action.payload.y] = current.currentPlayer;

        // Test for a win condition
        const winnerInfo = testGameComplete(updatedGame);
        if (winnerInfo) { // We have a WINNER!
          updatedGame.complete = true;
          updatedGame.winner = winnerInfo.winner;
          updatedGame.winnerCells = winnerInfo.winnerCells;
        } else {
          updatedGame.currentPlayer = updatedGame.currentPlayer === States.X ? States.O : States.X;
        }

        return updatedGame;
      }
      return current;

    default: 
      console.debug('Error: Invalid Move');
      return current;
  }
}

const Game = () => {
  // State
  // -----
  const [game, dispatchGame] = useReducer(gameReducer, getCleanGame());

  // Event Handlers
  // --------------
  const startGameHandler = () => {
    dispatchGame({ type: GameActions.START });
  }

  const moveHandler = (x, y) => {
    dispatchGame({ type: GameActions.MOVE, payload: { x, y }});
  }

  // View
  // ----
  return (
    <div className={classes.game}>
      <div className={classes["game-board-container"]}>
        <Board game={game.board} winners={game.winnerCells} onMove={moveHandler} />
        { game.complete && <Winner player={game.winner} /> }
      </div>
      <div className={classes["game-controls"]}>
        <button className={classes["new-game-button"]} onClick={startGameHandler}>{ game.complete ? "New Game" : "Restart Game" }</button>
      </div>
    </div>
  );
}
 
export default Game;
export {
  States
};