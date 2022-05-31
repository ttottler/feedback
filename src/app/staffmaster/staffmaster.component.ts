import { Component, OnInit } from '@angular/core';
import { CommonService } from '../service/common.service';

@Component({
  selector: 'app-staffmaster',
  templateUrl: './staffmaster.component.html',
  styleUrls: ['./staffmaster.component.css']
})
export class StaffmasterComponent implements OnInit {

  constructor(private commonService: CommonService) { }

  ngOnInit(): void {
    this.commonService.setChildTitle("Staff Master");
  }

}
