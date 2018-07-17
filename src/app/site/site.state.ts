import { createSelector, State } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { Site } from './site';

export const entityAdapter: EntityAdapter<Site> = createEntityAdapter<Site>();

export const initialState: EntityState<Site> = entityAdapter.getInitialState();

export interface State extends EntityState<Site> {}
