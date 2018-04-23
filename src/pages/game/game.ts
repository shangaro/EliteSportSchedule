import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpService } from '../../app/shared/shared';
import _ from 'lodash';
import { TeamHomePage } from '../team-home/team-home';
import { MapPage } from '../map/map';

declare var window:any;

@IonicPage()

@Component({
  selector: 'page-game',
  templateUrl: 'game.html',
})
export class GamePage {

  public game:any;

  constructor(public navCtrl:NavController,public httpService:HttpService, public navParams: NavParams) {
    this.game=this.navParams.data;



    console.log("**game object", this.game);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GamePage');
  }
  teamTapped(teamName):any{
    let team=_.find(this.httpService.getCurrentTournament().teams,t=>t.name==teamName);
    this.navCtrl.push(TeamHomePage,team);

  }
  IsWinner(teamScore,opponentScore):string{
    return teamScore > opponentScore ? "primary" : "danger"

  }
  goHome(){
    this.navCtrl.popToRoot();
  }
  goToMap(){
    this.navCtrl.push(MapPage,this.game);
  }
  goToDirection(){
    let tournamentData=this.httpService.getCurrentTournament();
    let location=tournamentData.locations[this.game.locationId];

    window.location=`geo:${location.latitude},${location.longitude};u-35`;
  }


}
