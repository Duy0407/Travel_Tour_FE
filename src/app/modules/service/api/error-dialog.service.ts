import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ErrorDialogComponent } from 'src/app/shared/component/error-dialog/error-dialog.component';

@Injectable({
  providedIn: 'root'
})
export class ErrorDialogService {

  constructor(private dialog: MatDialog) { }

  openErrorDialog(errorMessage: string){
    this.dialog.open(ErrorDialogComponent, {
      width: '400px',
      data: errorMessage
    })
  }
}
