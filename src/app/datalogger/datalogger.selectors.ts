import { createSelector, createFeatureSelector } from '@ngrx/store';
import { DataloggersState, entityAdapter } from './datalogger.state';
import * as fromSites from '../site';
import { filter } from 'rxjs/operators';
import { Datalogger } from './datalogger';
import { Site } from '../site';

export const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal,
} = entityAdapter.getSelectors();

export const getDataloggersState = createFeatureSelector<DataloggersState>('dataloggers');
export const getDataloggers = createSelector(getDataloggersState, selectAll);

export const getDataloggerById = dataloggerId => {
  return createSelector(getDataloggersState, state => state.entities[dataloggerId]);
}

 export const getDataloggersBySiteId = siteId => {
   return createSelector(getDataloggers, function(state) {
     return state.filter(function(datalogger){
       return datalogger.siteId == siteId;
     });
   });
 };
