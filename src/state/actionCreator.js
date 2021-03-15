export const ActionToggleTheme = (dispatch, isDarkThemeEnabled) => {
  return dispatch({
    type: 'TOGGLE_THEME',
    payload: isDarkThemeEnabled,
  });
};
