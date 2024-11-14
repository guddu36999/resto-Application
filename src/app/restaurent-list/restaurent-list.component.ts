import { Component } from '@angular/core';
import {RestaurantDataService} from '../services/restaurent-data.service'

@Component({
  selector: 'app-restaurent-list',
  templateUrl: './restaurent-list.component.html',
  styleUrl: './restaurent-list.component.css'
})
export class RestaurentListComponent {

  data:any;
  constructor(private x:RestaurantDataService){
    this.data=x.restaurants;
  }

}
