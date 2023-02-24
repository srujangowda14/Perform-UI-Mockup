import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedToFFGEComponent } from './feed-to-ffge.component';

describe('FeedToFFGEComponent', () => {
  let component: FeedToFFGEComponent;
  let fixture: ComponentFixture<FeedToFFGEComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeedToFFGEComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FeedToFFGEComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
