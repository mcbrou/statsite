import { Component, Input, OnInit, AfterViewInit, ChangeDetectionStrategy, AfterViewChecked } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { EntityState } from '@ngrx/entity';
import { Title } from '@angular/platform-browser';
import { Observable } from 'rxjs';

import * as fromSites from '../site';
import * as fromDataloggers from '../datalogger';
import * as fromSensor from '../sensor';
import * as fromRoot from '../reducers';
import { ElasticSearchService } from '../services/elasticsearch.service';

import { State } from './datalogger.state';
import { Datalogger } from './datalogger';
import { getDataloggerById, getDataloggersBySiteId } from '../datalogger';

@Component({
    selector: 'ko-datalogger',
    styleUrls: ['./datalogger.scss'],
    templateUrl: './datalogger.tpl.html'
})

export class DataloggerComponent implements OnInit {
    @Input() public dataloggerId: string = ''; 
    @Input() public siteId: string = '';

    
    //public site$: Observable<fromSites.Site>;

    public datalogger$: Observable<Datalogger>;
    public sensors$: Observable<fromSensor.Sensor[]>;

    constructor(public store: Store<fromRoot.State>) {
      let id = this.dataloggerId;
      this.datalogger$ = this.store.pipe(select(getDataloggerById(this.dataloggerId)));

    }
  
    ngOnInit() {
            // let this.siteId = 
      //this.site$ = this.store.pipe(select(fromSites.getSiteById(this.siteId)));
      
    }
  
  }