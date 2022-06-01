import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentSubjectMasterComponent } from './student-subject-master.component';

describe('StudentSubjectMasterComponent', () => {
  let component: StudentSubjectMasterComponent;
  let fixture: ComponentFixture<StudentSubjectMasterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentSubjectMasterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentSubjectMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
