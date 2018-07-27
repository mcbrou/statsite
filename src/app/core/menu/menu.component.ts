import { Component, OnInit, Input } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as fromSite from '../../site';
import * as fromRoot from '../../reducers';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  
  public sites$: Observable<fromSite.Site[]>;
  public siteId: string;

  constructor(private store: Store<fromRoot.State>, private router: Router) { }

  ngOnInit() {
   this.sites$ = this.store.pipe(select(fromSite.getSites));
  }

}
