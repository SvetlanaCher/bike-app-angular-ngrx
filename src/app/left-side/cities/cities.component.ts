import { Component, OnInit, Output, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { loadBikes, loadCities } from 'src/app/store/bike.actions';
import { CitiesService } from '../../service/cities.service';
import { AppState } from 'src/app/store/bike.state';
import { Observable } from 'rxjs';
import { City } from './../../app.interface';
import { getCities } from './../../store/bike.selectors';


@Component({
  selector: 'app-cities',
  templateUrl: './cities.component.html',
  styleUrls: ['./cities.component.scss']
})
export class CitiesComponent implements OnInit {
  cities!: Observable<City[]>;

  @Output() idCity!: string;

  constructor(
    private store: Store<AppState>, 
    public citiesService: CitiesService,
  ) { }

  ngOnInit(): void {
    this.cities = this.store.select(getCities);
    this.store.dispatch(loadCities());

  }

  chooseCity(id: string) {
    if (id) {
      this.idCity = id;
    }
  }

}
