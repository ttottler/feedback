import { Component, OnInit } from '@angular/core';
import { CommonService } from '../service/common.service';

@Component({
  selector: 'app-studentmaster',
  templateUrl: './studentmaster.component.html',
  styleUrls: ['./studentmaster.component.css']
})
export class StudentmasterComponent implements OnInit {

  constructor(private commonService: CommonService) { }

  ngOnInit(): void {
    this.commonService.setChildTitle("Student Master");
  }

}
