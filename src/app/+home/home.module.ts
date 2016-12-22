import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HOME_ROUTES } from './home.routes';
import { RouterModule } from '@angular/router';
import { FileDownloadModule } from '../shared/file-download/file-download.module';

@NgModule({
  imports: [
    CommonModule,
    FileDownloadModule,
    RouterModule.forChild(HOME_ROUTES)
  ],
  declarations: [HomeComponent]
})
export class HomeModule { }