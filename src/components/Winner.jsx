import classes from './Winner.module.scss';

import { States } from '../helpers/gameTools';

const Winner = ({ player }) => {
  // View
  // ----
  return (
    <div>
      { player === States.X && <h2 className={classes.win}>X Is the Winner!</h2> }
      { player === States.O && <h2 className={classes.win}>O Is the Winner!</h2> }
    </div>
  );
}
 
export default Winner;