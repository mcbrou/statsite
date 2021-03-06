import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { MaterialModule } from './material.module';

import { reducers, metaReducers } from './reducers';
import { ElasticSearchService } from './services/elasticsearch.service';

import { AppConfig, APP_CONFIG_VALUES } from './app.config';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './core/home/home.component';
import { SiteModule } from './site';
import { NavbarComponent } from './core/navbar/navbar.component';
import { DataloggerModule } from './datalogger';
import { SensorModule } from './sensor';
import { MenuComponent } from './core/menu/menu.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    SiteModule.forRoot(),
    DataloggerModule.forRoot(),
    SensorModule.forRoot(),
    StoreModule.forRoot(reducers),
    // Import routing last for catch all route to work
    AppRoutingModule
  ],
  providers: [
    // Register AppConfig and its implementation here 
    // so other classes can inject AppConfig without having 
    // to worry about where it came from 
    ElasticSearchService,
    { provide: AppConfig, useValue: APP_CONFIG_VALUES },
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
