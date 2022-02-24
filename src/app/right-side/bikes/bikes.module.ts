import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { bikesNeedsReducer, bikesReducer } from 'src/app/store/bike.reducer';
import { EffectsModule } from '@ngrx/effects';
import { BikesEffects } from '../../store/bike.effects';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature('bikesNeedsReducer', bikesNeedsReducer),
    EffectsModule.forFeature([BikesEffects])
  ]
})
export class BikesModule { }

