import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TeamDetailsPage } from './team-details';
import { Utils } from '../../app/shared/Utils';

@NgModule({
  declarations: [
    TeamDetailsPage,
  ],
  imports: [
    IonicPageModule.forChild(TeamDetailsPage),
  ],
  providers:[Utils]
})
export class TeamDetailsPageModule {}
