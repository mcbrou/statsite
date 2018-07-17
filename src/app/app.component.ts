import { Component } from '@angular/core';
import { ElasticSearchService } from './services/elasticsearch.service';
import { AppConfig } from './app.config';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Konklusion';

  constructor(private config: AppConfig, 
    private esService: ElasticSearchService) {
    this.esService.getDocuments();
  }
}
