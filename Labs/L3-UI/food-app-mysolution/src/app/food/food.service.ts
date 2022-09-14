import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { FoodItem } from './food.model';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  private url = `${environment.api}food`;

  constructor(private http: HttpClient) { }

  getFood() {
    return this.http.get<FoodItem[]>(this.url);
  }

  getFoodItem(id: number) {
    return this.http.get<FoodItem>(`${this.url}/${id}`);
  }

  addFoodItem(foodItem: FoodItem) {
    return this.http.post<FoodItem>(this.url, foodItem);
  }

  updateFoodItem(foodItem: FoodItem) {
    return this.http.put<FoodItem>(`${this.url}/${foodItem.id}`, foodItem);
  }

  deleteFoodItem(id: number) {
    return this.http.delete(`${this.url}/${id}`);
  }

}
