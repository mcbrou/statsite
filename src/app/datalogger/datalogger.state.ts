import { createSelector, State } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { Datalogger } from './datalogger';

export const entityAdapter: EntityAdapter<Datalogger> = createEntityAdapter<Datalogger>();

export const initialState: EntityState<Datalogger> = entityAdapter.getInitialState();

export interface State extends EntityState<Datalogger> {}
