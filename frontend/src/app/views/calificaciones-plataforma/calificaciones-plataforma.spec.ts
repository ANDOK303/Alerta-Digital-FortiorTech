import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalificacionesPlataforma } from './calificaciones-plataforma';

describe('CalificacionesPlataforma', () => {
  let component: CalificacionesPlataforma;
  let fixture: ComponentFixture<CalificacionesPlataforma>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CalificacionesPlataforma],
    }).compileComponents();

    fixture = TestBed.createComponent(CalificacionesPlataforma);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
