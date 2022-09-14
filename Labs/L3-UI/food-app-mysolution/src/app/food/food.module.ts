import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FoodRoutingModule } from './food-routing.module';
import { FormsModule } from '@angular/forms';
import { FoodContainerComponent } from './food-container/food-container.component';
import { FoodEditComponent } from './food-edit/food-edit.component';
import { FoodListComponent } from './food-list/food-list.component';
import { MaterialExampleModule } from 'src/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';


@NgModule({
  declarations: [
    FoodContainerComponent,
    FoodListComponent,
    FoodEditComponent,
  ],
  imports: [
    CommonModule,
    FoodRoutingModule,
    FormsModule,
    MaterialExampleModule,
    FlexLayoutModule
  ]
})
export class FoodModule { }
