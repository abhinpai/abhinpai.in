import { stringToBoolean } from '../utils/helper';
import { THEME_KEY } from '../utils/constants';

export const initialState = {
  isDarkThemeEnabled: stringToBoolean(localStorage.getItem(THEME_KEY)) ?? false,
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'TOGGLE_THEME':
      return { ...state, isDarkThemeEnabled: action.payload };
    default:
      return state;
  }
};

export default reducer;
