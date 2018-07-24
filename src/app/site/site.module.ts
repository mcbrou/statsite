import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { MaterialModule } from '../material.module';
import { DataloggerModule } from '../datalogger';
import { SiteComponent } from './site.component';
import { reducer } from './site.reducer';

@NgModule({
    declarations: [SiteComponent],
    imports: [ StoreModule.forFeature('sites', reducer), DataloggerModule, CommonModule,
    MaterialModule],
    exports: [ SiteComponent ]
})
export class SiteModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: SiteModule,
            providers: []
        }
    }
}