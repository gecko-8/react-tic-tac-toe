import classes from './Board.module.scss';

import Marker from './Marker';

export const Board = ({ game, winners, onMove }) => {
  // View
  // ----
  return (
    <div className={classes.board}>
      <div className={`${classes["board-square"]} ${classes["board-square-00"]}`}>
        <Marker state={game[0][0]} winner={winners && winners[0][0]} onClick={() => onMove(0, 0)} />
      </div>
      <div className={`${classes["board-square"]} ${classes["board-square-01"]}`}>
        <Marker state={game[0][1]} winner={winners && winners[0][1]} onClick={() => onMove(0, 1)} />
      </div>
      <div className={`${classes["board-square"]} ${classes["board-square-02"]}`}>
        <Marker state={game[0][2]} winner={winners && winners[0][2]} onClick={() => onMove(0, 2)} />
      </div>
      <div className={`${classes["board-square"]} ${classes["board-square-10"]}`}>
        <Marker state={game[1][0]} winner={winners && winners[1][0]} onClick={() => onMove(1, 0)} />
      </div>
      <div className={`${classes["board-square"]} ${classes["board-square-11"]}`}>
        <Marker state={game[1][1]} winner={winners && winners[1][1]} onClick={() => onMove(1, 1)} />
      </div>
      <div className={`${classes["board-square"]} ${classes["board-square-12"]}`}>
        <Marker state={game[1][2]} winner={winners && winners[1][2]} onClick={() => onMove(1, 2)} />
      </div>
      <div className={`${classes["board-square"]} ${classes["board-square-20"]}`}>
        <Marker state={game[2][0]} winner={winners && winners[2][0]} onClick={() => onMove(2, 0)} />
      </div>
      <div className={`${classes["board-square"]} ${classes["board-square-21"]}`}>
        <Marker state={game[2][1]} winner={winners && winners[2][1]} onClick={() => onMove(2, 1)} />
      </div>
      <div className={`${classes["board-square"]} ${classes["board-square-22"]}`}>
        <Marker state={game[2][2]} winner={winners && winners[2][2]} onClick={() => onMove(2, 2)} />
      </div>
    </div>
  );
}

export default Board;
