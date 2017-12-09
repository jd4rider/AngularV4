import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { VidoelistComponent } from './vidoelist/vidoelist.component';
import { VideoListComponent } from './video-list/video-list.component';


@NgModule({
  declarations: [
    AppComponent,
    VidoelistComponent,
    VideoListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
