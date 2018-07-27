import { EntityState } from '@ngrx/entity';
import { Datalogger } from './datalogger';
import { DataloggerActionType, DataloggerAction } from './datalogger.actions';
import { initialState, entityAdapter, DataloggersState } from './datalogger.state';

export function reducer(state = initialState, action: DataloggerAction ) : DataloggersState {
    switch (action.type) {
        case DataloggerActionType.Add: {
            // console.log('datalogger payload');
            // console.log(action.payload);
            return entityAdapter.upsertOne(Object.assign({}, {expandState: (state.entities[action.payload.id] && state.entities[action.payload.id].expandState) ? state.entities[action.payload.id].expandState : 'normal'} ,action.payload), state);
        };
        case DataloggerActionType.Modify: {
            return entityAdapter.updateOne(action.payload, state);
        }
        default: {
            return state;
        }
    }
}
