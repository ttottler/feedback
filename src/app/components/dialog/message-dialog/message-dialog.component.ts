import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-message-dialog',
  templateUrl: './message-dialog.component.html',
  styleUrls: ['./message-dialog.component.css']
})
export class MessageDialogComponent {

  infoMetaData: any;

  constructor(public matDialogRef: MatDialogRef<MessageDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
      this.infoMetaData = data;
      this.matDialogRef.disableClose = true;
  }

  ngAfterViewInit(): void {
    document.getElementById("butOk")?.focus();
  }

  ok() {
    this.matDialogRef.close();
  }

}
