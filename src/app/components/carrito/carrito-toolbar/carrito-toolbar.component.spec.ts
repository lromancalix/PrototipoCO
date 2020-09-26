import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarritoToolbarComponent } from './carrito-toolbar.component';

describe('CarritoToolbarComponent', () => {
  let component: CarritoToolbarComponent;
  let fixture: ComponentFixture<CarritoToolbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarritoToolbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarritoToolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
