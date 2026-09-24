import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicacionesForo } from './publicaciones-foro';

describe('PublicacionesForo', () => {
  let component: PublicacionesForo;
  let fixture: ComponentFixture<PublicacionesForo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PublicacionesForo],
    }).compileComponents();

    fixture = TestBed.createComponent(PublicacionesForo);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
