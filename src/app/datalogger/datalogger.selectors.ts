import { createSelector, createFeatureSelector } from '@ngrx/store';
import { State, entityAdapter } from './datalogger.state';
import * as fromSites from '../site';
import { filter } from 'rxjs/operators';
import { Datalogger } from './datalogger';

export const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal,
} = entityAdapter.getSelectors();

export const getDataloggerState = createFeatureSelector<State>('dataloggers');
export const getDataloggersSelector = createSelector(getDataloggerState, state => state);


export const getDataloggerById = dataloggerId => {
  return createSelector(getDataloggerState, state => state.entities[dataloggerId]);
}

export const getDataloggers = createSelector(getDataloggerState, selectAll);
export const getDataloggersBySiteId = siteId => {
  return createSelector(getDataloggers, function(state) {
    return state.filter(function(datalogger){
      return datalogger.siteId == siteId;
    });
  });
};

