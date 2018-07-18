// import { HomePageComponent } from './core/homepage/homepage.component';
import { DataloggerComponent } from './datalogger';
import { SiteComponent } from './site';
/**
 * Main Application Routing Module
 */

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SensorComponent } from './sensor';

const routes: Routes = [
    {
        path: 'sensors',
        component: SensorComponent
    },
    {
        path: 'datalogger',
        component: DataloggerComponent
    },
    {
        path: '',
        // component: HomePageComponent
        component: SiteComponent
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
