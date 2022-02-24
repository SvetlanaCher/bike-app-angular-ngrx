import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map, Observable } from 'rxjs';
import { City } from '../app.interface';



@Injectable({providedIn: 'root'})
export class CitiesService {

    constructor(private http: HttpClient) {};

    fetchCities(): Observable<City[]> {
        return this.http.get<City[]>('http://api.citybik.es/v2/networks/')
            .pipe(
                map((data: any) => {
                    const cities: City[] = [];
                    let networks = data.networks;
                    for(let key in networks) {
                        cities.push({...networks[key]})
                    }
                    return cities;
                })
            )
    }
}