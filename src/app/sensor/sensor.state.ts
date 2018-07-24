import { createSelector, State } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import * as fromRoot from '../reducers';
import { Sensor } from './sensor';

export const entityAdapter: EntityAdapter<Sensor> = createEntityAdapter<Sensor>();

export const initialState: EntityState<Sensor> = entityAdapter.getInitialState();

export interface SensorState extends EntityState<Sensor> {}

export interface State extends fromRoot.State {
    sensors: SensorState
}
