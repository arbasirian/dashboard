import { createSelector } from 'reselect';

const selectDashboard = state => state.dashboard;

export const selectLoading = createSelector(
    [selectDashboard],
    dashboard => dashboard.isLoading
);