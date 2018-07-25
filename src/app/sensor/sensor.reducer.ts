import { EntityState } from '@ngrx/entity';
import { Sensor } from './sensor';
import { SensorActionType, SensorAction } from './sensor.actions';
import { initialState, entityAdapter, SensorsState } from './sensor.state';

export function reducer(state = initialState, action: SensorAction ) : SensorsState {
    switch (action.type) {
        case SensorActionType.Add: {
            // console.log('SENSOR payload');
            // console.log(action.payload);
            return entityAdapter.upsertOne(action.payload, state);
        };
        default: {
            return state;
        }
    }
}
