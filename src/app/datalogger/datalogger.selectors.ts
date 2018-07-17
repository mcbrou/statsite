import { createSelector, createFeatureSelector } from '@ngrx/store';
import { State, entityAdapter } from './datalogger.state';

export const getDataloggerState = createFeatureSelector<State>('dataloggers');
export const getDataloggersSelector = createSelector(getDataloggerState, state => state);

export const {
    selectIds,
    selectEntities,
    selectAll,
    selectTotal,
  } = entityAdapter.getSelectors();
