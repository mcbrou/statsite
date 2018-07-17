import { Component, Input, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { State } from './site.state';
import { getSitesSelector } from './site.selectors';
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
    
    public site: Site;
    dataloggers$: Observable<Datalogger[]>;
    sites$: Observable<State>;

    constructor(public store: Store<State>) {

    }

    ngOnInit() {
        let id = this.siteId;
        this.sites$ = this.store.pipe(select(getSitesSelector));
    }
}
