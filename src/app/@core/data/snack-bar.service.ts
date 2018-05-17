import { Injectable } from '@angular/core';
import {MatSnackBar} from "@angular/material";

@Injectable({
  providedIn: 'root'
})
export class SnackBarService {

  constructor(public snackBar: MatSnackBar) { }

  openSnackBar(message: string, action: string, duration?: number) {
    if(!duration) {
      duration = 5000;
    }
    this.snackBar.open(message, action, {
      duration: duration,
    });
  }
}
