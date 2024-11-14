import { Component } from '@angular/core';
import { RestaurantDataService } from '../services/restaurent-data.service';

@Component({
  selector: 'app-add-restaurent',
  templateUrl: './add-restaurent.component.html',
  styleUrl: './add-restaurent.component.css'
})
export class AddRestaurentComponent {

  restaurent_id: any;
  restaurent_name: any;
  location: any;
  seat_avilable: any;
  cuisines: any;
  restaurent_contact: any;

  constructor(private x: RestaurantDataService) { }

  collect(id: any, name: any, loc: any, seat: any, phone: any) {
    this.restaurent_id=id;
    this.restaurent_name=name;
    this.location=loc;
    this.seat_avilable=seat;
    this.restaurent_contact=phone;
    const data = {
      id: this.restaurent_id,
      RestaurantName: this.restaurent_name,
      RestaurantLocation: this.location,
      seat_available: this.seat_avilable,
      Restaurant_contact: this.restaurent_contact,

    };

    this.x.add_restaurent(data);
    
  }

}
