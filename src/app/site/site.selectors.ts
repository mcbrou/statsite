import { createSelector, createFeatureSelector } from '@ngrx/store';
import { SitesState, entityAdapter } from './site.state';
import * as fromRoot from '../reducers';
import { filter } from 'rxjs/operators';

export const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal,
} = entityAdapter.getSelectors();

export const getSitesState = createFeatureSelector<SitesState>('sites');
export const getSitesSelector = createSelector(getSitesState, state => state);
export const getSiteById = siteId => {
  return createSelector(getSitesSelector, state => state.entities[siteId]);
};
export const getSites = createSelector(getSitesSelector, selectAll);