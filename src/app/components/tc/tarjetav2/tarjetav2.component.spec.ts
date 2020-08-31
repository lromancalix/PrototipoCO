import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Tarjetav2Component } from './tarjetav2.component';

describe('Tarjetav2Component', () => {
  let component: Tarjetav2Component;
  let fixture: ComponentFixture<Tarjetav2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Tarjetav2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Tarjetav2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
