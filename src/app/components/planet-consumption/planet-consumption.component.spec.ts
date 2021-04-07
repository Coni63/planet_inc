import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanetConsumptionComponent } from './planet-consumption.component';

describe('PlanetConsumptionComponent', () => {
  let component: PlanetConsumptionComponent;
  let fixture: ComponentFixture<PlanetConsumptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlanetConsumptionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanetConsumptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
