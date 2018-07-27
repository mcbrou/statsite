import { Component, Input, OnInit, AfterViewInit, ChangeDetectionStrategy, AfterViewChecked } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { EntityState } from '@ngrx/entity';
import { Title } from '@angular/platform-browser';
import { Observable } from 'rxjs';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';

import * as fromSites from '../site';
import * as fromSensor from '../sensor';
import * as fromRoot from '../reducers';
import { ElasticSearchService } from '../services/elasticsearch.service';

import { Datalogger } from './datalogger';
import { getDataloggerById } from './datalogger.selectors';
import { Modify } from './datalogger.actions';

@Component({
    selector: 'ko-datalogger',
    styleUrls: ['./datalogger.scss'],
    templateUrl: './datalogger.tpl.html',
    animations: [
      trigger('expandState', [
        state('expanded', style({
          height: '400px',
          width: '200px',
        })),
        state('normal', style({
          height: '100px',
          width: '100px',
        })),
        transition('normal => expanded', animate('200ms ease-in')),
        transition('expanded => normal', animate('200ms ease-in'))
      ]),
    ]
})

export class DataloggerComponent implements OnInit {
    @Input() public dataloggerId: string = ''; 
    @Input() public siteId: string = '';

    public expanded: string;

    public datalogger$: Observable<Datalogger>;
    public sensors$: Observable<fromSensor.Sensor[]>;

    constructor(public store: Store<fromRoot.State>) {
      
    }
  
    ngOnInit() {
      this.datalogger$ = this.store.pipe(select(getDataloggerById(this.dataloggerId)));
      this.datalogger$.subscribe((datalogger) => {
        this.expanded = datalogger.expandState;
      })
      this.sensors$ = this.store.pipe(select(fromSensor.getSensorsByDataloggerId(this.dataloggerId)));
    }

    public expandToggle(): void {
      if (this.expanded === 'normal') {
        this.expanded = 'expanded';
        this.store.dispatch(new Modify({id: this.dataloggerId, changes :{ expandState : 'expanded' }}));
      } else {
        this.expanded = 'normal';
        this.store.dispatch(new Modify({id: this.dataloggerId, changes :{ expandState : 'normal' }}));
      }
    }
  
  }