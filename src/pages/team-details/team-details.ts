import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpService } from '../../app/shared/shared';
import { chain, find } from 'lodash';




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
  teamStanding:any;
  // //how??
  // location:any[];
  private tournamentData:any;

  constructor(public navCtrl: NavController, private navParams: NavParams,private httpService:HttpService) {
    this.team=this.navParams.data;
    this.teamStanding={};
  }

  ionViewDidLoad() {
    this.team=this.navParams.data;
    this.tournamentData=this.httpService.getCurrentTournament();
    var games= this.tournamentData.games;
    //Note: chain is an alternative to linq expressions in nodejs
    this.games = chain(this.tournamentData.games)
    .filter(g => this.team.id===g.team1Id || this.team.id === g.team2Id)
    .map(g => {
        let isTeam1 = (g.team1Id === this.team.id);
        let opponentName = isTeam1 ? g.team2 : g.team1;
        let scoreDisplay = this.getScoreDisplay(isTeam1, g.team1Score, g.team2Score);
        return {
            gameId: g.id,
            opponent: opponentName,
            time: Date.parse(g.time),
            location: g.location,
            locationUrl: g.locationUrl,
            scoreDisplay: scoreDisplay,
            homeAway: (isTeam1 ? "vs." : "at")
        };
    })
    .value();
    // second parameter is a filter criteria
    this.teamStanding=find(this.tournamentData.standings,{'teamId':this.team.id});
    console.log('ionViewDidLoad TeamDetailsPage');

  }

  getScoreDisplay(isTeam1,team1Score,team2Score) {

    // typescript already handles the condition of !=null or bool
    if(team1Score && team2Score){
        var teamScore=(isTeam1 ? team1Score : team2Score);
        var opponentScore=(isTeam1 ? team2Score : team1Score);
        var winIndicator= teamScore > opponentScore ? "W" : "L";
        return winIndicator + teamScore + "-"  + opponentScore;
    }
    else{
      return "";
    }

  }

}
