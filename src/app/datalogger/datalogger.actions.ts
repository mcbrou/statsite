import { Action } from '@ngrx/store';
import { Datalogger } from './datalogger';

export enum DataloggerActionType {
    Add = '[Dataloggers] Add',
    AddSuccess = '[Dataloggers] AddSuccess',
    AddFail = '[Dataloggers] AddFail'
};

export class Add implements Action {
    readonly type = DataloggerActionType.Add;

    constructor(public payload: Datalogger) { }
}

export class AddSuccess implements Action {
    readonly type = DataloggerActionType.AddSuccess;

    constructor(public payload: Datalogger) { }
}

export class AddFail implements Action {
    readonly type = DataloggerActionType.AddFail;
}

export type DataloggerAction = Add | AddSuccess | AddFail;
