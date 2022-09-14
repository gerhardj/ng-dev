import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { FoodItem } from '../food.model';

@Component({
  selector: 'app-food-edit',
  templateUrl: './food-edit.component.html',
  styleUrls: ['./food-edit.component.scss']
})
export class FoodEditComponent implements OnInit {

  @Input() foodItem?: FoodItem;
  @Output() saveFoodItem = new EventEmitter<FoodItem>();

  foodForm = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(3)]],
    price: [0.0, [Validators.min(0.0)]],
    calories: [0],
  });

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  onSave() {
    if (this.foodForm.valid && this.foodForm.dirty) { // this includes new forms without any data
      this.saveFoodItem.emit({ ...this.foodItem , ...this.foodForm.value } as FoodItem);
    }
    this.foodItem = undefined;
  }

  ngOnChanges() {
    if (this.foodItem) {
      this.foodForm.reset(this.foodItem);
    }
  }

}
