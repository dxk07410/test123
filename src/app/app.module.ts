import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import {TableModule} from 'primeng/table';
import {ChartModule} from 'primeng/chart';
import {CalendarModule} from 'primeng/calendar';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BasicSearchComponent } from './basic-search/basic-search.component';
import { WorkflowComponent } from './workflow/workflow.component';
import { BasicflowComponent } from './basicflow/basicflow.component';
import { AddDocumentComponent } from './basicflow/add-document/add-document.component';
import { FileUploadComponent } from './basicflow/file-upload/file-upload.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DashboardComponent,
    BasicSearchComponent,
    WorkflowComponent,
    BasicflowComponent,
    AddDocumentComponent,
    FileUploadComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    ChartModule,
    CalendarModule,
    BrowserModule,
    BrowserAnimationsModule,
    TableModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
