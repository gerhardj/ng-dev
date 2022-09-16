import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder } from '@angular/forms';

import { FoodEditComponent } from './food-edit.component';

describe('FoodEditComponent', () => {
  let fb = new FormBuilder;
  let component: FoodEditComponent;
  let fixture: ComponentFixture<FoodEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FoodEditComponent ],
      providers: [{provide: FormBuilder, useValue: fb}]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FoodEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
