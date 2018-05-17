import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { VideoGamePage } from './video-game';

@NgModule({
  declarations: [
    VideoGamePage,
  ],
  imports: [
    IonicPageModule.forChild(VideoGamePage),
  ],
})
export class VideoGamePageModule {}
