import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpService } from '../../app/shared/shared';
import _ from 'lodash';

/**
 * Generated class for the ScoreBoardPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-score-board',
  templateUrl: 'score-board.html',
})
export class ScoreBoardPage {
  public selectedPlayers;
  public game:any;

  constructor(public navCtrl: NavController, public navParams: NavParams,private httpService:HttpService) {
    this.game=this.navParams.data;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ScoreBoardPage');
    this.FindTeams(this.game.tournamentId);
  }

  FindTeams(tournamentId:number){
    
    this.httpService.getTeamsFromTourney(tournamentId).then(data=>{
      let teams=data;
      let team= _.find(teams,t=>t.id==this.game.teamId);
      this.selectedPlayers=team.players;
      console.log("**selectedTeam",team);
      console.log(" selected players",this.selectedPlayers);
    });
    
  }
        
      
 



}
