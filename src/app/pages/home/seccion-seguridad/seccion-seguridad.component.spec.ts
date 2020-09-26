import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeccionSeguridadComponent } from './seccion-seguridad.component';

describe('SeccionSeguridadComponent', () => {
  let component: SeccionSeguridadComponent;
  let fixture: ComponentFixture<SeccionSeguridadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeccionSeguridadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeccionSeguridadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
