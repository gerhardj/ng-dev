import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FoodItem } from '../food.model';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.scss']
})
export class FoodListComponent implements OnInit {

  @Input() food: FoodItem[] = [];
  @Output() foodSelected = new EventEmitter<FoodItem>();
  @Output() foodDeleted = new EventEmitter<FoodItem>();

  constructor() { }

  ngOnInit(): void {
  }

  editFood(fi: FoodItem) {
    console.log("Edit clicked", fi);
    this.foodSelected.emit(fi);
    
  }

  deleteFood(fi: FoodItem) {
    console.log("Delete clicked", fi);
    this.foodDeleted.emit(fi);
    
  }

}
