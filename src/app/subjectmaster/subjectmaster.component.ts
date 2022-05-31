import { Component, OnInit } from '@angular/core';
import { CommonService } from '../service/common.service';

@Component({
  selector: 'app-subjectmaster',
  templateUrl: './subjectmaster.component.html',
  styleUrls: ['./subjectmaster.component.css']
})
export class SubjectmasterComponent implements OnInit {

  constructor(private commonService: CommonService) { }

  ngOnInit(): void {
    this.commonService.setChildTitle("Subject Master");
  }

}
