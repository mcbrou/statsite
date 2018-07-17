import { Component, Input, AfterViewInit, ChangeDetectionStrategy, AfterViewChecked } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { EntityState } from '@ngrx/entity';
import { Title } from '@angular/platform-browser';
import { Observable } from 'rxjs';

import * as fromDataloggers from '../datalogger';
import * as fromRoot from '../reducers';
import { ElasticSearchService } from '../services/elasticsearch.service';

import { State } from './datalogger.state';
import { Datalogger } from './datalogger';

@Component({
    selector: 'ko-datalogger',
    styleUrls: ['./datalogger.scss'],
    templateUrl: './datalogger.tpl.html'
})
// <ko-site [siteId]=""></ko-site>
export class DataloggerComponent {
    @Input() dataloggerId: number; 
    // @Input() dataloggerName: string;

    public datalogger: Datalogger;

    constructor(public store: Store<State>) {

    }
}

export class DataloggerpageComponent implements AfterViewChecked {
    title: string = 'ENT';
  
    public dataloggers$;
  
    constructor(private titleSvc: Title, 
   
      public store: Store<fromRoot.State>) { 
      
    }
  
    ngAfterViewChecked() { 
      this.titleSvc.setTitle(this.title);
  
      this.dataloggers$ = this.store.pipe(select(fromDataloggers.getDataloggersSelector));
    }
  
  }