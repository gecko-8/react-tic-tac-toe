import classes from './Marker.module.scss';

import { States } from '../helpers/gameTools';

import XSymbol from '../assets/x-symbol-svgrepo-com.svg';
import OSymbol from '../assets/o-symbol-svgrepo-com.svg';

const Marker = ({ state, winner, onClick }) => {
  // View
  // ----
  const classNames = `${classes.marker} ${state !== States.NONE && winner ? classes.winner : ''}`;
  return (
    <div className={classNames} onClick={onClick}>
      <div className={classes.container}>
        <div className={classes.mark}>
          {state === States.X && <img src={XSymbol} alt="X" />}
          {state === States.O && <img src={OSymbol} alt="O" />}
        </div>
      </div>
    </div>
  );
}
 
export default Marker;