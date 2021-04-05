import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanetFleetComponent } from './planet-fleet.component';

describe('PlanetFleetComponent', () => {
  let component: PlanetFleetComponent;
  let fixture: ComponentFixture<PlanetFleetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlanetFleetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanetFleetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
