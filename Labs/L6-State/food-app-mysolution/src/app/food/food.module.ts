import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FoodRoutingModule } from './food-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { FoodContainerComponent } from './food-container/food-container.component';
import { FoodEditComponent } from './food-edit/food-edit.component';
import { FoodListComponent } from './food-list/food-list.component';
import { MaterialExampleModule } from 'src/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { LoadingInterceptor } from '../shared/loading-interceptor';


@NgModule({
  declarations: [
    FoodContainerComponent,
    FoodListComponent,
    FoodEditComponent,
  ],
  imports: [
    CommonModule,
    FoodRoutingModule,
    ReactiveFormsModule,
    MaterialExampleModule,
    FlexLayoutModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: LoadingInterceptor, multi: true },
  ]
})
export class FoodModule { }
