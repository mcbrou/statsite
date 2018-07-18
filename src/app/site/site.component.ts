import { Component, Input, OnInit, AfterViewInit, ChangeDetectionStrategy, AfterViewChecked } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { State } from './site.state';
import { getSiteById, getSites } from './site.selectors';
import { Site } from './site';
import { Datalogger } from '../datalogger/datalogger';
import { Observable } from 'rxjs';
import { EntityState } from '@ngrx/entity';
import { Title } from '@angular/platform-browser';

import * as fromSites from '../site';
import * as fromRoot from '../reducers';
import { ElasticSearchService } from '../services/elasticsearch.service';

@Component({
    selector: 'ko-site',
    styleUrls: ['./site.scss'],
    templateUrl: './site.tpl.html'
})
// <ko-site [siteId]=""></ko-site>
export class SiteComponent implements AfterViewChecked {
    @Input() public siteId: string = '';
    title: string = 'ENT';
    
    public site$: Observable<Site>;
    // public sites$: Observable<Site[]>;
    public sites$: Observable<fromSites.Site[]>;
    dataloggers$: Observable<Datalogger[]>;

    constructor(private titleSvc: Title, 
        public store: Store<fromRoot.State>) {
        // public store: Store<State>) 
    }

    ngAfterViewChecked() {
        let id = this.siteId;
        this.site$ = this.store.pipe(select(getSiteById(this.siteId)));
        this.titleSvc.setTitle(this.title);
        this.sites$ = this.store.pipe(select(fromSites.getSites));
    }
}
  