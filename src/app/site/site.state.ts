import { createSelector, State } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { Site } from './site';
import * as fromRoot from '../reducers';

export const entityAdapter: EntityAdapter<Site> = createEntityAdapter<Site>();

export const initialState: EntityState<Site> = entityAdapter.getInitialState();

export interface SitesState extends EntityState<Site> {}

export interface State extends fromRoot.State {
    sites: SitesState
}
