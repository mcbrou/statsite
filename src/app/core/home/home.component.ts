import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ElasticSearchService } from '../../services/elasticsearch.service';
import * as fromSite from '../../site';
import * as fromRoot from '../../reducers';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
    selector: 'ko-home',
    templateUrl: './home.tpl.html',
    styleUrls: ['./home.scss']
})
export class HomeComponent implements OnInit {
    
    //public sites: fromSite.Site[];
    public siteId: string;

    constructor(private store: Store<fromRoot.State>, 
        private esService: ElasticSearchService,
        private router: Router,
        private route: ActivatedRoute) {
            
       // this.store.pipe(select(fromSite.getSites)).subscribe(sites => this.sites = sites);
    }

    ngOnInit() {
        this.esService.getDocuments();
        this.route.params.subscribe((params) => {
            console.log(params);
            this.siteId = params['siteId'];
        })
    }
}
