import UiActionTypes from "./ui.types";
import { routes } from "./ui.data";

const INITIAL_STATE = {
  hidden: false,
  routesTab: routes,
};

const uiReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UiActionTypes.TOGGLE_DRAWER_HIDDEN:
      return {
        ...state,
        hidden: !state.hidden,
      };

    default:
      return state;
  }
};

export default uiReducer;
