import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/service/common.service';

@Component({
  selector: 'app-subject-master',
  templateUrl: './subject-master.component.html',
  styleUrls: ['./subject-master.component.css']
})
export class SubjectMasterComponent implements OnInit {

  constructor(private commonService: CommonService) {
    commonService.setChildTitle('Subject Master');
   }

  ngOnInit(): void {
  }

}
