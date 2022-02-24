import { Component, Input, OnInit } from '@angular/core';
import { State, Store } from '@ngrx/store';
import { map, Observable, take, tap,filter, first } from 'rxjs';
import { deleted, saved, isBikeSaved, loadBikes } from 'src/app/store/bike.actions';
import { selectCountBikes } from 'src/app/store/bike.selectors';
import { Bike } from '../../app.interface';
import { AppState } from 'src/app/store/bike.state';
import { getBikes } from './../../store/bike.selectors';
import { BikesService } from './../../service/bikes.service';
import { AddedBikes } from './../../app.interface';

@Component({
  selector: 'app-bikes',
  templateUrl: './bikes.component.html',
  styleUrls: ['./bikes.component.scss']
})
export class BikesComponent implements OnInit {
  bikes!: Observable<Bike[]>;

  checkStore$!: any;
  storageCopy$: any;
  loading: boolean = true;
  @Input() id: any;

  constructor(
    public store: Store<AppState>,
    public bikeService: BikesService
  ) { 
    //this.store.select('addedBikes').pipe(
      //tap(data => console.log(data)),
      //filter(data => console.log(data))
      
    //)
    /* this.checkStore$ = store.select('addedBikes'); */
    //this.storageCopy$ = 
    
  }

  ngOnInit(): void {
    this.store.select('addedBikes')
    .subscribe( res => {
      console.log(res.addedBikes);
      this.storageCopy$ = res.addedBikes;
    })
    
      //создать подписку на стор в новой переменной
  }
  
  ngOnChanges(): void {
    if (this.id) {
      this.bikeService.getId(this.id);
      this.store.dispatch(loadBikes());
      this.loading = false;
      this.bikes = this.store.select(getBikes);
    }
    if (this.storageCopy$) {
      this.checkStore$ = JSON.parse(JSON.stringify(this.storageCopy$))
      console.log(this.storageCopy$)
      console.log(this.checkStore$)
    }
    
  }

  saveBike(item: AddedBikes) {
    this.store.dispatch(saved(item));
    this.isBikeSaved(item)
  }

  deleteBike(item: AddedBikes) {
    this.store.dispatch(deleted(item));
    this.isBikeSaved(item)
  }

  isBikeSaved(item: AddedBikes) {
    console.log(item)
console.log(this.checkStore$.includes(item))
console.log(this.checkStore$)
    if (item) {
      if (this.checkStore$.includes(item)) {
        return console.log('ok')
      }
      //return console.log('not ok')
    }
    /* return this.store.pipe(
      map( state => {
        let array = state.addedBikes;
        array.addedBikes.find(exist => exist === item)
      }),
      map((exist: any) => {
        if (!!exist ) return true;
        return false;
      })
    ) */
    /* if (this.checkStore$.includes(item)) {
      console.log('finally')
    }  */
    //this.store.select('addedBikes').pipe(
      //filter(data => {
        //@ts-ignore
        //data.addedBikes !== item
        //return true}
      //)/* ,
      //map(data => console.log(data, 'exist')) */
    //).subscribe(x => console.log(x))
    //console.log(this.bikeService.checkExistingBikes(item))
    //this.bikeService.checkExistingBikes(item)
  }

}

