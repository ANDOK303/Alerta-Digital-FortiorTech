import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminHilos } from './admin-hilos';

describe('AdminHilos', () => {
  let component: AdminHilos;
  let fixture: ComponentFixture<AdminHilos>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminHilos],
    }).compileComponents();

    fixture = TestBed.createComponent(AdminHilos);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
