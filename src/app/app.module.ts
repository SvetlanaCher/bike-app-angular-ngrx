import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { AppComponent } from './app.component';
import { appReducer } from './store/bike.reducer';
import { BikesEffects, CitiesEffects } from './store/bike.effects';
import { NavbarComponent } from './navbar/navbar.component';
import { CitiesComponent } from './left-side/cities/cities.component';
import { BikesComponent } from './right-side/bikes/bikes.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CitiesComponent,
    BikesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    StoreModule.forRoot(appReducer),
    EffectsModule.forRoot([CitiesEffects, BikesEffects])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
