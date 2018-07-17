import { createSelector, State } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { Sensor } from './sensor';

export const entityAdapter: EntityAdapter<Sensor> = createEntityAdapter<Sensor>();

export const initialState: EntityState<Sensor> = entityAdapter.getInitialState();

export interface State extends EntityState<Sensor> {}
