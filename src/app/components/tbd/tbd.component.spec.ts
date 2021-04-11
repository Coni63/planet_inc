import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TbdComponent } from './tbd.component';

describe('TbdComponent', () => {
  let component: TbdComponent;
  let fixture: ComponentFixture<TbdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TbdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TbdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
