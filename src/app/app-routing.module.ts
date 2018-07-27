/**
 * Main Application Routing Module
 */

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './core/home/home.component';

const routes: Routes = [
    {
        path: ':siteId',
        component: HomeComponent,
        runGuardsAndResolvers: 'always'
    },
    {
        path: '',
        component: HomeComponent
    }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes, {
        useHash: true,
        onSameUrlNavigation: 'reload'
                
    })],
    exports: [ RouterModule ]
})
export class AppRoutingModule { }
