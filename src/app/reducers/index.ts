/**
 * Main application state is defined here. It will be light as your feature modules will define their own states.
 */

import { ActionReducerMap, MetaReducer } from '@ngrx/store';
import { EntityState } from '@ngrx/entity';
import { storeFreeze } from 'ngrx-store-freeze';
import { environment } from '../../environments/environment';

import * as fromSite from '../site';
import * as fromDatalogger from '../datalogger';

export interface State { 
    sites: fromSite.State,
    dataloggers: fromDatalogger.State
 }

export const reducers: ActionReducerMap<State> = { 
    sites: fromSite.reducer,
    dataloggers: fromDatalogger.reducer
};

export const metaReducers: MetaReducer<State>[] = !environment.production ? [ storeFreeze ] : []; 