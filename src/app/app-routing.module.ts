import { HomePageComponent } from './core/homepage/homepage.component';
import { DataloggerComponent } from './datalogger';
/**
 * Main Application Routing Module
 */

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    {
        path: 'datalogger',
        component: DataloggerComponent
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
