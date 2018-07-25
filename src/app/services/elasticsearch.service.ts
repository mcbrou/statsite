import { Injectable } from '@angular/core';
import { Client } from 'elasticsearch-browser';
import { Store } from '@ngrx/store';
import { map } from 'rxjs/operators';

import { Observable } from 'rxjs';
import * as fromSites from '../site';
import * as fromDataloggers from '../datalogger';
import * as fromSensors from '../sensor';
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
            // console.log(data);
        });


        
    }

    public getDocuments(): void{
        let store = this.store;

        this.esClient.search(
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
                            }));
                            store.dispatch(new fromDataloggers.Add({
                                dataloggerName: packet.datalogger,
                                id: packet.dataloggerUUID,
                                siteId: packet.siteUUID
                            }));
                            store.dispatch(new fromSensors.Add({
                                sensorName: packet.name,
                                id: packet.sensorUUID,
                                dataloggerId: packet.dataloggerUUID,
                                siteId: packet.siteUUID,
                                sensorType: packet.type,
                                sensorValue: packet.value
                            }))
                        }
                }  
            });
    }
}
