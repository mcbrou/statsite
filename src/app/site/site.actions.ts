import { Action } from '@ngrx/store';
import { Site } from './site';

export enum SiteActionType {
    Add = '[Sites] Add',
    AddSuccess = '[Sites] AddSuccess',
    AddFail = '[Sites] AddFail'
};

export class Add implements Action {
    readonly type = SiteActionType.Add;

    constructor(public payload: Site) { }
}

export class AddSuccess implements Action {
    readonly type = SiteActionType.AddSuccess;

    constructor(public payload: Site) { }
}

export class AddFail implements Action {
    readonly type = SiteActionType.AddFail;
}

export type SiteAction = Add | AddSuccess | AddFail;
