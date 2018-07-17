import { Injectable } from '@angular/core';
import { Client } from 'elasticsearch-browser';
import { Store } from '@ngrx/store';
import { map } from 'rxjs/operators';

import { Observable } from 'rxjs';
// import { SITES } from '../mock-sites';
import * as fromSites from '../site';
import * as fromDataloggers from '../datalogger';
import * as fromRoot from '../reducers';

@Injectable()
export class ElasticSearchService {

    private esClient: Client;
    private siteData: Observable<Array<string>>;
    private siteNames: Array<string>;
    private dataloggerData: Observable<Array<string>>;
    private dataloggerNames: Array<string>;
    private count: number;

    constructor(public store: Store<fromRoot.State>) {
        this.esClient = new Client({
            host: 'elasticsearch:9200',
            log: 'debug'
        });
        this.esClient.ping({
            requestTimeout: 30000,
          }, function (error) {
            if (error) {
              console.error('elasticsearch cluster is down!');
            } else {
              console.log('All is well');
            }
          });
        
        this.esClient.count({
            index: 'somesite6'
        }, function(err, data) { 
            console.log(data); 
            // Split out sites
            // Dispatch add_site with extracted site
            // Split out dataloggers
            // --
            // Split out sensors
            // --
        });


        
    }

    public getDocuments(): Observable<fromSites.Site[]> {
        let store = this.store;
        return this.esClient.search(
            {
            index:  'somesite6',
            size: 10,
            }
            , function(err, data) {
                if (data.hits && data.hits.hits) {
                    for (let x = 0; x < data.hits.hits.length-1; x++) {
                        let packet = data.hits.hits[x]._source;
                        store.dispatch(new fromSites.Add({
                            siteName: packet.site,
                            id: packet.siteUUID
                        }))
                        store.dispatch(new fromDataloggers.Add({
                            datalogger_name: packet.datalogger,
                            datalogger_id: packet.dataloggerUUID
                        }));
                    }
                }
                
            });
    }

    // get data by site
    getSiteData() {
        // TODO DOES EVERYT SITE NEED ITS OWN
    }

    // data logger status getter
    getDLData() {
        // TODO IDK WHAT IM DOING AHH
    }
    // get data logger sensor status
    getSensorStatus() {
        // TODO does every sensor need its own method
    }
}
