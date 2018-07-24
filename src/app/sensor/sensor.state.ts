import { createSelector, State } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import * as fromRoot from '../reducers';
import { Sensor } from './sensor';

export const entityAdapter: EntityAdapter<Sensor> = createEntityAdapter<Sensor>();

export const initialState: SensorsState = entityAdapter.getInitialState();

export interface SensorsState extends EntityState<Sensor> {}
