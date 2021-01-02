import { createSelector } from "reselect";

const selectUi = (state) => state.ui;

export const selectDrawerHidden = createSelector(
  [selectUi],
  (state) => state.hidden
);

export const selectToolbarRoute = createSelector(
  [selectUi],
  (state) => state.routesTab
);
