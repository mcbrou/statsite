/**
 * Main Application Configuration
 * 
 * Store endpoints, static strings, etc here. Easier to manage.
 */
import { InjectionToken } from '@angular/core';

/**
 * AppConfig describes the shape of the config object
 */
export abstract class AppConfig {
    /* Example:
        endpoints: any;
    */
   endpoints: any;
}

// Inection token for Dependency Injection used as a provider for instances of AppConfig
export const APP_CONFIG = new InjectionToken<AppConfig>('app.config');

/**
 * APP_CONFIG_VALUES is the implementation of the AppConfig abstract class above
 * endpoints: any becomes : ...
 */
export const APP_CONFIG_VALUES: AppConfig = {
    /* Example
        endpoints: {
            elasticSearch: 'https://elasticsearch:9200'
        }

        where "any" is an object containing a key and a string value for your elasticsearch endpoint 
    */
   endpoints: {
   }
}