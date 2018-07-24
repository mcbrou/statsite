import { createSelector, State } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { Datalogger } from './datalogger';

import * as fromRoot from '../reducers';

export const entityAdapter: EntityAdapter<Datalogger> = createEntityAdapter<Datalogger>();

export const initialState: DataloggersState = entityAdapter.getInitialState();

export interface DataloggersState extends EntityState<Datalogger> {}