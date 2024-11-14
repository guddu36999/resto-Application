import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddRestaurentComponent } from './add-restaurent/add-restaurent.component';
import { UpdateRestaurentComponent } from './update-restaurent/update-restaurent.component';
import { RestaurentListComponent } from './restaurent-list/restaurent-list.component';
import { SeatBookingComponent } from './seat-booking/seat-booking.component';

const routes: Routes = [
  {
    path:'add',
    component:AddRestaurentComponent

  },
  {
    path:'update',
    component:UpdateRestaurentComponent
    
  },
  {
    path:'list',
    component:RestaurentListComponent

  },
  {
    path:'book',
    component:SeatBookingComponent
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
