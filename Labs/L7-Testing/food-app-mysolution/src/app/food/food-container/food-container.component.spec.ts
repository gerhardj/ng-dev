import { HttpClient } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Observable } from 'rxjs';
import { FoodService } from '../food.service';

import { FoodContainerComponent } from './food-container.component';

describe('FoodContainerComponent', () => {
  // let http = HttpClientTestingModule
  let fs = {
    getFood: () => { return new Observable; }
  } as unknown as FoodService;
  let component: FoodContainerComponent;
  let fixture: ComponentFixture<FoodContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FoodContainerComponent ],
      providers: [{provide: FoodService, useValue: fs}]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FoodContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
