import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { MaterialModule } from '../material.module';
import { SensorModule } from '../sensor';
import { DataloggerComponent } from './datalogger.component';
import { reducer } from './datalogger.reducer';

@NgModule({
    declarations: [ DataloggerComponent ],
    imports: [ StoreModule.forFeature('dataloggers', reducer), SensorModule, CommonModule,
    MaterialModule],
    exports: [ DataloggerComponent ]
})
export class DataloggerModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: DataloggerModule,
            providers: []
        }
    }
}