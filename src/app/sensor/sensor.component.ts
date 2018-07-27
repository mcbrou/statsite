import { Component, Input, OnInit, AfterViewChecked } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { getSensorById, getSensors } from './sensor.selectors';
import { Sensor } from './sensor';
import { Observable } from 'rxjs';

import * as fromSensors from '../sensor';
import * as fromRoot from '../reducers';


@Component({
    selector: 'ko-sensor',
    styleUrls: ['./sensor.scss'],
    templateUrl: './sensor.tpl.html'
})
export class SensorComponent implements OnInit {
    @Input() public sensorId: string; 
    
    public sensor$: Observable<Sensor>;

    constructor(public store: Store<fromRoot.State>) {
    }

    ngOnInit() {
        // console.log('sensor');
        // console.log(this.sensorId);
        let id = this.sensorId;
        this.sensor$ = this.store.pipe(select(getSensorById(this.sensorId)));
    }
}