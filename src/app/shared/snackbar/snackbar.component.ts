import { Component } from '@angular/core';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';

@Component({
  selector: 'app-snackbar',
  templateUrl: './snackbar.component.html',
  styleUrls: ['./snackbar.component.scss']
})
export class SnackbarComponent {
  constructor(private _snackBar: MatSnackBar){}

  openSnackBar(message: string, background: string){
    const   config = new MatSnackBarConfig();
    config.duration = 3000,
    config.panelClass = [background];
    config.verticalPosition = 'top';
    config.horizontalPosition = 'right';
    this._snackBar.open(message, undefined, config);
  }
}
