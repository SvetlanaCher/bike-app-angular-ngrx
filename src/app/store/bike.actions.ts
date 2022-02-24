import { createAction,props } from '@ngrx/store';
import { City, AddedBikes, Bike } from '../app.interface';


export const loadCities = createAction('loadCities');

export const loadCitiesSuccess = createAction('loadCitiesSuccess', props<{cities: City[]}>() );

export const loadBikes = createAction('loadBikes');

export const loadBikesSuccess = createAction('loadBikesSuccess', props<{bikes: Bike[]}>() );


export const saved = createAction( 'savedBike', props<AddedBikes>() );

export const deleted = createAction( 'deletedBike', props<AddedBikes>() );

export const isBikeSaved = createAction( 'isBikeSaved');