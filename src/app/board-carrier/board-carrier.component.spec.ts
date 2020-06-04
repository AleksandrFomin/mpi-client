import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BoardCarrierComponent } from './board-carrier.component';

describe('BoardCarrierComponent', () => {
  let component: BoardCarrierComponent;
  let fixture: ComponentFixture<BoardCarrierComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BoardCarrierComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoardCarrierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
