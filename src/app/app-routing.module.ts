import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompareFilesComponent } from './compare-files/compare-files.component';

const routes: Routes = [
  { path: '', component: CompareFilesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }