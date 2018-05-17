import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TourneyPage } from './tourney';

@NgModule({
  declarations: [
    TourneyPage,
  ],
  imports: [
    IonicPageModule.forChild(TourneyPage),
  ],
})
export class TourneyPageModule {}
