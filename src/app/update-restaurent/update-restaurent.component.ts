import { Component } from '@angular/core';
import { RestaurantDataService } from '../services/restaurent-data.service';

@Component({
  selector: 'app-update-restaurent',
  templateUrl: './update-restaurent.component.html',
  styleUrls: ['./update-restaurent.component.css']
})
export class UpdateRestaurentComponent {

  id:any;
  name:any;
  location:any;
  seat:any;
  contact:any;
  constructor(private restaurantService: RestaurantDataService) {}

  collect(id: any, name: any, location: any, seat: any, contact: any) {
    this.id=Number(id);
    this.name= name;
    this.location=location;
    this.seat=seat;
    this.contact=contact;
    const data = {
      RestaurantName: this.name,
      RestaurantLocation: this.location,
      seat_available: this.seat, 
      Restaurant_contact:this.contact,
    };
     this.restaurantService.update_restaurent(this.id, data);
  }

}
