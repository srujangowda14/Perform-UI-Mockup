import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FundtrackingComponent } from './fundtracking.component';

describe('FundtrackingComponent', () => {
  let component: FundtrackingComponent;
  let fixture: ComponentFixture<FundtrackingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FundtrackingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FundtrackingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
