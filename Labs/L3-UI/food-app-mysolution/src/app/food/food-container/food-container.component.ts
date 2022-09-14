import { Component, OnInit } from '@angular/core';
import { FoodItem } from '../food.model';
import { FoodService } from '../food.service';

@Component({
  selector: 'app-food-container',
  templateUrl: './food-container.component.html',
  styleUrls: ['./food-container.component.scss']
})
export class FoodContainerComponent implements OnInit {

  food: FoodItem[] = [];
  selectedFood?: FoodItem = undefined;

  constructor(public fs: FoodService) { }

  ngOnInit(): void {
    this.fs.getFood().subscribe((data) => this.food = data);
  }

  onFoodSelected(fi: FoodItem) {
    console.log("in container select listerner", fi);
    this.selectedFood = { ...fi }
  }

  onFoodDeleted(fi: FoodItem) {
    console.log("in container delete listerner", fi);
    this.food = this.food.filter(i => i.id != fi.id);
  }

  onFoodItemSave(fi: FoodItem) {
    console.log("save received", fi);

    const clone = Object.assign([], this.food) as Array<FoodItem>;
    let idx = clone.findIndex((c) => c.id == fi.id);
    if (idx > -1) {
      clone[idx] = fi;
    } else {
      clone.push(fi);
    }
    this.food = clone;
    
  }
}
