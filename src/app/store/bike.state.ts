import { Bike, City, AddedBikes } from '../app.interface';

/* City State */

export interface CitiesState {
    cities: City[]
}

export const initialCitiesState: CitiesState = {
    //@ts-ignore
    cities: null,
}

/* Bike State */

export interface BikesState {
    bikes: Bike[]
}

export const initialBikesState: BikesState = {
    //@ts-ignore
    bikes: null,
}

/* Added Bikes */

export interface AddedBikesState {
    addedBikes: AddedBikes[]
}

export const initialAddedBikesState: AddedBikesState = {
    //@ts-ignore
    addedBikes: [],
}

/* App State */

export interface AppState {
    cities: CitiesState,
    bikes: BikesState,
    addedBikes: AddedBikesState
}
