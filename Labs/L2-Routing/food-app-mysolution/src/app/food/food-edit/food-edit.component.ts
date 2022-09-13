import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FoodItem } from '../food.model';

@Component({
  selector: 'app-food-edit',
  templateUrl: './food-edit.component.html',
  styleUrls: ['./food-edit.component.scss']
})
export class FoodEditComponent implements OnInit {

  @Input() foodItem?: FoodItem;
  @Output() saveFoodItem = new EventEmitter<FoodItem>();

  constructor() { }

  ngOnInit(): void {
  }

  onSave() {
    this.saveFoodItem.emit(this.foodItem);
    this.foodItem = undefined;
  }

}
