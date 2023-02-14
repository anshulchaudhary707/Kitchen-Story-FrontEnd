import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllOrderPlacedComponent } from './all-order-placed.component';

describe('AllOrderPlacedComponent', () => {
  let component: AllOrderPlacedComponent;
  let fixture: ComponentFixture<AllOrderPlacedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllOrderPlacedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllOrderPlacedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
