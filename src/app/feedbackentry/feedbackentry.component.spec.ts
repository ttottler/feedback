import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedbackentryComponent } from './feedbackentry.component';

describe('FeedbackentryComponent', () => {
  let component: FeedbackentryComponent;
  let fixture: ComponentFixture<FeedbackentryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeedbackentryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FeedbackentryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
