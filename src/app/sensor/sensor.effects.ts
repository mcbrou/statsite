import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from  '@ngrx/effects';
import { Action } from '@ngrx/store';
import { asyncScheduler, empty, Observable, of } from 'rxjs';
import {
    catchError,
    debounceTime,
    map,
    skip,
    switchMap,
    takeUntil,
  } from 'rxjs/operators';
import { SensorAction, SensorActionType } from './sensor.actions';
import { Sensor } from './sensor';
import { ElasticSearchService } from '../services/elasticsearch.service';

@Injectable()
export class SensorEffects {
    /*@Effect()
    add$: Observable<Action> = 
        this.actions$.pipe(
            ofType(SensorActionType.Add),
            map(action => action.payload),
            switchMap(sensor => {
                return sensor;
            })
        );*/

    constructor(public actions$: Actions) {

    }
}