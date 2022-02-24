import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Store } from "@ngrx/store";
import { map, Observable } from 'rxjs';
import { Bike } from '../app.interface';
import { AppState } from "../store/bike.state";
import { AddedBikes } from './../app.interface';



@Injectable({providedIn: 'root'})
export class BikesService {

    constructor(private http: HttpClient, private store: Store<AppState>) {};

    public idBike!: string;

    getId(id: string) {
        this.idBike = id;
    }

    fetchBikes(): Observable<Bike[]> {
        if (this.idBike !== undefined) {
            return this.http.get<Bike[]>(`http://api.citybik.es/v2/networks/${this.idBike}`)
            .pipe(
                map((data: any) => {
                    const bikes: Bike[] = [];
                    let stations = data.network.stations;
                    for(let key in stations) {
                        bikes.push({...stations[key]})
                    }
                    return bikes;
                })
            )
        }
        //@ts-ignore
       return null
    }

    checkExistingBikes(item: AddedBikes): Observable<boolean> {
        return this.store.select('addedBikes').pipe(map(data => data.addedBikes.includes(item) ? true : false))
        /* pipe(
            map(data => data.addedBikes.includes(item) ? true : false

            ) 
        )*/
    }
}