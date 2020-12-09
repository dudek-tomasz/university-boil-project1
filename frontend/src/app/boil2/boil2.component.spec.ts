import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Boil2Component } from './boil2.component';

describe('Boil2Component', () => {
  let component: Boil2Component;
  let fixture: ComponentFixture<Boil2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Boil2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Boil2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
