import { Component, OnInit } from '@angular/core';
import { CommonService } from '../service/common.service';

@Component({
  selector: 'app-student-subject-master',
  templateUrl: './student-subject-master.component.html',
  styleUrls: ['./student-subject-master.component.css']
})
export class StudentSubjectMasterComponent implements OnInit {

  constructor(private commonService: CommonService) { }

  ngOnInit(): void {
    this.commonService.setChildTitle("Student Subject Master");
  }

}
