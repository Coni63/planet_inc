import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanetStorageComponent } from './planet-storage.component';

describe('PlanetStorageComponent', () => {
  let component: PlanetStorageComponent;
  let fixture: ComponentFixture<PlanetStorageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlanetStorageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanetStorageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
