export const initialState = {
  isDarkThemeEnabled: false,
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
