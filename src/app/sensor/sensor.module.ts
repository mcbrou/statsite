import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { MaterialModule } from '../material.module';
import { SensorComponent } from './sensor.component';
import { reducer } from './sensor.reducer';

@NgModule({
    declarations: [SensorComponent],
    imports: [ StoreModule.forFeature('sensors', reducer), CommonModule,
    MaterialModule],
    exports: [ SensorComponent ]
})
export class SensorModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: SensorModule,
            providers: []
        }
    }
}