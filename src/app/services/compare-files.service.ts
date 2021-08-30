import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CompareFilesService {

  constructor(private http: HttpClient){}

  compareFiles(fd: FormData){
  return this.http.post('https://financial-reconciliation.herokuapp.com/files', fd);
  }
  
}
