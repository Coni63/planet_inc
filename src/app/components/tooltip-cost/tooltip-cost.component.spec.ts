import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TooltipCostComponent } from './tooltip-cost.component';

describe('TooltipCostComponent', () => {
  let component: TooltipCostComponent;
  let fixture: ComponentFixture<TooltipCostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TooltipCostComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TooltipCostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
