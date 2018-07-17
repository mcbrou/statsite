import { Component, Input, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { State } from './site.state';
import { getSiteById, getSites } from './site.selectors';
import { Site } from './site';
import { Datalogger } from '../datalogger/datalogger';
import { Observable } from 'rxjs';

@Component({
    selector: 'ko-site',
    styleUrls: ['./site.scss'],
    templateUrl: './site.tpl.html'
})
// <ko-site [siteId]=""></ko-site>
export class SiteComponent implements OnInit {
    @Input() public siteId: string = ''; 
    
    public site$: Observable<Site>;
    public sites$: Observable<Site[]>;
    dataloggers$: Observable<Datalogger[]>;

    constructor(public store: Store<State>) {
    }

    ngOnInit() {
        let id = this.siteId;
        this.site$ = this.store.pipe(select(getSiteById(this.siteId)));
    }
}
