import { ComponentFixture, TestBed } from '@angular/core/testing';

import { L2firstpageComponent } from './l2firstpage.component';

describe('L2firstpageComponent', () => {
  let component: L2firstpageComponent;
  let fixture: ComponentFixture<L2firstpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ L2firstpageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(L2firstpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
