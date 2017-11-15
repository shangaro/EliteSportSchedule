import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpService } from '../../app/shared/shared';
import { chain } from 'lodash';




/**
 * Generated class for the TeamDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-team-details',
  templateUrl: 'team-details.html',
})
export class TeamDetailsPage {
  team:any;
  games:any[];
  // //how??
  // location:any[];
  private tournamentData:any;

  constructor(public navCtrl: NavController, public navParams: NavParams,private httpService:HttpService) {
    this.team=this.navParams.data;
  
  }

  ionViewDidLoad() {
    this.tournamentData=this.httpService.getCurrentTournament();
    //Note: chain is an alternative to linq expressions in nodejs
    this.games=chain(this.tournamentData.games).filter(g=>g.team1Id===this.team.id || g.team2Id===this.team.id).value();
    console.log('ionViewDidLoad TeamDetailsPage');
    
  }

}
