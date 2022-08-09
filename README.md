# react-tic-tac-toe

This project demonstrates the use of the React (v18) useReducer hook to manage game data for a simple Tic Tac Toe game.

## Notes

* Project uses [Vite](https://vitejs.dev/) instead of Create React App.
* Project uses [Sass](https://sass-lang.com/) for most of the styling.
* All game/turn logic is handled in the Game component. The Board and Marker components are simple stateless components responsible for displaying the board and markers respectively.
* The entire game state (current board state, which turn it is, winner, etc.) is managed within a single state object. This allows for the reducer to handled everything to do with the game without relying on side effects to, for example, update the winner when a new move has been completed.

## Try It on StackBlitz

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/gecko-8/react-tic-tac-toe)

## To Try on Your Computer

1. Clone the repository to your computer  
  ```git clone gecko-8/react-tic-tac-toe```
1. Navigate into the folder  
  ```cd react-tic-tac-toe```
1. Add the NPM packages  
  ```npm install```  
1. Start the project  
  ```npm start```
