import { EntityState } from '@ngrx/entity';
import { Datalogger } from './datalogger';
import { DataloggerActionType, DataloggerAction } from './datalogger.actions';
import { initialState, entityAdapter, DataloggersState } from './datalogger.state';

export function reducer(state = initialState, action: DataloggerAction ) : DataloggersState {
    switch (action.type) {
        case DataloggerActionType.Add: {
            console.log('datalogger payload');
            console.log(action.payload);
            return entityAdapter.upsertOne(action.payload, state);
        };
        default: {
            return state;
        }
    }
}
