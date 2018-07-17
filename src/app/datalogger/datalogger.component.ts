import { Component, Input } from '@angular/core';

import { Store } from '@ngrx/store';
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
