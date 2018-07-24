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
    templateUrl: './site.tpl.html'
})
// <ko-site [siteId]=""></ko-site>
export class SiteComponent implements OnInit {
    @Input() public siteId: string;
    // @Input() public dataloggerId: string;
    
    public site$: Observable<Site>;
    //public dataloggers$: Observable<fromDatalogger.Datalogger[]>;
    public dataloggers$: Observable<fromDatalogger.Datalogger[]>;

    constructor(public store: Store<fromRoot.State>) {
 
        this.site$ = this.store.pipe(select(getSiteById(this.siteId)));
        //this.sites$ = this.store.pipe(select(fromSites.getSites));
        /*this.store.pipe(select(getSites)).subscribe(function(sites) { 
            for(let site of sites) { 
                if(site.id == this.siteId) this.site = site; 
            } 
        });*/
        //this.store.pipe(select(fromDatalogger.getDataloggers)).subscribe(dataloggers => this.dataloggers = dataloggers);
        //this.dataloggers$ = this.store.pipe(select(fromDatalogger.getDataloggersBySiteId(this.siteId)));

    }

    ngOnInit() {
        console.log('here in site component')
        console.log(this.siteId);
       // this.dataloggers$ = this.store.pipe(select(fromDatalogger.getDataloggersBySiteId(this.siteId)));
        this.site$ = this.store.pipe(select(getSiteById(this.siteId)));
        this.dataloggers$ = this.store.pipe(select(fromDatalogger.getDataloggersBySiteId(this.siteId)));
    }
}
  