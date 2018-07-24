import { createSelector, createFeatureSelector } from '@ngrx/store';
import { SensorsState, entityAdapter } from './sensor.state';
import { filter } from 'rxjs/operators';

export const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal,
} = entityAdapter.getSelectors();

export const getSensorsState = createFeatureSelector<SensorsState>('sensors');
export const getSensorsSelector = createSelector(getSensorsState, state => state);
export const getSensors = createSelector(getSensorsSelector, selectAll);
export const getSensorById = sensorId => {
  return createSelector(getSensorsSelector, state => state.entities[sensorId]);
};
export const getSensorsByDataloggerId = dataloggerId => {
    return createSelector(getSensors, function(state) {
      return state.filter(function(sensor){
        return sensor.dataloggerId == dataloggerId;
      });
    });
  };

