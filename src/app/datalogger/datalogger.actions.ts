import { Action } from '@ngrx/store';
import { Datalogger } from './datalogger';
import { Update } from '@ngrx/entity';

export enum DataloggerActionType {
    Add = '[Dataloggers] Add',
    AddSuccess = '[Dataloggers] AddSuccess',
    AddFail = '[Dataloggers] AddFail',
    Modify = '[Dataloggers] Update'
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

export class Modify implements Action {
    readonly type = DataloggerActionType.Modify;

    constructor(public payload: Update<Datalogger>) {}
}

export type DataloggerAction = Add | AddSuccess | AddFail | Modify;
