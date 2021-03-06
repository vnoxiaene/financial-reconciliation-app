import { HttpClient, HttpParams } from '@angular/common/http';
import { Component } from '@angular/core';
import { MatchingReport } from './matching-report.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  selectedFile01 = null;
  selectedFile02 = null;
  matchingReport = new MatchingReport();
  showTable = false;
  showReports = false;

  constructor(private http: HttpClient){}

  selectFile01(event){
    this.selectedFile01 =<File> event.target.files[0];
  }
  selectFile02(event){
    this.selectedFile02 =<File> event.target.files[0];
  }
  
  
  showResults(){
    this.showTable = true;
  }
  onUpload(){
    const fd = new FormData();
    fd.append('file01', this.selectedFile01, this.selectedFile01.name);
    fd.append('file02', this.selectedFile02, this.selectedFile02.name);
    let params = new HttpParams();
    const options = {
      params: params,
      reportProgress: true,
    };
    this.http.post('http://localhost:8080/files', fd, options)
    .subscribe({
      next: (res:MatchingReport) => {
        this.matchingReport.results = res.results;
        this.matchingReport.unmatchedReports = res.unmatchedReports;
        this.showReports = true;
      },
      error: error => {
            console.error('There was an error!', error);
      }  
    })
      
  }
  





 


  
}
