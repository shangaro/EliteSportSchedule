import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LiveScorePage } from './live-score';

@NgModule({
  declarations: [
    LiveScorePage,
  ],
  imports: [
    IonicPageModule.forChild(LiveScorePage),
  ],
})
export class LiveScorePageModule {}
