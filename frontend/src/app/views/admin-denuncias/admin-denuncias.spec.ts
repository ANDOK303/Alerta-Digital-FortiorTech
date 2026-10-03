import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminDenuncias } from './admin-denuncias';

describe('AdminDenuncias', () => {
  let component: AdminDenuncias;
  let fixture: ComponentFixture<AdminDenuncias>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminDenuncias],
    }).compileComponents();

    fixture = TestBed.createComponent(AdminDenuncias);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
