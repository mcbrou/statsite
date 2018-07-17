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
import { SiteAction, SiteActionType } from './site.actions';
import { Site } from './site';
import { ElasticSearchService } from '../services/elasticsearch.service';

@Injectable()
export class SiteEffects {
    /*@Effect()
    add$: Observable<Action> = 
        this.actions$.pipe(
            ofType(SiteActionType.Add),
            map(action => action.payload),
            switchMap(site => {
                return site;
            })
        );*/

    constructor(public actions$: Actions) {

    }
}