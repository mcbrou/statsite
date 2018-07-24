import { Component, Input, OnInit, AfterViewChecked } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { State } from './sensor.state';
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
        console.log('sensorcomponent');
        this.sensor$ = this.store.pipe(select(getSensorById(this.sensorId)));
    }

    ngOnInit() {
        let id = this.sensorId;
        
        // this.store.pipe(select(fromSensors.getSensors)).subscribe(sensors => this.sensors = sensors);

        }
}