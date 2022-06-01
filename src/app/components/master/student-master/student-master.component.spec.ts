import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentMasterComponent } from './student-master.component';

describe('StudentMasterComponent', () => {
  let component: StudentMasterComponent;
  let fixture: ComponentFixture<StudentMasterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentMasterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
