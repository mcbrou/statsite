import { Component, AfterViewInit, ChangeDetectionStrategy, AfterViewChecked } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { EntityState } from '@ngrx/entity';
import { Title } from '@angular/platform-browser';
import { Observable } from 'rxjs';

import * as fromSites from '../../site';
import * as fromRoot from '../../reducers';
import { ElasticSearchService } from '../../services/elasticsearch.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css'],
  //changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomePageComponent implements AfterViewChecked {
  title: string = 'ENT';

  public sites$;

  constructor(private titleSvc: Title, 
 
    public store: Store<fromRoot.State>) { 
    
  }

  ngAfterViewChecked() { 
    this.titleSvc.setTitle(this.title);

    this.sites$ = this.store.pipe(select(fromSites.getSitesSelector));
  }

}
