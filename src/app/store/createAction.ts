import { Action } from '@ngrx/store';

export function createAction(type): Action {
    return { type }; 
}