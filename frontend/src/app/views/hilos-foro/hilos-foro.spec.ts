import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HilosForo } from './hilos-foro';

describe('HilosForo', () => {
  let component: HilosForo;
  let fixture: ComponentFixture<HilosForo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HilosForo],
    }).compileComponents();

    fixture = TestBed.createComponent(HilosForo);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
