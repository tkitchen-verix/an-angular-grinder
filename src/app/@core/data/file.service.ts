import { Injectable } from '@angular/core';
import {AngularFireStorage} from "angularfire2/storage";
import {Observable} from "rxjs/Rx";

@Injectable({
  providedIn: 'root'
})
export class FileService {
  uploadPercent: Observable<number>;
  downloadURL: Observable<string>;
  constructor(private storage: AngularFireStorage) { }

  uploadFile(event) {
    const file = event.target.files[0];
    const filePath = 'name-your-file-path-here';
    const task = this.storage.upload(filePath, file);

    // observe percentage changes
    this.uploadPercent = task.percentageChanges();
    // get notified when the download URL is available
    this.downloadURL = task.downloadURL();

  }
}
