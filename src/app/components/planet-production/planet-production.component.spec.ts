import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanetProductionComponent } from './planet-production.component';

describe('PlanetProductionComponent', () => {
  let component: PlanetProductionComponent;
  let fixture: ComponentFixture<PlanetProductionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlanetProductionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanetProductionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
