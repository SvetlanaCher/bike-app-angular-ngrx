import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { map, mergeMap } from "rxjs";
import { City } from '../app.interface';
import { CitiesService } from '../service/cities.service';
import { BikesService } from '../service/bikes.service';
import { loadBikes, loadBikesSuccess, loadCities, loadCitiesSuccess } from './bike.actions';
import { isBikeSaved } from 'src/app/store/bike.actions';


@Injectable()
export class CitiesEffects {

    constructor(
        private actions$: Actions, 
        private citiesService: CitiesService
    ) {}

    loadCities$ = createEffect(() => {
        return this.actions$.pipe(ofType(loadCities), mergeMap((action) => {
            return this.citiesService.fetchCities().pipe(map((cities) => {
                return loadCitiesSuccess({ cities })
            }));
        }))
    }
    )
};

@Injectable()
export class BikesEffects {

    constructor(
        private actions$: Actions, 
        private bikesService: BikesService
    ) {}

    loadBikes$ = createEffect(() => {
        return this.actions$.pipe(ofType(loadBikes), mergeMap((action) => {
            return this.bikesService.fetchBikes().pipe(map((bikes) => {
                return loadBikesSuccess({ bikes })
            }));
        }))
    }
    )

    /* checkExist$ = createEffect(() => {
        return this.actions$.pipe(ofType(isBikeSaved), mergeMap((action) => {
            return console.log(action)
        }))
    }) */
}