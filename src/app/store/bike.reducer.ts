import { Bike, City, AddedBikes } from '../app.interface';
import { Action, createReducer, on } from "@ngrx/store";
import { saved, deleted, loadCitiesSuccess, loadBikesSuccess } from "./bike.actions";
import { isBikeSaved, loadCities } from './bike.actions';
import { initialCitiesState, initialAddedBikesState, initialBikesState } from './bike.state';


export const addedBikesReducer = createReducer(
    initialAddedBikesState,
    on( saved, (entries, item) => {
        const entriesClone = JSON.parse(JSON.stringify(entries.addedBikes));
        entriesClone.push(item);
        return {
            ...entries,
            addedBikes: entriesClone
        };
    }),
    on( deleted, (entries, item) => {
        const entriesClone = JSON.parse(JSON.stringify(entries.addedBikes));
        const found = entriesClone.find((e: any) => e.id == item.id);
        if (found) {
            entriesClone.splice(entriesClone.indexOf(found), 1);
        }
        return {
            ...entries,
            addedBikes: entriesClone
        };
    }),
    /* on( isBikeSaved, (entries, item) => {
        const entriesClone = JSON.parse(JSON.stringify(entries.addedBikes));
        const found = entriesClone.find((e: any) => e.id == item.id);
        if (found) {
            return true
        }
        return false
    }) */
);

export const citiesReducer = createReducer(
    initialCitiesState,
    on (loadCitiesSuccess, (entries, item) => {
        return {
            ...entries,
            cities: item.cities
        }
    })
);

export const bikesReducer = createReducer(
    initialBikesState,
    on (loadBikesSuccess, (entries, item) => {
        return {
            ...entries,
            bikes: item.bikes
        }
    })
);

export const bikesNeedsReducer = {
    bikes: bikesReducer,
    addedBikes: addedBikesReducer
}


export const appReducer = {
    cities: citiesReducer,
    bikes: bikesReducer,
    addedBikes: addedBikesReducer
};