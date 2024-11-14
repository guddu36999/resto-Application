import { Component } from '@angular/core';
import { RestaurantDataService } from '../services/restaurent-data.service';

@Component({
  selector: 'app-seat-booking',
  templateUrl: './seat-booking.component.html',
  styleUrl: './seat-booking.component.css'
})
export class SeatBookingComponent {

  id:any;
  user_id:any;
  name:any;
  email:any;
  phone_number:any;

  constructor(private x:RestaurantDataService){ }

  collect(id:any,d1:any,d2:any,d3:any,d4:any){
    this.id=Number(id);
    this.user_id=d1;
    this.name=d2;
    this.email=d3;
    this.phone_number=d4;
    const data={
      id:this.user_id,
      name:this.name,
      email:this.email,
      phone_number:this.phone_number,
    }

    let status:boolean=this.x.booking(this.id);
    if(status){
      this.x.add_users(data);
      alert("SEAT BOKKED!");
    }
    else alert("SEAT NOT AVAILABLE!");
    

  }


}
