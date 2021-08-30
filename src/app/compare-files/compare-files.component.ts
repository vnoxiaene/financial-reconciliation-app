import { HttpClient, HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatchingReport } from '../matching-report.model';
import { CompareFilesService } from '../services/compare-files.service';

@Component({
  selector: 'app-compare-files',
  templateUrl: './compare-files.component.html',
  styleUrls: ['./compare-files.component.css']
})
export class CompareFilesComponent {

  selectedFile01 = null;
  selectedFile02 = null;
  matchingReport = new MatchingReport();
  showTable = false;
  showReports = false;

  constructor(private service: CompareFilesService){}

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
    this.service.compareFiles(fd)
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
