import { createFeatureSelector, createSelector } from "@ngrx/store";
import { CitiesState, BikesState, AddedBikesState } from "./bike.state";



export const getCities = createSelector(
    createFeatureSelector('cities'), 
    (state: CitiesState) => {
        return state.cities
    }
);

export const getBikes = createSelector(
    createFeatureSelector('bikes'), 
    (state: BikesState) => {
        return state.bikes
    }
);

export const selectCountBikes = createSelector(
    createFeatureSelector('addedBikes'),
    (state: AddedBikesState) => {
        return state.addedBikes.length;
    }
);

export const selectAllBikes = createSelector(
    createFeatureSelector('addedBikes'), 
    (state: AddedBikesState) => {
        return state.addedBikes
    }
);