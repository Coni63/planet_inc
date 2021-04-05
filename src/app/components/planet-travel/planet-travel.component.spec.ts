import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanetTravelComponent } from './planet-travel.component';

describe('PlanetTravelComponent', () => {
  let component: PlanetTravelComponent;
  let fixture: ComponentFixture<PlanetTravelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlanetTravelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanetTravelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
