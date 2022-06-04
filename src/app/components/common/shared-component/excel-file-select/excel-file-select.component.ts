import { Component, OnInit } from '@angular/core';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-excel-file-select',
  templateUrl: './excel-file-select.component.html',
  styleUrls: ['./excel-file-select.component.css']
})
export class ExcelFileSelectComponent implements OnInit {

  fileName: string = '';
  excelData: any = [];

  constructor() { }

  ngOnInit(): void {
  }

  onFileChange(event: any) {

    const file:File = event.target.files[0];
    if (file) {
        this.fileName = file.name;
    }

    /* wire up file reader */
    const target: DataTransfer = <DataTransfer>(event.target);
    if (target.files.length !== 1) throw new Error('Cannot use multiple files');
    const reader: FileReader = new FileReader();
    reader.onload = (e: any) => {
      /* read workbook */
      const bstr: string = e.target.result;
      const wb: XLSX.WorkBook = XLSX.read(bstr, { type: 'binary' });

      /* grab first sheet */
      const wsname: string = wb.SheetNames[0];
      const ws: XLSX.WorkSheet = wb.Sheets[wsname];

      /* save data */
      this.excelData = (XLSX.utils.sheet_to_json(ws, { header: 1 }));
      console.log(this.excelData);
    };
    reader.readAsBinaryString(target.files[0]);
  }


}
