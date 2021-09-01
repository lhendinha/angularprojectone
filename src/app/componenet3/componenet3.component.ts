import {Component, OnInit} from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';


@Component({
  selector: 'app-componenet3',
  templateUrl: './componenet3.component.html',
  styleUrls: ['./componenet3.component.css'],
})
export class Componenet3Component implements OnInit {
  panelOpenState = false;

  constructor(private _snackBar: MatSnackBar) {
    
  }

  ngOnInit(): void {
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action);
  }
}
