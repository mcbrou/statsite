import { Component, AfterViewInit, ChangeDetectionStrategy, AfterViewChecked } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { EntityState } from '@ngrx/entity';
import { Title } from '@angular/platform-browser';
import { Observable } from 'rxjs';

import * as fromDataloggers from '../../datalogger';
import * as fromRoot from '../../reducers';
import { ElasticSearchService } from '../../services/elasticsearch.service';

@Component({
  selector: 'app-dataloggerpage',
  templateUrl: './dataloggerpage.component.html',
  styleUrls: ['./dataloggerpage.component.scss'],
  //changeDetection: ChangeDetectionStrategy.OnPush
})
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
