import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ElasticSearchService } from '../../services/elasticsearch.service';
import * as fromSite from '../../site';
import * as fromRoot from '../../reducers';

@Component({
    selector: 'ko-component',
    templateUrl: './home.tpl.html',
    styleUrls: ['./home.scss']
})
export class HomeComponent implements OnInit {
    public sites$: Observable<fromSite.Site[]>;

    public sites: fromSite.Site[];

    constructor(private store: Store<fromRoot.State>, 
        private esService: ElasticSearchService) {
            
        this.store.pipe(select(fromSite.getSites)).subscribe(sites => this.sites = sites);
    }

    ngOnInit() {
        this.esService.getDocuments();
    }
}
