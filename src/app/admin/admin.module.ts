import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CoreModule } from '../core/core.module';
import { AdminComponent } from './admin/admin.component';
import { YoutubeModule } from '../youtube/youtube.module';



@NgModule({
  declarations: [
    AdminComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    CoreModule,
    YoutubeModule
  ],
  exports: [AdminComponent]
})
export class AdminModule { }
