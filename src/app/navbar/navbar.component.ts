import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { selectCountBikes } from '../store/bike.selectors';
import { AppState } from './../store/bike.state';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  @Input() count: any;

  countBikes$: Observable<any>;

  constructor( private store: Store<AppState> ) {
    this.countBikes$ = store.select(selectCountBikes);
  }

  ngOnInit(): void { }

}
