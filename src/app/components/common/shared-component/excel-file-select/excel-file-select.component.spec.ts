import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExcelFileSelectComponent } from './excel-file-select.component';

describe('ExcelFileSelectComponent', () => {
  let component: ExcelFileSelectComponent;
  let fixture: ComponentFixture<ExcelFileSelectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExcelFileSelectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExcelFileSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
