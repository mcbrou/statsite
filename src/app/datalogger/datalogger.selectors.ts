import { createSelector, createFeatureSelector } from '@ngrx/store';
import { State, entityAdapter } from './datalogger.state';
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

//trying something
export interface AppState {
  selectedSite: fromSites.Site;
  allDataloggers: Datalogger[];
}
export const selectSite = (state:AppState) => state.selectedSite;
export const selectAllDataloggers = (state:AppState) => state.allDataloggers;

export const getDataloggersState = createFeatureSelector<State>('dataloggers');
export const getDataloggersSelector = createSelector(getDataloggersState, state => state);


export const getDataloggerById = dataloggerId => {
  return createSelector(getDataloggersState, state => state.entities[dataloggerId]);
}

// export const getDataloggers = createSelector(getDataloggerState, selectAll);
export const getDataloggers = createSelector(getDataloggersSelector, selectAll);

// export const getDataloggersBySiteId = siteId => {
//   return createSelector(getDataloggers, function(state) {
//     return state.filter(function(datalogger){
//       return datalogger.siteId == siteId;
//     });
//   });
// };

// export const getDataloggersBySiteId = siteId => {
//   return createSelector(getDataloggersState, state => state.entities[siteId]);
// }

export const getDataloggersBySiteId = createSelector(
  selectSite,
  selectAllDataloggers,
  (selectedSite: Site, allDataloggers: Datalogger[]) => {
    if (selectedSite && allDataloggers) {
      return allDataloggers.filter((datalogger: Datalogger) => datalogger.siteId === selectedSite.id);
    } else {
      return allDataloggers;
    }
  }
)

