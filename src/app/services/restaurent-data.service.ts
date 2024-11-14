import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RestaurantDataService {

  restaurant_id: number = 1;
  restaurants = [
    {
      id: this.restaurant_id++,
      RestaurantName: "Lazeez Biryani House",
      RestaurantLocation: "Tower Chowk, Darbhanga, Bihar",
      seat_available: 3,
      Restaurant_contact: 6201713688,
      cuisines: ["Biryani", "Indian", "Mughlai"]
    },
    {
      id: this.restaurant_id++,
      RestaurantName: "Saffron Restaurant",
      RestaurantLocation: "Lal Bagh, Darbhanga, Bihar",
      seat_available: 70,
      Restaurant_contact: 92301713688,
      cuisines: ["North Indian", "Chinese", "Tandoor"]
    },
    {
      id: this.restaurant_id++,
      RestaurantName: "Darbar Family Restaurant",
      RestaurantLocation: "Station Road, Darbhanga, Bihar",
      seat_available: 30,
      Restaurant_contact: 96701713688,
      cuisines: ["Indian", "South Indian", "Continental"]
    },
    {
      id: this.restaurant_id++,
      RestaurantName: "Pind Balluchi",
      RestaurantLocation: "Madhubani Road, Laheriasarai, Darbhanga, Bihar",
      seat_available: 25,
      Restaurant_contact: 9201713688,
      cuisines: ["Punjabi", "North Indian", "Chinese"]
    },
    {
      id: this.restaurant_id++,
      RestaurantName: "Rasoi Darbar",
      RestaurantLocation: "Donar, Darbhanga, Bihar",
      seat_available: 57,
      Restaurant_contact: 8201713688,
      cuisines: ["Indian", "Biryani", "Fast Food"]
    },
    {
      id: this.restaurant_id++,
      RestaurantName: "Royal Taste",
      RestaurantLocation: "Mirzapur Chowk, Darbhanga, Bihar",
      seat_available: 40,
      Restaurant_contact: 9123456789,
      cuisines: ["Indian", "Chinese", "Italian"]
    }
  ];

  customers=[
    {
      user_id:12,
      name:'xyz',
      Email: "Mirzapur Chowk, Darbhanga, Bihar",
      Phone: 40,

    },
  ];

  add_restaurent(data: any) {
    this.restaurants.push(data);
  }

  update_restaurent(id:number,data:any):boolean{
    for(let i=0;i<this.restaurants.length;i++){
      if(this.restaurants[i].id === id){
        this.restaurants[i].RestaurantName=data.RestaurantName;
        this.restaurants[i].RestaurantLocation=data.RestaurantLocation;
        this.restaurants[i].seat_available=data.seat_available;
        this.restaurants[i].Restaurant_contact=data.Restaurant_contact;
        return true;
      }
    }
    return false;
  }


  booking(id:number): boolean {
    for(let i=0;i<this.restaurants.length;i++){
      if(this.restaurants[i].id===id){
        if(this.restaurants[i].seat_available>0){
          this.restaurants[i].seat_available--;
          return true;
        }
        return false;
      }
    }
    return false;
  }
  
  add_users(customer:any){
    this.customers.push(customer);
  }

  constructor() { }
}
