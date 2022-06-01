import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/service/common.service';

@Component({
  selector: 'app-staff-master',
  templateUrl: './staff-master.component.html',
  styleUrls: ['./staff-master.component.css']
})
export class StaffMasterComponent implements OnInit {

  constructor(private commonService: CommonService) {
    commonService.setChildTitle('Staff Master');
   }

  ngOnInit(): void {
  }

}
