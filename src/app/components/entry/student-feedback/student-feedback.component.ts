import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/service/common.service';

@Component({
  selector: 'app-student-feedback',
  templateUrl: './student-feedback.component.html',
  styleUrls: ['./student-feedback.component.css']
})
export class StudentFeedbackComponent implements OnInit {

  constructor(private commonService: CommonService) {
    commonService.setChildTitle('Student Feedback');
   }

  ngOnInit(): void {
  }

}
