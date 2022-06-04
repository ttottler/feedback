import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedbackTypeMasterComponent } from './feedback-type-master.component';

describe('FeedbackTypeMasterComponent', () => {
  let component: FeedbackTypeMasterComponent;
  let fixture: ComponentFixture<FeedbackTypeMasterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeedbackTypeMasterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FeedbackTypeMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
