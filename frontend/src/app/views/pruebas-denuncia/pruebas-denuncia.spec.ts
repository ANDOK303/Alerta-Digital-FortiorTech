import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PruebasDenuncia } from './pruebas-denuncia';

describe('PruebasDenuncia', () => {
  let component: PruebasDenuncia;
  let fixture: ComponentFixture<PruebasDenuncia>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PruebasDenuncia],
    }).compileComponents();

    fixture = TestBed.createComponent(PruebasDenuncia);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
