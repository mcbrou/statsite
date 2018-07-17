import { HomePageComponent } from './core/homepage/homepage.component';
import { DataloggerpageComponent } from './core/dataloggerpage/dataloggerpage.component';
/**
 * Main Application Routing Module
 */

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    {
        path: 'datalogger',
        component: DataloggerpageComponent
    },
    {
        path: '',
        component: HomePageComponent
    }
];

@NgModule({
    imports: [ RouterModule.forRoot(routes, {
        useHash: true,
        onSameUrlNavigation: 'reload'
    })],
    exports: [ RouterModule ]
})
export class AppRoutingModule { }
