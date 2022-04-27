<<<<<<< HEAD
import {
    SHOW_ALL,
    SET_VISIBILITY_FILTER
} from "../Actions/actionsTypes";
=======
import { SHOW_ALL, SET_VISIBILITY_FILTER } from "../Actions/actionsTypes";
>>>>>>> db7e801a7f9db56c2d8f2b82dffbe2286b6a8568
  
const visibilityFilter = (state = SHOW_ALL, action) => {
    switch (action.type) {
      case SET_VISIBILITY_FILTER:
        return action.filter;
      default:
        return state;
    }
};
  
export default visibilityFilter;