import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FoodItem } from './food.model';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor(private http: HttpClient) { }

  getFood() {
    return this.http.get<FoodItem[]>('assets/food.json');
  }
}
