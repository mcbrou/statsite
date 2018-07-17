import { createSelector, createFeatureSelector } from '@ngrx/store';
import { State, entityAdapter } from './site.state';
import { state } from '@angular/animations';
import { filter } from 'rxjs/operators';

export const getSitesState = createFeatureSelector<State>('sites');
export const getSitesSelector = createSelector(getSitesState, state => state);
// export const getSiteById = siteId => {
//   return createSelector(getSitesSelector, state => state.filter(item => item.id == siteId));
// }

export const {
    selectIds,
    selectEntities,
    selectAll,
    selectTotal,
  } = entityAdapter.getSelectors();
