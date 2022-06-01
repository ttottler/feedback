import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedbackMasterComponent } from './feedback-master.component';

describe('FeedbackMasterComponent', () => {
  let component: FeedbackMasterComponent;
  let fixture: ComponentFixture<FeedbackMasterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeedbackMasterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FeedbackMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
