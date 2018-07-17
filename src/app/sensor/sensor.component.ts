import { Component, Input, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { State } from './sensor.state';
// import { getSensorById, getSensor } from './sensor.';
import { Sensor } from './sensor';
import { Datalogger } from '../datalogger/datalogger';
import { Observable } from 'rxjs';

@Component({
    selector: 'ko-sensor',
    styleUrls: ['./sensor.scss'],
    templateUrl: './sensor.tpl.html'
})
// <ko-site [siteId]=""></ko-site>
export class SensorComponent implements OnInit {
    @Input() public sensorId: string = ''; 
    
    public sensor$: Observable<Sensor>;
    public sensors$: Observable<Sensor[]>;
    dataloggers$: Observable<Datalogger[]>;

    constructor(public store: Store<State>) {
    }

    ngOnInit() {
        let id = this.sensorId;
        // this.sensor$ = this.store.pipe(select(getSensorById(this.sensorId)));
    }
}
