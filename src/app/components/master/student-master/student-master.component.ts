import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/service/common.service';

@Component({
  selector: 'app-student-master',
  templateUrl: './student-master.component.html',
  styleUrls: ['./student-master.component.css']
})
export class StudentMasterComponent implements OnInit {

  constructor(private commonService: CommonService) {
    commonService.setChildTitle('Student Master');
   }

  ngOnInit(): void {
  }

}
