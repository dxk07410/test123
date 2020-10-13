import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BasicflowComponent } from './basicflow/basicflow.component';
import { BasicSearchComponent } from './basic-search/basic-search.component';
import { FileUploadComponent } from './basicflow/file-upload/file-upload.component';
import { WorkflowComponent } from './workflow/workflow.component';


const routes: Routes = [
  {path: 'dashboard', component: DashboardComponent}, 
  {path: 'basicflow', component: BasicflowComponent},
  {path: 'basicsearch', component: BasicSearchComponent}, 
  {path: 'workflow', component: WorkflowComponent}, 
  {path: 'fileupload', component: FileUploadComponent}, 
  {path: '**', redirectTo: 'dashboard'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { } 
// export const RoutingComponent = [AddDocumentComponent,FileUploadComponent];