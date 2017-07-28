import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShipOrderLinesComponent } from './ship-order-lines.component';

describe('ShipOrderLinesComponent', () => {
  let component: ShipOrderLinesComponent;
  let fixture: ComponentFixture<ShipOrderLinesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShipOrderLinesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShipOrderLinesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
