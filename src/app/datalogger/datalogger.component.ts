import { Component, Input, AfterViewInit, ChangeDetectionStrategy, AfterViewChecked } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { EntityState } from '@ngrx/entity';
import { Title } from '@angular/platform-browser';
import { Observable } from 'rxjs';

// import * as fromSites from '../site';
import * as fromDataloggers from '../datalogger';
import * as fromRoot from '../reducers';
import { ElasticSearchService } from '../services/elasticsearch.service';

import { State } from './datalogger.state';
import { Datalogger } from './datalogger';
import { getDataloggerById } from '../datalogger';

@Component({
    selector: 'ko-datalogger',
    styleUrls: ['./datalogger.scss'],
    templateUrl: './datalogger.tpl.html'
})

export class DataloggerComponent implements AfterViewChecked {
    @Input() public dataloggerId: string = ''; 

    public datalogger$: Observable<Datalogger>;
    public dataloggers$: Observable<fromDataloggers.Datalogger[]>;

    constructor(public store: Store<fromRoot.State>) {

    }
  
    ngAfterViewChecked() {
      let id = this.dataloggerId;
      this.datalogger$ = this.store.pipe(select(getDataloggerById(this.dataloggerId)));
      this.dataloggers$ = this.store.pipe(select(fromDataloggers.getDataloggers));
    }
  
  }