import { Action } from '@ngrx/store';
import { Sensor } from './sensor';

export enum SensorActionType {
    Add = '[Sensors] Add',
    AddSuccess = '[Sensors] AddSuccess',
    AddFail = '[Sensors] AddFail'
};

export class Add implements Action {
    readonly type = SensorActionType.Add;

    constructor(public payload: Sensor) { }
}

export class AddSuccess implements Action {
    readonly type = SensorActionType.AddSuccess;

    constructor(public payload: Sensor) { }
}

export class AddFail implements Action {
    readonly type = SensorActionType.AddFail;
}

export type SensorAction = Add | AddSuccess | AddFail;
