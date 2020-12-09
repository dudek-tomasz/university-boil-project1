import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Boil1Component } from './boil1.component';

describe('Boil1Component', () => {
  let component: Boil1Component;
  let fixture: ComponentFixture<Boil1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Boil1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Boil1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
