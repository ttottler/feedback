import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/service/common.service';

@Component({
  selector: 'app-question-master',
  templateUrl: './question-master.component.html',
  styleUrls: ['./question-master.component.css']
})
export class QuestionMasterComponent implements OnInit {

  constructor(private commonService: CommonService) {
    commonService.setChildTitle('Question Master');
   }

  ngOnInit(): void {
  }

}
