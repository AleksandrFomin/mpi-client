import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarrierPageComponent } from './carrier-page.component';

describe('CarrierPageComponent', () => {
  let component: CarrierPageComponent;
  let fixture: ComponentFixture<CarrierPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarrierPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarrierPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
