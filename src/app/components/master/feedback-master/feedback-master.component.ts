import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/service/common.service';

@Component({
  selector: 'app-feedback-master',
  templateUrl: './feedback-master.component.html',
  styleUrls: ['./feedback-master.component.css']
})
export class FeedbackMasterComponent implements OnInit {

  constructor(commonService: CommonService) {
    commonService.setChildTitle('FeedBack Type Master');
   }

  ngOnInit(): void {
  }

}
