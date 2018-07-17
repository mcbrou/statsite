import { EntityState } from '@ngrx/entity';
import { Sensor } from './sensor';
import { SensorActionType, SensorAction } from './sensor.actions';
import { initialState, entityAdapter } from './sensor.state';

export function reducer(state = initialState, action: SensorAction ) : EntityState<Sensor> {
    switch (action.type) {
        case SensorActionType.Add: {
            console.log('payload');
            console.log(action.payload);
            return entityAdapter.addOne(action.payload, state);
        };
        default: {
            return state;
        }
    }
}
