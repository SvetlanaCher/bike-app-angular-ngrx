import { AfterViewChecked, ChangeDetectorRef, Component, Output, ViewChild } from '@angular/core';
import { CitiesComponent } from './left-side/cities/cities.component';
import { BikesComponent } from './right-side/bikes/bikes.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewChecked {

  
    @ViewChild(CitiesComponent)
    viewCities!: CitiesComponent;
    @ViewChild(BikesComponent)
    viewBikes!: BikesComponent;

    @Output() idParent!: string;
    @Output() countBikes: any ;
  
    constructor(private cdref: ChangeDetectorRef) {}

    ngAfterContentChecked() {
      if (this.viewCities) {
        this.idParent = this.viewCities.idCity;
      }
    }
  
    ngAfterViewChecked() {
    }
}
