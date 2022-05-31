import { Component, OnInit } from '@angular/core';
import { CommonService } from '../service/common.service';

@Component({
  selector: 'app-feedbackentry',
  templateUrl: './feedbackentry.component.html',
  styleUrls: ['./feedbackentry.component.css']
})
export class FeedbackentryComponent implements OnInit {

  constructor(private commonService: CommonService) { }

  ngOnInit(): void {
    this.commonService.setChildTitle("Feedback Entry");
  }


}
