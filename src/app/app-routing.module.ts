// import { HomePageComponent } from './core/homepage/homepage.component';
import { DataloggerComponent } from './datalogger';
import { SiteComponent } from './site';
/**
 * Main Application Routing Module
 */

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SensorComponent } from './sensor';
import { HomeComponent } from './core/home/home.component';

const routes: Routes = [
    {
        path: '',
        // component: HomePageComponent
        component: HomeComponent
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
