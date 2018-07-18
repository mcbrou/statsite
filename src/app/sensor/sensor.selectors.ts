import { createSelector, createFeatureSelector } from '@ngrx/store';
import { State, entityAdapter } from './sensor.state';
import { filter } from 'rxjs/operators';

export const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal,
} = entityAdapter.getSelectors();

export const getSensorsState = createFeatureSelector<State>('sensors');
export const getSensorsSelector = createSelector(getSensorsState, state => state);
export const getSensorById = sensorId => {
  return createSelector(getSensorsState, state => state.entities[sensorId]);
};
export const getSensors = createSelector(getSensorsState, selectAll);
