import { Component, Input, OnInit, AfterViewInit, ChangeDetectionStrategy, AfterViewChecked } from '@angular/core';
import { select, Store, State } from '@ngrx/store';
import { getSiteById, getSites } from './site.selectors';
import { Site } from './site';
import { Observable } from 'rxjs';
import { EntityState } from '@ngrx/entity';
import { Title } from '@angular/platform-browser';

import * as fromSites from '../site';
import * as fromRoot from '../reducers';
import * as fromDatalogger from '../datalogger';
import { ElasticSearchService } from '../services/elasticsearch.service';
import { initialState } from '../sensor';

@Component({
    selector: 'ko-site',
    styleUrls: ['./site.scss'],
    templateUrl: './site.tpl.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})

export class SiteComponent implements OnInit {
    @Input() public siteId: string;
    
    public site$: Observable<Site>;
    //public dataloggers: fromDatalogger.Datalogger[];
    public dataloggers$: Observable<fromDatalogger.Datalogger[]>;

    constructor(public store: Store<fromRoot.State>) {}

    ngOnInit() {
        this.site$ = this.store.pipe(select(getSiteById(this.siteId)));
        //this.site$.subscribe((site) => {
           // if(site) this.store.pipe(select(fromDatalogger.getDataloggersBySiteId(this.siteId))).subscribe((dataloggers) => this.dataloggers = dataloggers);
        //})
        this. dataloggers$ = this.store.pipe(select(fromDatalogger.getDataloggersBySiteId(this.siteId)));
    }
}
  