import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { citiesReducer } from 'src/app/store/bike.reducer';
import { EffectsModule } from '@ngrx/effects';
import { CitiesEffects } from './../../store/bike.effects';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature('cities', citiesReducer),
    EffectsModule.forFeature([CitiesEffects])
  ]
})
export class CitiesModule { }

